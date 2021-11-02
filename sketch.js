var bg_img;
var rover_img;
var copter,static;
var rotor_annim;
var gravity = -0.1;
var vy = 0;

function preload()
{
  bg_img= loadImage("bg_2.jpeg");
  rover_img = loadImage("rover.png");
  static = loadAnimation("full/frame_21.png");
  rotor_anim = loadAnimation("full/frame_21.png","full/frame_22.png","full/frame_23.png","full/frame_24.png","full/frame_25.png","full/frame_26.png","full/frame_27.png")
  rotor_anim.playing = true;
  rotor_anim.looping = true;
}
function setup() 
{
  createCanvas(800, 500);
  copter = createSprite(420,400,100,100);
  copter.scale = 0.5;
  copter.addAnimation('stat',static);
  copter.addAnimation('rotating',rotor_anim);
  copter.changeAnimation('rotating');

  //landing zone
  var lz = createSprite(100,490,150,20);
 
}

function draw() 
{
  background(200);
  image(bg_img,0,0,800,500);
  push();
  textSize(30);
  fill(255);
  text("First Flight of Ingenuity",220,30);
  pop();
  
  var vx = copter.velocity.x;

  push()
  textSize(15);
  fill(0);
  text("Horizontal Velocity: " +round(vx,2),20,50);
  //text("Vertical Velocity: "+round(vy),600,75);
  pop();

  copter.position.y -=vy;
  vy +=gravity;
  copter.position.y = constrain(copter.position.y ,0,height-50);

  if(copter.position.x<=200 && (vx<2 && vx>-2) && (copter.position.y>=440))
  {
    rotor_anim.playing = false;
    copter.changeAnimation('stat');
    noLoop();
  }
    
 console.log(copter.position.y);
  drawSprites();
}
function keyPressed()
{
  if(keyCode == LEFT_ARROW)
  {
    copter.velocity.x -= 1;
  }

  if(keyCode == RIGHT_ARROW)
  {
    copter.velocity.x += 1;
  }
  if(keyCode == UP_ARROW)
  {
    vy = 2;
    console.log(vy);
  
  }

  if(keyCode == 32)
  {
    rotor_anim.playing = true;
    copter.changeAnimation('rotating');
    
  }
}

