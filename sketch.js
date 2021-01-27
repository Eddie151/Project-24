
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var dustbin,dustbin2,dustbin3;
var ball;
function preload()
{
ground = createSprite(400,680,800,50)
ground.shapeColor = "green"
dustbin = createSprite(410,650,120,20)
dustbin.shapeColor = "white"
dustbin2 = createSprite(360,600,20,80)
dustbin2.shapeColor = "white"
dustbin3 = createSprite(460,600,20,80)
dustbin3.shapeColor = 'white'
ball = createSprite(150,650,10,10);
ball.shapeColor = "yellow"
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}



