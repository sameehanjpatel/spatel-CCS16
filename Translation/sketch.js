var y = 100;
var slider;

function setup(){
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('width', '80px');
}
function draw() {
  var val = slider.value();
  background(val);
  background(100);
  noStroke();
  frameRate(5);
  translate(width/2,height/2);
  fill(0);
  rotate(radians(frameCount%360));
  for(var i =0; i < 8; i++){
    push();
    rotate(2*PI * i / 8);
    //play around with the first parameter
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