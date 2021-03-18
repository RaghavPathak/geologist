
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer , rubber,stone,ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
 hammer = new Hammer(200,200,20,20)
rubber= new Rubber(300,200,20,20)
 stone = new Stone(100,30,20,20)
ground = new Ground(400,450,800,30)

}


function draw() {
  rectMode(CENTER);
  background(0);
 
  
//hammer.display();
rubber.display();
stone.display();
hammer.display();
ground.display();

  
 
}



