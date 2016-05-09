function setup() {
  createCanvas(480,480)
  background(0)
}

function draw() {
  
  if (mouseIsPressed){
    fill(255);} 
    else fill (0);
  ellipse(200,200,100 ,100);
  stroke(255)
  rect(250,240,200,100);
  quad(300,70,100,40,60,200,57,78);
  triangle(400,30,250,100,300,180);
  arc(50,300,80,80,0,PI+HALF_PI);
  quad(140,350,160,380,130,450,50,400);
  
}