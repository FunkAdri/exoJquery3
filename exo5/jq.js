$(document).keydown(function(e) {

  // Dimension de "l'écran"

  WinWidth = $(document).width();
  WinHeight = $(document).height();

  // Mise en place des touches

  switch (e.which) {
    case 37: // LEFT
    //console.log("key "+e.which);
    $("#cube").css({left: "-=10"});
    break;
    case 39: // RIGHT
    //console.log("key "+e.which);
    $("#cube").css({left: "+=10"});
    break;
    case 38: // UP
    //console.log("key "+e.which);
    $("#cube").css({top: "-=10"});
    break;
    case 40: // DOWN
    //console.log("key "+e.which);
    $("#cube").css({top: "+=10"});
    break;
  }

  // Création de la hitbox

  posXStart = Number(parseInt($("#cube").css("left")));
  posXStop =   posXStart+Number(parseInt($("#cube").css("width")));
  posYStart =  Number(parseInt($("#cube").css("top")));
  posYStop =   posYStart+Number(parseInt($("#cube").css("height")));

  // Système de téléportation au bord de la page

  // console.log("WINX: "+WinWidth+"\n cube: "+posXStart);
  // console.log("WINY: "+WinHeight+"\n cube: "+posYStart);

  if( posXStop > WinWidth){
    $("#cube").css({left: "0"});
  }
  if( posYStop > WinHeight){
    $("#cube").css({top: "0"});
  }
  if( posXStart < 0){
    var newPosX = (  WinWidth-Number(parseInt($("#cube").css("width")))  );
    $("#cube").css({left: newPosX+"px"});
  }
  if( posYStart < 0){
    var newPosY = (  WinHeight-Number(parseInt($("#cube").css("height")))  );
    $("#cube").css({top: newPosY+"px"});
  }


})
