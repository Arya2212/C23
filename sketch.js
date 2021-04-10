const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1= new Box(200,100,30,30);
ground=new Ground(200,300,400,20)
  

    
}

function draw(){
    background(0);
    Engine.update(engine);
   box1.display();
   ground.display();
}
