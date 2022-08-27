
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var retangulo1, retangulo2, retangulo3;



var angle=60;
//definir uma variavel de angulo para casa objeto, podendo conter todos o mesmo valor ou não
var angle2=60;
var angle3=60;


function preload()
{
	
}

function setup() {
	createCanvas(550, 450);


	engine = Engine.create();
	world = engine.world;

	//para o projeto funcionar corretamente apenas ficou faltando inserir  atributo isStatic, para os objetos não caírem.
	
	var retangulo_option = { isStatic: true, 
				restitution:0.4, friction:0.02 }

	retangulo1=Bodies.rectangle(250, 200, 150, 20, retangulo_option);
	retangulo2=Bodies.rectangle(250, 200, 150, 20, retangulo_option);
	retangulo3=Bodies.rectangle(250, 200, 150, 20, retangulo_option);

	World.add(world, retangulo1);
	World.add(world, retangulo2);
	World.add(world, retangulo3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Aquamarine");

  push(); 
  translate(retangulo1.position.x,retangulo1.position.y); 
  rotate(angle);


  rect(0, 0, 150, 20);
  pop(); 
  angle +=0.2;
	
//criar uma nova configuração para cada objeto(2 e 3), sempre entre push(); e pop(); pois cada objeto rotacionara em direções e velocidade diferentes	
  push(); 
  translate(retangulo2.position.x,retangulo2.position.y); 
  rotate(angle2);
  rect(0, 0, 150, 20);
  pop(); 
  angle2 -=0.5;

  rect(retangulo3.position.x, retangulo3.position.y, 150, 20);

  
  drawSprites();
 
}



