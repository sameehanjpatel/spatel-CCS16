var offset = 0
function setup() {
  createCanvas(windowWidth, windowHeight)
}
function draw() {
  background(0);
  fill(random(255),random(255),random(255));
  for(var x=0; x<width; x+=10 ){
    for(var y=0; y<height; y+=10){
      beginShape();
      vertex(x + offset,y + offset);
      vertex(x + offset, y);
      vertex(x + 20,y);
      vertex(x + 20,y + offset);
      endShape(CLOSE);
    }
  }
  offset = offset + 1 
}