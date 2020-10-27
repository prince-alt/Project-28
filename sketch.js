
const Engine = Matter.Engine;
const Worldc = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree1,ground1;
var boy,boyimg;
var stone1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12,mango13,mango14,mango15;
var chain1;

function preload()
{
	
boyimg = loadImage("boy.png");

}

function setup() {
	createCanvas(1200, 700);
    
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	boy = createSprite(200,580,50,50);
	boy.addImage(boyimg);
	boy.scale = 0.13;

	stone1 = new stone(130,500,20);

	tree1 = new tree(900,630);

	ground1 = new ground(400,650);

	mango1 = new mango(900,200,20);
	mango2 = new mango(950,200,30);
	mango3 = new mango(1000,280,20);
	mango4 = new mango(1050,200,35);
	mango5 = new mango(850,150,25);
	mango6 = new mango(800,100,35);
	mango7 = new mango(920,80,25);
	mango8 = new mango(880,40,30);
	mango9 = new mango(900,130,30);
	mango10 = new mango(1000,130,35);
	mango11 = new mango(700,230,25);
	mango12 = new mango(780,280,35);
	mango13 = new mango(740,170,25);
	mango14 = new mango(790,190,35);
	mango15 = new mango(850,250,25);

	chain1 = new chain(stone1.body,{x:130,y:500});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(135,206,235));
  
  stone1.display();

  tree1.display();

  ground1.display();
  
  drawSprites();

  chain1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();

}

function mouseDragged(){

	Matter.Body.setPosition(stone1.body,{x:mouseX,y : mouseY});
	
	}
	
	function mouseReleased(){
	
	chain1.fly();
	
	}
	

