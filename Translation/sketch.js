function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  translate(width/2, height/2);
  rotate(frameCount%360);
  shape();
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