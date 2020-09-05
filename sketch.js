var trex ,ground,inviground;
var trexrun,trexcollide,groundimage;
var score;
var cloudimage,ob1,ob2,ob3,ob4,ob5,ob6;
var gameover,restart;
var gameoverimage,restartimage;
var cloudsgroup,obstaclesgroup
var gamestate="play"

function preload(){
  trexrun=loadAnimation("trex1.png","trex3.png","trex4.png");
  trexcollide=loadImage("trex_collided.png");
  groundimage=loadImage("ground2.png");
  cloudimage=loadImage("cloud.png");
  ob1=loadImage("obstacle1.png");
  ob2=loadImage("obstacle2.png");
  ob3=loadImage("obstacle3.png");
  ob4=loadImage("obstacle4.png");
  ob5=loadImage("obstacle5.png");
  ob6=loadImage("obstacle6.png");
  gameoverimage=loadImage("gameOver.png");
  restartiage=loadImage("restart.png");
  
  
}

function setup() {
  createCanvas(600, 200);
  
  trex=createSprite(50,180,20,20);
  trex.addAnimation("run",trexrun);
  trex.scale=0.7
  
  ground=createSprite(300,185,600,5);
  ground.addImage("abc",groundimage);
  
  
  inviground=createSprite(300,190,600,5);
  inviground.visible=false
  
  cloudsgroup=new Group();
  obstaclesgroup=new Group();
  
}

function draw() {
  background(250);
  if(gamestate=="play"){
    ground.velocityX=-4;
    
    //groundreset
  if(ground.x<0){
    ground.x=ground.width/2
  }
    
   if(keyDown("space")){
    trex.velocityY=-12;
}
    
    trex.velocityY=trex.velocityY+1
    
    spawnclouds();
   spawnobstacles();
    
    if(trex.isTouching(obstaclesgroup)){
       trex.changeAnimation("crash",trexcollide);
      gamestate="end";
      
       }
    
    if(gamestate=="end"){
  ground.velocityX=0;
      trex.velocityY=0 ;
      cloudsgroup.setVelocityXEach(0);
      obstaclesgroup.setVelocityXEach(0);
      
      cloudsgroup.setLifetimeEach(-1);
      obstaclesgroup.setLifetimeEach(-1);
    }
    
       
  }
  
  
  
  trex.collide(inviground);
  
  
  
  drawSprites();
}

function spawnclouds(){
  if(frameCount% 100==0){
 var cloud=createSprite(600,random(100,150));
  cloud.velocityX=-5
    cloud.addImage (cloudimage)
    
    cloud.lifetime=120;
    cloud.depth=trex.depth;
    trex.depth=trex.depth+1      
    cloudsgroup.add(cloud);
       
}
  }
function spawnobstacles(){
  if(frameCount%120==0){
    var obstacle=createSprite(600,160,10,10)
    obstacle.velocityX=-5
      var num=Math.round(random (1,6));
      obstacle.lifetime=120;
    
    
    switch(num){
      case 1:obstacle.addImage(ob1);
        break;
        case 2:obstacle.addImage(ob2);
        break;
        case 3:obstacle.addImage(ob3);
        break;
        case 4:obstacle.addImage(ob4);
        break;
        case 5:obstacle.addImage(ob5);
        break;
        case 6:obstacle.addImage(ob6);
        break;
        default:
        break;
        
        
    }
    obstacle.scale=0.7  
      obstaclesgroup.add(obstacle);
    
    }
}
  
