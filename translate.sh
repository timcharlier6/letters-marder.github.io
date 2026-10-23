#!/usr/bin/env bash
set -euo pipefail

input=${1:?Usage: $0 input.txt language-code output.txt}
language=${2:?Usage: $0 input.txt language-code output.txt}
output=${3:?Usage: $0 input.txt language-code output.txt}
limit=3000

tmpdir=$(mktemp -d)
trap 'rm -rf "$tmpdir"' EXIT

# Split into chunks, preferring paragraph boundaries and then spaces.
python3 - "$input" "$tmpdir" "$limit" <<'PY'
import sys
from pathlib import Path

source, directory, limit = Path(sys.argv[1]), Path(sys.argv[2]), int(sys.argv[3])
text = source.read_text()
chunks, current = [], ""

for paragraph in text.splitlines(keepends=True):
    while len(paragraph) > limit:
        if current:
            chunks.append(current)
            current = ""
        cut = paragraph.rfind(" ", 0, limit)
        if cut < 1:
            cut = limit
        chunks.append(paragraph[:cut])
        paragraph = paragraph[cut:]

    if current and len(current) + len(paragraph) > limit:
        chunks.append(current)
        current = ""
    current += paragraph

if current:
    chunks.append(current)

for i, chunk in enumerate(chunks, 1):
    (directory / f"{i:04}.txt").write_text(chunk)

if not chunks:
    raise SystemExit("Input file is empty.")
print(f"Translating {len(chunks)} chunks...")
PY

: > "$output"
for chunk in "$tmpdir"/*.txt; do
  translated="${chunk%.txt}.translated"
  trans -b -i "$chunk" ":$language" -o "$translated"
  cat "$translated" >> "$output"
  printf '\n' >> "$output"
  sleep 2
done

echo "Saved translation to $output"
