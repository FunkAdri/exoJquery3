// déclaration de la variable count et donne la valeur 0
var count = 0;
// on lie l'élément html id=button à la fonction click et lorsqu'on clique ça ajoute +1 à count
$("#button").click(function() {
  count++;
// Fait apparaître une phrase avec le nombre de click au total
  $("#counter").text("Nombre de click : "+count);
});
