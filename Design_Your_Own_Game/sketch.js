
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var obstacle1;
var obstacle2;
var obstacle3;
var obstacle4;

var player;
var slingshot;

function preload(){
	
}

function setup() {
	createCanvas(displayWidth,displayHeight);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.	
	obstacle1 = new Levels(300,700,300,10);
	obstacle2 = new Levels(600,650,100,10);
	obstacle3 = new Levels(830,600,230,10);
	obstacle4 = new Levels(1080,680,150,10);
	obstacle5 = new Levels(1290,620,150,10);
	
	player = new Ball(200,650,30,30);
	slingshot = new Control(player.body,{x:200 , y:600});

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background(230);
	
   Controller();

	obstacle1.display();
	obstacle2.display();
	obstacle3.display();
	obstacle4.display();
	obstacle5.display();

	player.display();
	slingshot.display();

  drawSprites();
 
}

function mouseDragged () {
    Matter.Body.setPosition (player.body, {x: mouseX, y: mouseY});
	slingshot.attach (player.body);
}

function mouseReleased () {
    slingshot.fly ();
}

/*function keyPressed () {
    if (keyCode === 32) {
		Matter.Body.setPosition (player.body, {x:200, y:100});
        slingshot.attach (player.body);
	}
}*/

function Controller(){
    /*if(keyDown("a")){
        player.body.x = player.body.x - 10;
        player.changeImage("left",player_left);
     }

     if(keyDown("w")){
         player.y = player.y - 11;
         camera.position.y = camera.position.y-11;
     }

     if(keyDown("d")){
        player.x = player.x + 10;
        player.scale = 1.8;
     }*/
}