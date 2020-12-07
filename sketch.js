
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,side1,side2,side3,ground;
function preload()
{
	
}

function setup() {
	createCanvas(4000,700);


	engine = Engine.create();
	world = engine.world;

	//Engine.run(engine);
  side1=new Side(1000,590,150,10);
  side2=new Side(920,490,10,200);
  side3=new Side(1080,490,10,200); 
  paper=new Paper(100,595,70);
  ground=new Ground(2000,600,4000,10);
}


function draw() {
  //rectMode(CENTER);
  background("white");
  Engine.update(engine);
 side1.display();
 side2.display();
 side3.display();
 paper.display();
ground.display();
drawSprites();
// keyPressed();
}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:140,y:-100})
}	 
}


