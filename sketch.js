
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {

	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=new Bob(300,350,50); 
bob2=new Bob(350,350,50);
 bob3=new Bob(400,350,50);
  bob4=new Bob(450,350,50);
   bob5=new Bob(500,350,50);
	 fill ("brown");
	  roof1 = new Roof(400,100,300,40);
	   rope1= new Rope(bob1.body,roof1.body,-50*2,0);
	   rope2 = new Rope(bob2.body,roof1.body,-25*2,0); 
	   rope3= new Rope(bob3.body,roof1.body,-0*2,0);
	   rope4= new Rope(bob4.body,roof1.body,25*2,0);
	   rope5= new Rope(bob5.body,roof1.body,50*2,0); //sling6= new Suspender(bob6.body,ground1.body,-40*2,0); Engine.run(engine);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
roof1.display()
rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()

  drawSprites();
 
}



