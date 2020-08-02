var mObject, fObject;
function setup() {
  createCanvas(800,400);
  mObject=createSprite(400, 200, 80, 30);
  fObject=createSprite(400, 200, 30, 80);
  mObject.shapecolor="green";
  fObject.shapecolor="green";
}

function draw() {
  background(0,0,0); 
  mObject.x=World.mouseX;
  mObject.y=World.mouseY;
  
  if(mObject-fObject===fObject.width/2+mObject.width/2)
  {
    mObject.shapecolor="red";
  fObject.shapecolor="red";
  }
 else
 {
  mObject.shapecolor="green";
  fObject.shapecolor="green";
 }
 drawSprites();
}
