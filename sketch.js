
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var block1;
var block2;
var block3;
var plane;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var block1_options={
		restitution: 0.5,	
		friction: 0.02,
		frictionAir:0
	}
	var block2_options={
		restitution: 0.7,	
		friction: 0.01,
		frictionAir:0.1
	}
	var block3_options={
		restitution: 0.1,	
		friction: 1,
		frictionAir:0.3
	}

	var plane_options={
		isStatic:true	
	}


	plane = Bodies.rectangle(200,700,400,20,plane_options); 

	World.add(world,plane); 

	block1 = Bodies.circle(220,10,10,block1_options);	
	World.add(world,block1);
	
	block2 = Bodies.rectangle(110,50,10,10,block2_options);	
	World.add(world,block2);
	
	block3 = Bodies.rectangle(350,50,10,10,block3_options);	
	World.add(world,block3);

	rectMode(CENTER);
	ellipseMode(CENTER);

	// Engine.run(engine);
  
}


function draw() {
  
  background(0,200,97);
  Engine.update(engine);
  fill(200,0,0);
  ellipse(block1.position.x,block1.position.y,60); 
  rect(block2.position.x,block2.position.y,30); 
  rect(block3.position.x,block3.position.y,30); 
  fill(0,200,97);
	rect(plane.position.x,plane.position.y,1200,20); 
//   drawSprites();
 
}



