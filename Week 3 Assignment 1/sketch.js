function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0);
  stroke('hsla(160, 100%, 50%, 0.5)');
  noFill();
}

function draw() {
  frameRate(2);
  for (var x=10; x<500; x+=20){
    for (var y=100; y<500; y +=100){
      beginShape();
      vertex(x,20);
      vertex(x,mouseY);
      vertex(y,x);
      endShape();
    }
  }
}