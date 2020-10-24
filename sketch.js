var car1,car2;
var crash1,crash2;
var speed1,speed2;
var weight1,weight2;

function setup() {
  createCanvas(800,400);
  speed1=60;
    speed2=50;
    car1=createSprite(50,150,20,20);
    car2=createSprite(50,300,20,20);
    car1.velocityX=speed1;
    car2.velocityX=speed2;
    car1.shapeColor="white";
    car2.shapeColor="white";
    crash1=createSprite(360,150,30,30);
    crash1.shapeColor="pink";
    crash2=createSprite(360,300);
    crash2.shapeColor="pink";
    weight1=2260;
    weight2=1522;
}

function draw() {
  background(255,255,255);  
  if(car1-crash1<car1.width/2+crash1.width/2&&crash1-car1<car1.width/2+crash1.width/2&&car1-crash1<car1.height/2+crash1.height/2&&crash1-car1<car1.height/2+crash1.height/2){
    car1.shapeColor="yellow";  
  }
   if(car2-crash2<car2.width/2+crash2.width/2&&crash2-car2<car2.width/2+crash2.width/2&&car2-crash2<car2.height/2+crash2.height/2&&crash2-car2<car2.height/2+crash2.height/2){
    car2.shapeColor="yellow";  
  }
  drawSprites();
}