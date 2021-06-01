// defining sprites, dimensions, groups, state, animation
var grid = 50;
var width = 1366;
var carGroup1, logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;

// loading function 
function preload()
{
}

function setup() {

  // creating canavas 
  createCanvas(1366,2700);

  // defining groups
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  // Grasses
  for(var i = 0; i < 6; i++){
   var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
   if(i % 2 === 0) {

   //adding road
   var road = createSprite(683,height-50-(i*400)-grassHeight,width,300);
   road.shapeColor = "black";
   }
   bottomGrass1.shapeColor = "green";
 }

  // to create rows of car
  for(var i = 0; i < 40; i++){
    cars = new Car(2);
    carGroup1.add(cars.spt);
  }

  // to create rows of Logs
  for(var i = 0; i < 40; i++){
    log = new Log(-3);
    logGroup1.add(log.spt);  
  }
}

function draw() {
  
// giving background color
background("skyblue");

// making logs reappear
for(i = 1; i < logGroup1.length; i++){
  if(logGroup1[i].x < 0){
    logGroup1[i].x = width;
  }
}

// making cars reappear
 for(i = 1; i < carGroup1.length; i++){

  if(carGroup1[i].x < 0){
    carGroup1[i].x = width;
  }
  if(carGroup1[i].x > width){
    carGroup1[i].x = 0;
}
}


// displaying sprites
drawSprites();
}
