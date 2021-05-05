
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

function preload(){
	//ball1 = loadImage('sprites/paper.png');
	boxImage = loadImage('dustbingreen.png');
}	




function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(100, 200)
	ground = new Ground(200,390,1600,20);
	border_right = new Border(715, 310, 10, 125);
	border_left = new Border(585, 310, 10, 125)
	box = new Box(650, 310, 100, 15)

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background('white'); 
  Engine.update(engine);
  ball1.display();
  ground.display();
  border_left.display();
  border_right.display();
  box.display();

 
 //drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW ){
	console.log(ball1.body.position);
	Matter.Body.applyForce(ball1.body, ball1.body.position,{x:30, y:-25})
}
}


