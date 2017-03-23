function setup() {
  createCanvas(600, 400);
  background(50);
}

function draw() {
 
  jamir(100,300);
  jamir(200,300);
  jamir(300,300);
  jamir(400,300);
  jamir(500,300);
  
  if(mouseIsPressed){
      jamir(mouseX,mouseY)
  }
  
}

function jamir(x,y){
    fill(25,150,50);
    rect(x-5,y,10,100);
    
    
    noStroke();
    fill(255,150,200);
    ellipse(x+10,y+10,35,35)
    ellipse(x+10,y-10,35,35)
    ellipse(x-10,y+10,35,35)
    ellipse(x-10,y-10,35,35)
    
    fill(255,200,0)
    ellipse(x,y,25,25)
}