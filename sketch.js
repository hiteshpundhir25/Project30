const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plat1,plat2,ball,slingshot;
var blck1,blck2,blck3,blck4,blck5,blck6,blck7,blck8,blck25;
var blck9,blck10,blck11,blck12,blck13,blck14,blck15,blck16;
var blck17,blck18,blck19,blck20,blck21,blck22,blck23,blck24;


function setup(){
  var canvas = createCanvas(1200,600);
  
  engine = Engine.create();
  world = engine.world;

  plat1 = new Ground(600,500,400,20);
  plat2 = new Ground(1000,300,350,20);

  blck1 = new Box(500,490,50,50);
  blck2 = new Box(550,490,50,50);
  blck3 = new Box(600,490,50,50);
  blck4 = new Box(650,490,50,50);
  blck5 = new Box(700,490,50,50);
  blck6 = new Box(449.5,490,50,50);
  blck7 = new Box(750,490,50,50);
  blck8 = new Box(650,448,50,50);
  blck9 = new Box(500,448,50,50);
  blck10 = new Box(550,448,50,50);
  blck11 = new Box(600,448,50,50);
  blck12 = new Box(700,448,50,50);
  blck13 = new Box(650,398,50,50);
  blck14 = new Box(550,398,50,50);
  blck15 = new Box(600,398,50,50);
  blck16 = new Box(600,348,50,50);
  blck17 = new Box(900,298,50,50);
  blck18 = new Box(950,298,50,50);
  blck19 = new Box(1000,298,50,50);
  blck20 = new Box(1050,298,50,50);
  blck21 = new Box(1100,298,50,50);
  blck22 = new Box(950,298,50,50);
  blck23 = new Box(1000,298,50,50);
  blck24 = new Box(1050,298,50,50);
  blck25 = new Box(1000,240,50,50);
  
  ball = new BaseClass(200,300,50,50);

  slingshot = new Launcher(ball.body,{x:200, y:300});

}
function draw(){
  background(91,143,221);
  Engine.update(engine);
  
  textSize(20);
  fill("red");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  plat1.display();
  plat2.display();

  blck1.display();
  blck2.display();
  blck3.display();
  blck4.display();
  blck5.display();
  blck6.display();
  blck7.display();
  blck8.display();
  blck9.display();
  blck10.display();
  blck11.display();
  blck12.display();
  blck13.display();
  blck14.display();
  blck15.display();
  blck16.display();
  blck17.display();
  blck18.display();
  blck19.display();
  blck20.display();
  blck21.display();
  blck22.display();
  blck23.display();
  blck24.display();
  blck25.display();
  
  ball.display();

  slingshot.display();

  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyDown('space')){
      slingshot.attach(this.ball);
  }
}