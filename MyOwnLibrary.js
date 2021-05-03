function isTouching(sprite1, sprite2/*, touchColor, non*/){
    if(sprite1.x - sprite1.width/2 < sprite2.x + sprite2.width/2 && sprite1.x + sprite1.width/2 > sprite2.x - sprite2.width/2 && sprite1.y +  sprite1.height/2 > sprite2.y - sprite2.height/2 && sprite1.y - sprite1.height/2 < sprite2.y + sprite2.height/2)
    {
      return(true);
      //sprite1.shapeColor=touchColor;
    //sprite2.shapeColor=touchColor;
  }
  else{
    return(false);
    //sprite1.shapeColor=non;
  //sprite2.shapeColor=non;
  }
  }
function bounceOff(sprite, edge){

}