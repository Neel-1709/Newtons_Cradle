const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world;
var roof;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;


//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
    var ball_options={
		isStatic:false,
		restitution: 1,
		friction:1,
		density:1.2
	}
	
	ball1 = Bodies.circle(315,300,10,ball_options);
	World.add(world,ball1);
	ball2 = Bodies.circle(355,300,10,ball_options);
	World.add(world,ball2);
	ball3 = Bodies.circle(395,300,10,ball_options);
	World.add(world,ball3);
	ball4 = Bodies.circle(435,300,10,ball_options);
	World.add(world,ball4);
	ball5 = Bodies.circle(475,300,10,ball_options);
	World.add(world,ball5);
	
	rope1 = new rope(ball1,roof,-80,0)

	rope2 = new rope(ball2,roof,-40,0)

	rope3 = new rope(ball3,roof,0,0)

	rope4 = new rope(ball4,roof,40,0)

	rope5 = new rope(ball5,roof,80,0)
	
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("skyblue");
  Engine.update(engine);
  rect(roof.position.x,roof.position.y,230,20);
  
  ellipse(ball1.position.x,ball1.position.y,35,35);
  ellipse(ball2.position.x,ball2.position.y,35,35);
  ellipse(ball3.position.x,ball3.position.y,35,35);
  ellipse(ball5.position.x,ball5.position.y,35,35);
  ellipse(ball4.position.x,ball4.position.y,35,35);
  //call display() to show ropes here
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  //create ellipse shape for multiple bobs here

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1,ball1.position,{x:-10,y:-10})
	}

}