var y = 100;
var slider;
var colorFrom;
var colorTo;
var rectStep = 10;


function setup(){
  createCanvas(windowWidth, windowHeight);
}
function draw() {
push();
colorFrom = color(13,255,241);
colorTo = color(62, 12, 232);
for(var x=0; x < height; x += rectStep){
		 noStroke();
  		var lerpAmt = map(x,height,0, 0, 1.0);
    	var lerpedCol = lerpColor(colorFrom, colorTo, lerpAmt);    
		 fill(lerpedCol);
    	rect(0,x,width,rectStep);
  	}
pop()
  noStroke();
  translate(width/2,height/2);
  fill(0);
  frameRate(1);
  rotate(radians(frameCount%360));
  for(var i =0; i < 8; i++){
    push();
    rotate(TWO_PI * i / 8);
    fill(255);
    shape();
    pop();
}
}
function shape() {
  fill(random(255));
  quad(100,100,10,150,100,200,50,150);
  fill(random(255));
  quad(100,140,140,150,100,200,50,150);
  fill(random(255));
  quad(100,160,140,160,100,200,50,150);
  fill(random(255));
  quad(100,180,140,160,100,200,50,150);
}
