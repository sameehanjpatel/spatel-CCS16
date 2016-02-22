function setup() {
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  for(var x=0; x<=500; x+=25){
    for (var y=0; y<=500; y+=25){
      rect(x+25,y+25,20,20);
      
    }
  }
  for(var x=0; x<=500; x+=25){
    for (var y=0; y<=500; y+=25){
      rect(x+second(5),y+second(5),20,20);
      
    }
  }
  
  
}