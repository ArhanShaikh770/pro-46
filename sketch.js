var thief,police,obstacle;
var score = 0;
var gameState = 0;
var cityBg;
var policeI,thiefI;


function preload(){
cityBg = loadImage("Images/bg.jpg")
policeI = loadAnimation("Images/Police/P1.png","Images/Police/P2.png","Images/Police/P3.png","Images/Police/P4.png","Images/Police/P5.png","Images/Police/P6.png","Images/Police/P7.png","Images/Police/P8.png");
thiefI = loadAnimation("Images/Thief/T1.png","Images/Thief/T2.png","Images/Thief/T3.png","Images/Thief/T4.png","Images/Thief/T5.png","Images/Thief/T6.png");

}


function setup() {
  createCanvas(800,600);
 
  city = createSprite(850,350,1700,700);
  city.addImage(cityBg);
  city.scale=0.8;
  //city.x = city.width/2;
  
 


  thief = createSprite(500, 530, 50, 50);
  thief.addAnimation("thief_running",thiefI);
  thief.scale = 0.65;

  police = createSprite(100, 520, 50, 50);
  police.addAnimation("police_running",policeI);
  police.scale = 0.60;
 
  
}

function draw() {


  city.velocityX = 3;
  if(city.x > 600){
    city.x = 400;
  }



  drawSprites();
}