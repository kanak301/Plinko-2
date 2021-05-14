const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world ;
var canvas;
var d1,d2,d3,d4,d5, d6;
var particles = [];
var plinkos = [];

function setup() {

  var canvas = createCanvas(400,400);

  engine = Engine.create();
	world = engine.world;

  for (var i = 0;i<=400 ;i = i + 50 ) {
    plinkos.push(new PlinkoClass(i,100,10));
  }

  for (var i = 25;i<=400 ;i = i + 50 ) {
    plinkos.push(new PlinkoClass(i,150,10));
  }

  for (var i = 0;i<=400 ;i = i + 50 ) {
    plinkos.push(new PlinkoClass(i,200,10));
  }

  d1 = new DividerClass (200,370,400,20);
  d2 = new DividerClass(40,310,10,100);
  d3 = new DividerClass(120,310,10,100);
  d4 = new DividerClass(200,310,10,100);
  d5 = new DividerClass(280,310,10,100);
  d6 = new DividerClass(360,310,10,100);

}

function draw() {
  rectMode(CENTER);
  background(0);  

  Engine.update(engine);

  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();

for( var i = 0; i < plinkos.length;i++){
  plinkos[i].display();
}

if(frameCount%60==0){
  particles.push(new ParticleClass ( random(0,400), 10, 5));
}

for( var i = 0; i < particles.length;i++){
  particles[i].display();
}
  drawSprites();
}