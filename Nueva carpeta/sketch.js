var garden,rabbit;
var gardenImg,rabbitImg;
var hoja,oja;
var manzana,nan;
var hojao,ojao;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  oja= loadImage("leaf.png");
  nan=loadImage("apple.png");
  ojao=loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX
  HojaS();
  ManzanaS();
  HojaoS();
  drawSprites();
  
}


function HojaS() {
 
   if (frameCount % 80 === 0) {
     hoja = createSprite(600,0,40,10);
    hoja.x = Math.round(random(10,350));
    hoja.addImage(oja);
    hoja.scale =0.1;
    hoja.velocityY = 3;

    hoja.lifetime = 110;
    
    
    hoja.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;
    }
}


function ManzanaS() {
 
   if (frameCount % 50 === 0) {
     manzana = createSprite(600,0,40,10);
    manzana.x = Math.round(random(10,350));
    manzana.addImage(nan);
    manzana.scale =0.1;
    manzana.velocityY = 3;

    manzana.lifetime = 110;
    
    
    manzana.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;
    }
}

function HojaoS() {
 
   if (frameCount % 140=== 0) {
     hojao = createSprite(600,0,40,10);
    hojao.x = Math.round(random(10,350));
    hojao.addImage(ojao);
    hojao.scale =0.1;
    hojao.velocityY = 3;

    hojao.lifetime = 110;
    
    
    hojao.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;
    }
}

