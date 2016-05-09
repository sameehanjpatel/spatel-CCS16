var table;
var commuteData = [];
var commuteValue;
var s = second();

 function preload() {
    table = loadTable("commuteData.csv");
    img = loadImage("time.jpg");
    train = loadImage("trainemoji.jpg")
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(24);
  commuteData = table.getColumn(1);
  println(commuteData);

}

function draw() {
  background(img)
  textFont("Helvetica");
  frameRate(0.75);
  textStyle(BOLD);
  textAlign(CENTER);
  fill(255);
  text("How much time do I spend on the subway?",width/2,40);
  textStyle(NORMAL)
  text("Mon",120,320);
  text("Tues",220,320);
  text("Wed",320,320);
  text("Thurs",420,320);
  text("Fri",520,320);
  text("Sat",620,320);
  text("Sun",720,320);
  translate(0,280);
  for(var i = 1; i < commuteData.length; i++){
    translate(100,0);
    push();
       fill(random(50), random(255), random(255));
      rect(0,10,40,-commuteData[i]);
    pop();
}
}
