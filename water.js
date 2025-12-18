let drops =[];
let drop_radius = 80;

function setup() {
  createCanvas(400, 400);
  
  for (let i = 0; i<150; i++){
    drops.push(new Drop());
  }
}

function draw() {
  // background(220);
  translate(width/2, height/2);
  
  for (drop of drops)
  {
    drop.update();
    drop.show();
  }
}

class Drop{
  constructor(){
    this.x=random(-width,width);
     this.y=random(-height,height);
    this.radius = random(drop_radius);
  }
  show(){
    fill("rgb(109,218,255)")
    noStroke();
    ellipse(this.x,this.y,this.radius);
    
  }
  update(){
    this.radius-=1;
    
    if(this.radius<1)
      {
         this.x=random(-width,width);
     this.y=random(-height,height);
    this.radius = random(drop_radius);
      }
  }
}