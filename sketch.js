var fixedRect,movingRect, bouncingRect, top, bottom, left, right;
function setup() {
  createCanvas(800,800);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  bouncingRect = createSprite(200, 400, 70, 40);
  bouncingRect.velocityX = 6;
  bouncingRect.velocityY = 8;
  top = createSprite(400, 0.5, 800, 1);
  bottom = createSprite(400, 799.5, 800, 1);
  left = createSprite(0.5, 400, 1, 800);
  right = createSprite(799.5, 400, 1, 800);
  top.visible = false;
  bottom.visible = false;
  right.visible = false;
  left.visible = false;
}
function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  //bouncingRect.bounceOff(top);
  //bouncingRect.bounceOff(left);
  //bouncingRect.bounceOff(right);
  //bouncingRect.bounceOff(bottom);
  //isTouching(movingRect, fixedRect, "red", "green");
  //isTouching(movingRect, bouncingRect, "blue", "green");
  //isTouching(fixedRect, bouncingRect, "black", "green");
  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }

  if(isTouching(movingRect, bouncingRect)){
    movingRect.shapeColor = "blue";
    bouncingRect.shapeColor = "blue";
  }
  if(isTouching(fixedRect, bouncingRect)){
    fixedRect.shapeColor = "black";
    bouncingRect.shapeColor = "black";
  }
  if(isTouching(movingRect, bouncingRect) === false && isTouching(movingRect, fixedRect) === false){
    movingRect.shapeColor = "green";
  }
  if(isTouching(fixedRect, movingRect) === false && isTouching(fixedRect, bouncingRect) === false){
    fixedRect.shapeColor = "green";
  }
  if(isTouching(fixedRect, bouncingRect) === false && isTouching(movingRect, bouncingRect) === false){
    bouncingRect.shapeColor = "green";
  }
  drawSprites();
}