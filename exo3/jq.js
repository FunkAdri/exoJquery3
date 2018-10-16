
alert("Salut, c'est Vincent Lagaffe ! Tu veux jouer au juste prix ? Alors appuie sur ok")

// Math.floor = arrondir au supp le nb aléatoire, l'inverse est Math.ceil
$(function(){
  var nbr = Math.floor(Math.random()*100);
  var nbt = 0;
// On met en place une fonction quand on clique sur le boutton réponse
$("#val").click(function(){
// On instaure une variable "number player"
  var nbp = $("#player").val();
// On ajoute 1 au compte des essais (On incrémente)
  nbt++;
// On donne toutes les conditions
  if (nbp > nbr){
// Conditions si le nombre est trop grand
    $("#result").text("C'est moins !");
  } else if (nbp < nbr){
// Conditions si le nombre est trop petit
    $("#result").text("C'est plus !");
  } else {
// Conditions si le nombre est trouvé
    $("#result").text("C'est gagné en "+nbt+" essais. Vous repartez donc avec une Jeep Renegade !");
  }
});
});
