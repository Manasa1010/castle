const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var rect1,rect2;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  //createSprite(400, 200, 50, 50);

  rect1 = new Rect(350,300,350);
  rect2 = new Rect(420,300,300);
  rect3 = new Rect(490,300,250);
  rect4 = new Rect(280,300,300);
  rect5 = new Rect(210,300,250);
  tri1 = new Triangle(210,155,40,PI/2);
  tri2 = new Triangle(280,130,40,PI/2);
  tri3 = new Triangle(350,105,40,PI/2);
  tri4 = new Triangle(420,130,40,PI/2);
  tri5 = new Triangle(490,155,40,PI/2);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rect1.display() ;
  rect2.display();
  rect3.display();
  rect4.display();
  rect5.display();
  tri1.display();
  tri2.display();
  tri3.display();
  tri4.display();
  tri5.display();
  drawSprites();
}