//name spacing
const  Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;


var engine,world;
var ground,box;
var ball;
var ground1;
var box1,box2;
function setup(){
createCanvas(800,500)
//creating our engine
engine = Engine.create();
//creating our wrld
world = engine.world;


//adding bodies to the world








ball = Bodies.circle(100,100,25)


World.add(world,ball);


//BLUEPRINT OF GROUND
ground1= new Ground(400,480,800,40);

box1 = new Box(400,280,50,50)

box2 = new Box(420,300,50,50)


}



function draw(){
background("black");
rectMode(CENTER)
Engine.update(engine)
fill("white")

ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,25,25)

ground1.display();
box1.display();
box2.display();

}