function setup() {
createCanvas(windowWidth,windowHeight)
}

function draw() {
    if (mouseX> width/2){
   rect(mouseX,mouseY,200,200); 
  }
  if(mouseX< width/2){
    ellipse(mouseX,mouseY,200,200);
  }
}