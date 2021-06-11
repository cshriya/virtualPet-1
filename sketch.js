var dog,happyDog;
var foodS,foodstock;
var database;

function preload()
{
	dogIMG = loadImage(doglmg.png);
  happyDog = loadImage(doglmg1.png);
}

function setup() {
	createCanvas(500,500);

  database = firebase.database();
  console.log(database);

  dog = createSprite();
  dog = addImage(dogIMG);

 foodstock = database.ref('food');
 foodstock.on("value",readStock);

}

function draw() {  

 background("46,139,87");

 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happyDog);
 }


  drawSprites();
  
  textSize(28);
  fill(black);
  stroke();

}

function readStock(data){

  foodS-data.val();

}

function writeStock(x){

if(x<=0){

  x=0;

} else{
  
  x=x-1;

}

database.ref('/').update({
  food:x
})

}