function setup() {
  createCanvas(1220,800);
  strokeWeight(10);
  stroke(51);
  var center;
  var eb1;
  var eb2;
  var center2;
  
}

function draw() {
  center=170;
  eb1=330;
  eb2=680;
  center2=520;
  //Top right box
  line(center,30,eb1,30);
  line(center,50,eb1,50);
  line(center,70,eb1,70);
  line(center,90,eb1,90);
  line(center,110,eb1,110);
 line(center,130,eb1,130);
  line(center,150,eb1,150);
  
  //Top left box
  line(30,10,30,center);
  line(50,10,50,center);
  line(70,10,70,center);
  line(90,10,90,center);
  line(110,10,110,center);
  line(130,10,130,center);
  line(150,10,150,center);
 
 //Bottom left box
  line(10,190,30,center);
  line(10,220,60,center);
  line(10,250,90,center);
  line(10,280,120,center);
  line(10,310,150,center);
  line(15,eb1,center,180);
line(15,eb1,center,180);
line(45,eb1,center,210);
line(75,eb1,center,240);
line(105,eb1,center,270);
line(135,eb1,center,300);

 //Bottom right box
  line(300,center,eb1,200);
  line(270,center,eb1,230);
  line(240,center,eb1,260);
  line(210,center,eb1,290);
  line(180,center,eb1,320);
  line(170,190,310,eb1);
line(center,220,280,eb1);
line(center,250,250,eb1);
line(center,280,220,eb1);
line(center,310,190,eb1);
stroke(51)

//COLOR BOX Lines

  //COLOR Top right box
  stroke(255,204,0);
  line(center2,30,eb2,30);
  line(center2,50,eb2,50);
  line(center2,70,eb2,70);
  line(center2,90,eb2,90);
  line(center2,110,eb2,110);
 line(center2,130,eb2,130);
  line(center2,150,eb2,150);
  
  //COLOR top left box
  stroke(51);
  line(380,10,380,center);
  line(400,10,400,center);
  line(420,10,420,center);
  line(440,10,440,center);
  line(460,10,460,center);
  line(480,10,480,center);
  line(500,10,500,center);
 
 //COLOR bottom left box
  stroke('red');
  line(360,190,390,center);
  line(360,220,420,center);
  line(360,250,450,center);
  line(360,280,480,center);
  line(360,310,510,center);
  line(370,330,520,190);
   line(400,330,520,220);
   line(430,330,520,250);
   line(460,330,520,280);
   line(490,330,520,310)

stroke(51)
 //COLOR bottom right box
 stroke('blue');
line(650,center,eb2,200);
  line(620,center,eb2,230);
  line(590,center,eb2,260);
  line(560,center,eb2,290);
  line(530,center,eb2,320);
  line(center2,190,660,eb1);
line(center2,220,630,eb1);
line(center2,250,600,eb1);
line(center2,280,570,eb1);
line(center2,310,540,eb1);

//Black Rectangle
stroke(51)
rect(10,10,320,320);
noFill();
line(170,10,170,330); //vertical line
line(10,170,330,170); //horizontal line

//Color Rectangle
rect(360,10,320,320);
noFill();
line(center2,10,520,330); //vertical line
line(360,170,eb2,170); //horizontal line
}


  
  