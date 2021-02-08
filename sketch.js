var cats,mouse,cat,c,mice,m,mi,backgroun
function preload() {
    //load the images here
cats=loadImage("cat1.png");
cat=loadAnimation("cat2.png,cat3.png");
c=loadImage("cat4.png");
mouse=loadImage("mouse1.png");
mice=loadAnimation("mouse2.png,mouse2.png");
m=loadImage("mouse3.png");
mi=loadImage("mouse4.png");
backgroun=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite()
}

function draw() {

    background(backgroun);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
