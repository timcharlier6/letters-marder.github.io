$(document).ready(function () {
  console.log("Hello from main.js");
  const $main = $("main");
  let string = `Cela, aussi, est un mode de mouvement de la plante: voyager sur les flux d’air ou sur les ailes d’une abeille.\n
Cherchant un refuge, nous fuyons les éléments, alors que les plantes s'exposent à l'air, à la terre et à l'humidité.\n
Comme les feuilles des plantes, notre peau détecte l'humidité et la température, les gradients de lumière et les vibrations.\n
Dans les bois, l'éclat du soleil est plus doux, plus subtil, plus ludique, avec des mosaïques complexes d'ombre et de lumière.\n
Dans un environnement où les ressources sont limitées, la décision de la plante sur le site exact de sa nouvelle croissance — décision qui a été prise par plus de quinze stimuli environnementaux — ne laisse pas beaucoup de marge d’erreur.\n
J'ai eu l'impression que tout se passait plus lentement et que, dans cette décélération qui facilitait l'attention portée aux plantes et aux éléments, la vie devenait plus vivante, le temps était gagné pour la vie.\n
L'enracinement des plantes dans le sol détermine leur attention aux lieux qu'elles habitent, aux lieux qu'elles ne peuvent pas abandonner ou nier à la manière des animaux ou des humains.\n
La reproduction des mêmes structures végétales telles que les branches et les feuilles, garantit que la plante ait un certain nombre d’antennes vertes qui surveillent constamment l’environnement.\n
Le mot grec pour «plante» est phuton, «un être qui grandit».\n
Les plantes n’ont nulle part où se réfugier ou se cacher, c’est pourquoi une évaluation des dangers et des défis est d’autant plus indispensable pour elles.\n
Libérant du pollen, a la merci du vent ou des insectes, elles se jettent dehors sans aucune garantie de succès.\n
Lorsque je m'attarde avec les plantes, je me retrouve en communion avec tout ce qu'elles sont et vivent, et je me retrouve avec moi-même différemment, je deviens moi-même autrement.\n
Notre capacité d'attention est plus courte, notre capacité réceptive plus faible, notre attachement à la personne ou à l'objet de notre attention moins fidèle.\n
Nous pouvons illustrer esthétiquement l’héritage végétal en nous, le sens fugace de notre propre végétation.\n
Nous, ainsi que tout ce qui vit, recevons toujours beaucoup plus des plantes que nous ne leur rendons, car les plantes respirent pour tous les animaux et les êtres humains sans exception.\n
Tous les êtres vivants terrestres respirent dans l'atmosphère à laquelle ils appartiennent, dans laquelle ils sont enracinés et qu'ils doivent partager pour subsister.\n
Tout se ralentit au rythme de leur croissance.\n
`;
  let sentences = string
    .split(/\n/)
    .filter((sentence) => sentence.trim().length > 0);

  console.log(sentences[0]);
  sentences.forEach((sentence) => {
    let counter = 0;
    // create p with jquery
    const $p = $("<p></p>");
    const intervalId = setInterval(() => {
      $p.append(sentence[counter]);
      $main.append($p);
      counter++;
      if (counter === sentence.length) {
        clearInterval(intervalId);
      }
    }, 100);
  });
});
