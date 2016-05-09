var x = 0;
var speed = 1

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(204);
  fill(255);
  
  if (x > width) {
  speed = -1;
  }
  x = x + speed;
  snowman(x);
}


function snowman(x){
  
  stroke(184,129,82);//arms
  strokeWeight(5);
  line(x + 160,180,x + 200,130);//right arm
  line(x + 200,130,x + 190,120);
  line(x + 200,130,x + 200,115);
  line(x + 200,130,x + 210,120);
  
  
  line(x + 40,180,x + 20,230);//left arm
  line(x + 20,230,x + 10,240);
  line(x + 20,230,x + 20,245);
  line(x + 20,230,x + 30,240);
  
  stroke(1);
  strokeWeight(1);
  
  ellipse(x + 100,260,140,140);//head
  ellipse(x + 100,180,120,120);//mid body
  ellipse(x + 100,100,100,100);//junk in the trunk

  fill(0);
  ellipse(x + 80,80,10,10); //eye
  ellipse(x + 120,80,10,10); //eye
  ellipse(x + 100,130,10,10); //all five smile dots
  ellipse(x + 70,110,10,10);
  ellipse(x + 130,110,10,10);
  ellipse(x + 80,125,10,10);
  ellipse(x + 120,125,10,10);
  
  fill(255,165,0); //carrot nose
  triangle(x + 90,100,x + 110,100,x + 100,115); 
  
  fill(37,159,37);//first button
  stroke(1);
  ellipse(x + 100,165,20,20); 
  noStroke();
  fill(21,94,21);
  ellipse(x + 97,162,3,3);
  ellipse(x + 102,162,3,3);
  ellipse(x + 97,167,3,3);
  ellipse(x + 102,167,3,3);
  
  fill(37,159,37);//second button 
  stroke(1);
  ellipse(x + 100,190,20,20);
  noStroke();
  fill(21,94,21);
  ellipse(x + 97,187,3,3);
  ellipse(x + 102,187,3,3);
  ellipse(x + 97,192,3,3);
  ellipse(x + 102,192,3,3);
  
  fill(37,159,37);//third button 
  stroke(1);
  ellipse(x + 100,215,20,20);
  noStroke();
  fill(21,94,21);
  ellipse(x + 97,212,3,3);
  ellipse(x + 102,212,3,3);
  ellipse(x + 97,217,3,3);
  ellipse(x + 102,217,3,3);
  
}