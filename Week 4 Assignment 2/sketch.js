function setup() {
  createCanvas(400, 500);
}

function draw() {
  //drawing the grey background
  fill(	211, 211, 211);
  noStroke();
  rect(0,0,400,500);
  
  //drawing the orange background
  fill(255, 90, 0);
  noStroke();
  rect(15,15,360,450);
  
  //last inner box
  fill(179, 63, 0,150);
  noStroke();
  rect(30,30,330,420);
  
  //1st strip
  beginShape();
  fill(179, 0, 27);
  vertex(40,50);
  vertex(350,60);
  vertex(350,80);
  vertex(40,80);
  endShape();
  
  //2nd strip
  fill(	190, 51, 203);
  beginShape();
  vertex(40,85);
  vertex(350,85);
  vertex(350,95);
  vertex(40,95);
  endShape();
  
  
  //3rd Strip
  beginShape();
  vertex(40,100);
  vertex(352,110);
  vertex(352,160);
  vertex(40,155);
  endShape();
  
  //3rd Strip inside
  beginShape();
  fill(81, 57, 117,150);
  vertex(70,120);
  vertex(345,125);
  vertex(345,150);
  vertex(70,150);
  endShape();
  
  //4th strip
  fill(141, 41, 162);
  beginShape()
  vertex(40,165);
  vertex(350,170);
  vertex(350,190);
  vertex(40,195);
  endShape();
  
  //5th strip
  beginShape();
  vertex(40,200);
  vertex(350,210);
  vertex(350,220);
  vertex(40,220);
  endShape();
  
  //6th strip  
  fill(	190, 51, 203);
  beginShape();
  vertex(40,230);
  vertex(350,230);
  vertex(350,260);
  vertex(40,260);
  endShape();
  
  //6th strip inside
  fill(81, 57, 117, 150);
  beginShape();
  vertex(70,240);
  vertex(340,240);
  vertex(340,250);
  vertex(70,250);
  endShape();
  
    //7th strip
      fill(	190, 51, 203);
  beginShape();
  vertex(40,270);
  vertex(350,270);
  vertex(350,280);
  vertex(40,280);
  endShape();
  
  //7th strip inside 
  fill(81, 57, 117, 150);
  beginShape();
  vertex(70,275);
  vertex(340,275);
  vertex(340,272);
  vertex(70,272);
  endShape();
  
  //8th strip
    fill(	190, 51, 203);
  beginShape();
  vertex(40,285);
  vertex(350,285);
  vertex(350,300);
  vertex(40,300);
  endShape();
  
  //9th strip
  beginShape()
  vertex(40,325)
  vertex(350,320)
  vertex(350,345)
  vertex(40,340)
  endShape()
  
   //9th strip inside
   fill(81, 57, 117, 150);
  beginShape()
  vertex(70,330)
  vertex(350,330)
  vertex(350,335)
  vertex(70,335)
  endShape()
  
    //10th strip
    fill(	190, 51, 203);
  beginShape()
  vertex(40,350)
  vertex(350,355)
  vertex(350,380)
  vertex(40,380)
  endShape()
  
  //10th strip inside
    fill(81, 57, 117, 150);
  beginShape()
  vertex(70,360)
  vertex(345,360)
  vertex(345,370)
  vertex(70,370)
  endShape()
  
    //11th strip
     fill(190, 51, 203);
  beginShape()
  vertex(40,385)
  vertex(350,388)
  vertex(350,410)
  vertex(40,410)
  endShape()
  
  //11th strip inside
  fill(81, 57, 117, 150);
  beginShape()
  vertex(70,390)
  vertex(340,390)
  vertex(340,400)
  vertex(70,400)
  endShape()
  
  //12th strip
  fill(190, 51, 203);
  beginShape()
  vertex(40,420)
  vertex(350,420)
  vertex(350,440)
  vertex(40,440)
  endShape()
  
  //12th strip insdie
  fill(81, 57, 117, 150);
  beginShape()
  vertex(70,425)
  vertex(345,425)
  vertex(345,430)
  vertex(70,430)
  endShape()
  
  
  
}