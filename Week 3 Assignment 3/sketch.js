function setup() {
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  //ellipse background
  for(var i = 0; i<=width; i+=5 ){
    noFill();
    ellipse(width/2,height/2,i,i);
  }
  //Triangles
  for(var x=0; x<=width; x+=10){
      beginShape(TRIANGLES);
      vertex (x,mouseY);
      vertex (x,200);
      vertex(width/2,height/2);
      endShape();
    }
  }
  
