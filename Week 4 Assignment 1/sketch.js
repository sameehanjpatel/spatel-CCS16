var y;
var i;
var j;
var cirY;
var cirX;
var rectColor = ["#1F957B", "#68FFAB", "#FFD79D", "#425428"]
function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  i=0
  for (var y =0; y < height; y = y +(height/4)){
    fill(rectColor[i])
    rect(0,y,width,y);
    i = i +1;
  }
  fill(rectColor[0])
  rect(0,0,width,height/4)
  frameRate(1);
  for (var cirY = 0; cirY<=height; cirY = cirY + 40){
    for(var cirX = 0; cirX<=width; cirX = cirX + 40){
    fill(random(50),random(90),random(40));
    ellipse(cirX,cirY,40,40);
}
}
    
}