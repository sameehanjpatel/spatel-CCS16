var y = 100;
var slider;

function setup(){
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, 255, 10);
  slider.position(10, 10);
  slider.style ('width', '80px');
}
function draw() {
  
  var val = slider.value();
  background(200);
  noStroke();
  translate(width/2,height/2);
  fill(0);
  frameRate(val);
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