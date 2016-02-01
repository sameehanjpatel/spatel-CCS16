function setup() {
  createCanvas(1220,800);
  strokeWeight(10);
  stroke(51);
}

function draw() {
  //Top right box
  line(170,30,330,30);
  line(170,50,330,50);
  line(170,70,330,70);
  line(170,90,330,90);
  line(170,110,330,110);
 line(170,130,330,130);
  line(170,150,330,150);
  
  //Top left box
  line(30,10,30,170);
  line(50,10,50,170);
  line(70,10,70,170);
  line(90,10,90,170);
  line(110,10,110,170);
  line(130,10,130,170);
  line(150,10,150,170);
 
 //Bottom left box
  line(10,190,30,170);
  line(10,220,60,170);
  line(10,250,90,170);
  line(10,280,120,170);
  line(10,310,150,170);
  line(15,330,170,180);
line(15,330,170,180);
line(45,330,170,210);
line(75,330,170,240);
line(105,330,170,270);
line(135,330,170,300);

 //Bottom right box
  line(300,170,330,200);
  line(270,170,330,230);
  line(240,170,330,260);
  line(210,170,330,290);
  line(180,170,330,320);
  line(170,190,310,330);
line(170,220,280,330);
line(170,250,250,330);
line(170,280,220,330);
line(170,310,190,330);
stroke(51)

//COLOR BOX Lines

  //COLOR Top right box
  stroke(255,204,0);
  line(520,30,680,30);
  line(520,50,680,50);
  line(520,70,680,70);
  line(520,90,680,90);
  line(520,110,680,110);
 line(520,130,680,130);
  line(520,150,680,150);
  
  //COLOR top left box
  stroke(51);
  line(380,10,380,170);
  line(400,10,400,170);
  line(420,10,420,170);
  line(440,10,440,170);
  line(460,10,460,170);
  line(480,10,480,170);
  line(500,10,500,170);
 
 //COLOR bottom left box
  stroke('red');
  line(360,190,390,170);
  line(360,220,420,170);
  line(360,250,450,170);
  line(360,280,480,170);
  line(360,310,510,170);
  line(370,330,520,190);
   line(400,330,520,220);
   line(430,330,520,250);
   line(460,330,520,280);
   line(490,330,520,310)

stroke(51)
 //COLOR bottom right box
 stroke('blue');
line(650,170,680,200);
  line(620,170,680,230);
  line(590,170,680,260);
  line(560,170,680,290);
  line(530,170,680,320);
  line(520,190,660,330);
line(520,220,630,330);
line(520,250,600,330);
line(520,280,570,330);
line(520,310,540,330);

//Black Rectangle
stroke(51)
rect(10,10,320,320);
noFill();
line(170,10,170,330); //vertical line
line(10,170,330,170); //horizontal line

//Color Rectangle
rect(360,10,320,320);
noFill();
line(520,10,520,330); //vertical line
line(360,170,680,170); //horizontal line
}


  
  