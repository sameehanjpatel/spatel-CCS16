function setup() {
  createCanvas(600,600)
}
function draw() {
  
  var a = color('hsl(283, 24%, 17%)')
  var b= color('hsl(49, 99%, 38%)')
  var c= color('hsl(0, 0%, 9%)')
  var d= color('hsl(218, 100%, 25%)')
  var e=color('hsl(60, 5%, 7%)')
  var f=color('hsl(3, 74%, 38%)')
  var g=color('hsl(12, 45%, 44%)')
  var h=color('hsl(122, 51%, 30%)')
  var canvas = color('hsl(50, 7%, 82%)')
   fill(canvas)
   quad(0,0,600,0,600,600,0,600)
   
   fill(a)
   noStroke()
 quad(350,10,430,40,370,150,290,120)
fill(b)
 quad(330,300,380,305,360,370,330,370)
 fill(d)
 quad(200,350,200,340,400,350,400,360)
 fill(c)
 quad(250,375,300,375,300,325,250,325) 
 fill(e)
 quad(277,410,325,390,334,410,286,430)
 fill(f)
 quad(313,430,340,423,343,435,316,442)
 fill(g)
 quad(328,445,370,450,368,455,328,450)
 fill(h)
 ellipse(349,463,10,10)
 
}