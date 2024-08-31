$(document).ready(function () {
  console.log("Hello from main.js");
  const $p = $("#p");
  let string = `Cela, aussi, est un mode de mouvement de la plante: voyager sur les flux d’air ou sur les ailes d’une abeille.                         \n
Cherchant un refuge, nous fuyons les éléments, alors que les plantes s'exposent à l'air, à la terre et à l'humidité.                         \n
Comme les feuilles des plantes, notre peau détecte l'humidité et la température, les gradients de lumière et les vibrations.                         \n
Dans les bois, l'éclat du soleil est plus doux, plus subtil, plus ludique, avec des mosaïques complexes d'ombre et de lumière.                         \n
Dans un environnement où les ressources sont limitées, la décision de la plante sur le site de sa nouvelle croissance ne laisse pas beaucoup de marge d’erreur.                         \n
J'ai eu l'impression que tout se passait plus lentement et que la vie devenait plus vivante, le temps était gagné pour la vie.                         \n
L'enracinement des plantes dans le sol détermine leur attention aux lieux qu'elles habitent et ne peuvent pas abandonner.                         \n
La reproduction des mêmes structures végétales telles que les branches et les feuilles, garantit que la plante ait un certain nombre d’antennes vertes qui surveillent constamment l’environnement.                         \n
Libérant du pollen, a la merci du vent ou des insectes, elles se jettent dehors sans aucune garantie de succès.                         \n
Lorsque je m'attarde avec les plantes, je me retrouve en communion avec tout ce qu'elles sont et vivent, et je deviens moi-même autrement.                         \n
Nous pouvons illustrer esthétiquement l’héritage végétal en nous, le sens fugace de notre propre végétation.                         \n
Nous, ainsi que tout ce qui vit, recevons toujours beaucoup plus des plantes que nous ne leur rendons, car les plantes respirent pour tous les animaux et les êtres humains sans exception.                         \n
Tout se ralentit au rythme de leur croissance...                         \n
`;

  let counter = 0;
  let subCounter = 0;
  const intervalId = setInterval(() => {
    $p.append(string[counter]);
    if (subCounter > 80 && string[counter] === " ") {
      $p.append("<br>");
      subCounter = 0;
    }
    if (string[counter] === "\n") {
      subCounter = 0;
      $p.text("");
    }
    subCounter++;
    counter++;
    if (counter === string.length) {
      console.log("End of string" + intervalId);
      counter = 0;
      subCounter = 0;
    }
  }, 200);
});
