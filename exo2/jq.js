$(function() { // permet de lancer les fonctions une fois le DOM chargé

var count = 0;// declaration de la variable count

  $("#buttonp").click(function() { // fonction incrementer variable count
    count++;
    console.log("var :"+count);// vérification de la variable count dans la console
    $("#text").val("Nombre de click : "+count);
  });

  $("#buttonm").click(function() { // même chose
    count--;
    console.log("var :"+count);
    $("#text").val("Nombre de click : "+count);
  });

});
