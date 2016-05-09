var mySecondArray = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  for(var i=0; i<5; i++){
    mySecondArray.push(random(12));
  }
  print(mySecondArray);
}

function draw() {
  background(255);
 for(var i = 0; i < mySecondArray.length; i++){
   fill(0,100,100,4);
   rect(width/2, 
   height/2, 
   mySecondArray[i] * 10, 
   mySecondArray[i] * 10);
 }
}
function mousePressed(){
    mySecondArray.push(random(22));
    print(mySecondArray[mySecondArray.length-1]);
    print(mySecondArray.length);
}