

var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  

  
//  red_balloon = createSprite(50, 180, 1, 1);
// red_balloon.addImage(red_balloonImage)
//   red_balloon.scale = 0.1
  
  //create line of red balloons using for loop

 
}

function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  redb()
  blueb()
  greenb()
  pinkb()
  drawSprites();
}

// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
}
function redb(){
  if(frameCount%60==0){
     red_balloon = createSprite(50, Math.round(random(300,400)), 1, 1);
  red_balloon.addImage(red_balloonImage);
  red_balloon.scale = 0.1
red_balloon.velocityX=3

    
  }
}
    function blueb(){
  if(frameCount%120==0){
     blue_balloon = createSprite(50, Math.round(random(210,250)), 1, 1);
  blue_balloon.addImage( blue_balloonImage);
   blue_balloon.scale = 0.1
 blue_balloon.velocityX=3

    
  }
}
      function greenb(){
  if(frameCount%180==0){
     green_balloon = createSprite(50, Math.round(random(200,300)), 1, 1);
  green_balloon.addImage( green_balloonImage);
   green_balloon.scale = 0.1
 green_balloon.velocityX=3

    
  }
}
function pinkb(){
  if(frameCount%240==0){
     pink_balloon = createSprite(50, Math.round(random(150,200)), 1, 1);
  pink_balloon.addImage( pink_balloonImage);
   pink_balloon.scale = 1
 pink_balloon.velocityX=3

    
  }
}
