function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255);
  stroke('hsla(160, 100%, 50%, 0.5)');
  noFill();
}

function draw() {
  for (var x=10; x<500; x+=20){
    for (var y=100; y<500; y +=100){
      beginShape(TRIANGLES);
      vertex(x,300);
      vertex(x,10);
      vertex(y,250);
      endShape();
    }
  }
}