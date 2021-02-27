//declaring values
var playerImage,netImage,puckImage;
var player, net ,puck;

function preload(){
  //preloading images
playerImage=loadImage("hockey person.png");
netImage = loadImage("hockey net.png");
puckImage = loadImage("hockey puck.png");
}

function setup() {
  //creating canvas
  createCanvas(400,700);
  //creating player
  player=createSprite(200,550,10,10);
  player.addImage(playerImage)
  player.scale = 0.3
  //creating net
  net=createSprite(200,600,10,10);
  net.addImage(netImage);
  net.scale = 0.85;
  edges=createEdgeSprites();
  // player.debug=true;
  player.setCollider("circle",0,0,280)
}

function draw() {
  background("grey"); 
if(keyDown("LEFT_ARROW")){
  player.x=player.x-10;
}
if(keyDown("RIGHT_ARROW")){
  player.x=player.x+10;
}
player.collide(edges[0])
player.collide(edges[1])
createPucks();
  drawSprites();
}

function createPucks(){
  if(frameCount%50===0){
    puck=createSprite(Math.round(random(50,350)),50,10,10)
    puck.addImage(puckImage);
    puck.scale = 0.03
    puck.velocityY=7
  }

}