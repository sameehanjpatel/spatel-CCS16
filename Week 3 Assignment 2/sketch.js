function setup() {
  createCanvas(windowWidth, windowHeight)
}
function draw() {
frameRate(2);
  background(0);
  for(var x=0; x<width; x+=10 ){
    for(var y=0; y<height; y+=10){
    fill(random(255), random(255), random(255));
    stroke(random(4));
      beginShape(TRIANGLES);
      vertex(x,20);
      vertex(x,50);
      vertex(width/2,y);
      endShape(CLOSE);
    }
  }
}