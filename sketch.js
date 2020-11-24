var a;
var circles=[];

var ground;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
function setup() {
  var canvas = createCanvas(1200,400);
  stroke(255)
  
ground = new Ground(600,height,1200,20);

block1 = new Block(810, 350);
block2 = new Block(815, 350);
block3 = new Block(820, 350);
block4 = new Block(825, 350);
block5 = new Block(830, 350);
block6 = new Block(835, 350);  
block7 = new Block(840, 350);
block8 = new Block(845, 350);
block9 = new Block(850, 350);
block10 = new Block(855, 350);
// camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 