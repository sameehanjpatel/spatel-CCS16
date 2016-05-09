var waveLengthOne = 100.0;
var waveLengthTwo = 200.0;
var pointCount = 0;
var angle = 1.0;
var amplitude = 200;

function setup(){
  createCanvas(windowWidth,windowHeight);
}
function draw(){
  if(pointCount > 1000){
    noLoop(); 
    
  }
  background(255);
  colorMode(HSB, 100);
  noFill();
  strokeWeight(1);
  stroke(100);
  translate(width/2, height/2);
beginShape();
  for(var i=0; i < pointCount; i++){
  angle = i / waveLengthOne * TWO_PI;
  var y = sin(angle)* amplitude;
  angle = i / waveLengthTwo * TWO_PI;
  var x = cos(angle)* amplitude;
  vertex(x,y); 
  }
endShape();
pointCount++;
}