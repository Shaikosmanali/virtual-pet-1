//Create variables here
var dog, happyDog, database, foodS, foodStock,Food;
var dogImg, happyDogImg;
function preload() {
  //load images here
  dogImg = loadImage("Dog.png");
  happyDogImg = loadImage('happydog.png');
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250, 250, 20, 20);
  dog.addImage(dogImg);
  dog.scale = 0.2;


  foodStock = database.ref('Food')
  foodStock.on("value", readStock)
}


function draw() {


  //add styles here
  background(46, 139, 87);
  drawSprites();
  textSize(20);
  fill(255,255,255);
  stroke("black");
  text("Note:Press UP_ARROW key to feed drago milk",60,100)

 

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }


  database.ref('/').update({
    Food:x
  })
}



