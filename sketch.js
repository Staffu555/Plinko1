var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0,z=1;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/10, 10, divisionHeight));
  }
   
  for (var k = 160; k <=240; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/10, 10, divisionHeight));
  }
   
  for (var k = 240; k <=320; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/10, 10, divisionHeight));
  }
   
  for (var k = 320; k <=400; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/10, 10, divisionHeight));
  }
   
  for (var k = 400; k <=480; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/10, 10, divisionHeight));
  }
   
  for (var k = 480; k <=560; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/10, 10, divisionHeight));
  }
   
  for (var k = 640; k <=720; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/10, 10, divisionHeight));
  }
   
  for (var k = 720; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/10, 10, divisionHeight));
  }
  for (var k = 800; k <=880; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/10, 10, divisionHeight));
  }
   
   

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
   for (var n = 25;n<=width-10;n=n+50)
   {
     plinkos.push(new Plinko(n,275));
   }
  
  //create 4th row of plinko objects
  for (var m = 50;m<=width-10;m=m+50)
  {
    plinkos.push(new Plinko(m,375));
  }
   
  //create 5th row of plinko objects
  for (var q = 75;q<=width-10;q=q+50)
  {
    plinkos.push(new Plinko(q,475));
  }

  //create 6th row of plinko objects
  for (var t = 50;t<=width-10;t=t+50)
  {
    plinkos.push(new Plinko(t,575));
  }
  //create particle objects
  
} 

 


function draw() {
  background("black");
  textSize(20)
  text("Press Space for Ball Madness!!!",200,230)
  paricles();
  Engine.update(engine);
  ground.display();

  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();  
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
   for(var m = 0;m<particles.length;m++){
     particles[m].display();
   }
}



function paricles(){
if (frameCount%90==0||keyCode == 32){
  particles.push(new Particle(random(width/2-100,width/2-100),30));
}
}