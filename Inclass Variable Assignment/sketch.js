function setup() {
createCanvas(600,600)
}

function draw() {
    if (mouseX>100 && mouseY>100){
   rect(200,200,200,200); 
  }
  if(mouseX<100 && mouseY<100){
    ellipse(200,200,200,200);
  }
}