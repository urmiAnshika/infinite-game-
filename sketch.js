var PLAY = 1;
var END = 0;
var gameState = PLAY;

var boy, boyImage, boyStoppedImage, mountain, mountainImage, rock, rockImage, cactus, cactusImage; 
var gameOver, gameOverImage, restart, restartImage; 
var score; 

function preload (){
    boyImage = loadAnimation("boy.png1.jpg") ; 
    boyStoppedImage=loadAnimation("boy stopped.jpg");
    mountainImage = loadAnimation("mountain.jpeg") ;
    
    rockImage= loadAnimation("rock.jpeg") ; 
    cactusImage=loadAnimation("cactus.jpeg"); 

    gameOverImage=loadAnimation("game over.png") ;
    restartImage=loadAnimation("restart.png");
}
function setup(){
 createCanvas(600,200) ; 
 text("Score: "+ score, 500,50);

 boy=createSprite(50,180,20,50);
 boy.addAnimation("running", boyImage);
 boy.addAnimation("stopped", boyStoppedImage); 
 boy.scale=0.5; 

mountain = createSprite(200,180,400,20);
mountain.addAnimation("mountain",mountainImage);
 mountain.x = mountain.width /2;

 

 invisibleGround = createSprite(200,190,400,10);
 invisibleGround.visible = false;
 
 rockGroup = createGroup();
 cactusGroup = createGroup();
 
 console.log("Hello" + 5);
 
 score = 0; 
 gameOver=createSprite(300,100); 
 gameOver.addImage(gameOverImage) ;
 gameOver.scale=0.5; 
 
 restart=createSprite(300,140) ;
 restart.addImage(restartImage) ; 
 restart.scale=0.5; 

} 

function draw() {
    background(180);
    text("Score: "+ score, 500,50);
    
    
    
    if(gameState === PLAY){
  
      gameOver.visible=false; 
      restart.visible=false; 
         
      mountain.velocityX = -4;
     
      score = score + Math.round(frameCount/60);
      
      if (mountain.x < 0){
        mountain.x = mountain.width/2;
      }
      
     
      if(keyDown("space")&& boy.y >= 100) {
          boy.velocityY = -13;
      }
      
    
      boy.velocityY = boy.velocityY + 0.8
    
    
      spawnCactus();
    
     
      spawnRock();
      
      
      if(RockGroup.isTouching(boy)){
        gameState = END;
    }
  }
  
     else if (gameState === END) {
  
      gameOver.visible=true; 
      restart.visible=true; 
         
        mountain.velocityX = 0;
       
       rockGroup.setVelocityXEach(0);
       cactusGroup.setVelocityXEach(0);
     }
    
   
  
    boy.collide(invisibleGround);
    
    
    
    drawSprites();
  }
  function spawnRock(){
    if (frameCount % 60 === 0){
      var rock = createSprite(400,165,10,40);
      rock.velocityX = -6;
      
       rock.x = Math.round(random(1,6));
      
       rock.scale = 0.5;
       rock.lifetime = 300;
      
       rockGroup.add(rock);
    }
   }
   
   function spawnCactus() {
      if (frameCount % 60 === 0) {
        cactus = createSprite(600,100,40,10);
       cactus.y = Math.round(random(10,60));
      
       cactus.scale = 0.5;
       cactus.velocityX = -3;
       
       cactus.lifetime = 134;
       
       cactus.depth = boy.depth;
       boy.depth = boy.depth + 1;
       
      cactusGroup.add(cactus);
       }
   }
   
   







