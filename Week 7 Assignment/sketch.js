var waveLengthOne = 50.0;
var waveLengthTwo = 300.0;
var pointCount = 0;
var angle = 1.0;
var amplitude = 200;

function setup(){
  createCanvas(windowWidth,windowHeight);
  background (0);
}
function draw(){
    strokeWeight(4);
translate(width/2, height/2);
beginShape();
  for(var i=0; i < pointCount; i++){
  angle = i / waveLengthOne * TWO_PI;
  var y = sin(angle)* amplitude;
  
  angle = i / waveLengthTwo * TWO_PI;
  var x = sin(angle)* amplitude;
  stroke(random(255),random(255),random(255));
  noFill();
  rect(x,y,10,10);
  vertex(x,y); }
  
endShape();
  pointCount++;
    }
