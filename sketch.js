const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1
var bobObject2
var bobObject3
var bobObject4
var bobObject5
var rope1
var rope2
var rope3
var rope4
var rope5
var roof


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof (400, 200, 400, 20);

  //bob
  bobObject1 = new Bob (400, 500, 50)
  bobObject2 = new Bob (400, 500, 50)
  bobObject3 = new Bob (400, 500, 50)
  bobObject4 = new Bob (400, 500, 50)
  bobObject5 = new Bob (400, 500, 50)

  //rope
  rope1 = new Rope (roof.body, bobObject1.bob);
  rope2 = new Rope (roof.body, bobObject2.bob);
  rope3 = new Rope (roof.body, bobObject3.bob);
  rope4 = new Rope (roof.body, bobObject4.bob);
  rope5 = new Rope (roof.body, bobObject5.bob);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roof.display();
  
  //one
  bobObject1.display();
  rope1.display();

  //two
  bobObject2.display();
  rope2.display();

  //three
  bobObject3.display();
  rope3.display();

  //four
  bobObject4.display();
  rope4.display();

  //five
  bobObject5.display();
  rope5.display();
}