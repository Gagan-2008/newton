
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  bob1=new Bob(300,300,50);
  bob2=new Bob(350,300,50);
  bob3=new Bob(400,300,50);
  bob4=new Bob(450,300,50);
  bob5=new Bob(500,300,50);

  roof = new Roof(400,100,300,20);
  
  chain1= new Chain(bob1.body,roof.body,-100,0);
  chain2= new Chain(bob2.body,roof.body,-50,0);
  chain3= new Chain(bob3.body,roof.body,0,0);
  chain4= new Chain(bob4.body,roof.body,50,0);
  chain5= new Chain(bob5.body,roof.body,100,0);
  
	Engine.run(engine);
  
}


function draw() {
  background(192,192,192);
  rectMode(CENTER);
 
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  drawSprites ();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
} 




