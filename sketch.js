//the objects to be created
var rballoon,blballoon,pballoon,gballoon;
var bg,bow,arrow,sky,shoot,select_balloon;
var redB,blueB,pinkB,greenB,arrowsGroup;
var score=0  ;

function preload(){
sky = loadImage("background0.png");
redb = loadImage("red_balloon0.png"); 
blueb = loadImage("blue_balloon0.png"); 
pinkb = loadImage("pink_balloon0.png");
greenb = loadImage("green_balloon0.png");
bowing = loadImage("bow0.png");
shoot = loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
//creating the ground
bg = createSprite(0,0,600,600); 
bg.addAnimation("ground",sky);
bg.scale = 3;  
bg.velocityX=-5;

//creating groups for red,blue,green and yellow balloons as well as arrows
 redB = createGroup();
 blueB = createGroup();
 pinkB = createGroup();
 greenB = createGroup();
 arrowsGroup = createGroup();
     
//creating the bow sprite
bow = createSprite(595,300,20,20);
bow.addAnimation("archery",bowing);  
bow.scale = 1.2; 
}
function draw() {

//making the background white
background("white");

//making the ground move infinitely
if(bg.x<0){
bg.x=bg.width/2;  
}

//making the arrows shoot when the space key is pressed 
  if(keyDown("space")){
// spawn the arrows
spawnArrows();          
  }  

//making the bow move at our mouse's will  
bow.y = World.mouseY;

// making the 4 balloon groups(red.blue,pink and green) as well as the arrows group to destroy when they touch each other
if(arrowsGroup.isTouching(redB)){
arrowsGroup.destroyEach();
redB.destroyEach();
score=score+10;
}  

if(arrowsGroup.isTouching(blueB)){
arrowsGroup.destroyEach();
blueB.destroyEach();
score=score+5;
}  
  
  
if(arrowsGroup.isTouching(pinkB)){
arrowsGroup.destroyEach();
pinkB.destroyEach();
score=score+3;
}  
  
if(arrowsGroup.isTouching(greenB)){
arrowsGroup.destroyEach();
greenB.destroyEach();
score=score+1;
}  
  
//selecting any of the four coloured balloons randomly 
var select_balloon = Math.round(random(1,4));
  
if(World.frameCount % 80 === 0){
console.log(select_balloon);
  if(select_balloon === 1){
  redBalloon();
  } else if ( select_balloon === 2 ){
   blueBalloon();
  } else if ( select_balloon === 3) {
   greenBalloon();
  } else {
   pinkBalloon();
  }  
}
  
drawSprites();
  
//adding score in the game
textSize(24);
text("Score : " + score , 250,300);      
console.log("this is ");
}

//function for creating arrows
function spawnArrows(){
var arrow = createSprite ( 100,100,60,10);
arrow.addImage("arrows",shoot);
arrow.x=360;
arrow.y=bow.y;
arrow.velocityX=-4;
arrow.lifetime = 150;
arrow.scale=0.3;
arrowsGroup.add(arrow);
}

//function for creating red balloons
function redBalloon (){
if(frameCount % 80 === 0){
rballoon = createSprite(80,50,15,15);
rballoon.addAnimation("red",redb);
rballoon.scale = 0.1;
rballoon.velocityX = 3;
rballoon.lifetime = 150;
redB.add(rballoon);
}
}

//function for creating blue balloons
function blueBalloon(){
if(frameCount % 80 === 0){
blballoon = createSprite(160,100,15,15);
blballoon.addAnimation("blue",blueb);
blballoon.scale = 0.1;
blballoon.velocityX =3;
blballoon.lifetime = 150;
blueB.add(blballoon);
}
}

//function for creating pink balloons
function pinkBalloon(){
if(frameCount % 80 === 0){
pballoon = createSprite(240,150,15,15);
pballoon.addAnimation("pink",pinkb);
pballoon.scale = 1.2;
pballoon.velocityX = 3;
pballoon.lifetime = 150;  
pinkB.add(pballoon);
}
}

//function for creating green balloons
function greenBalloon(){
if(frameCount % 80 === 0 ) {  
gballoon = createSprite(270,200,15,15);
gballoon.addAnimation("green",greenb);
gballoon.scale = 0.1;
gballoon.velocityX = 3;
gballoon.lifetime = 150;
greenB.add(gballoon);
}  
}