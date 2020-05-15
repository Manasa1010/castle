class Rect { 
   constructor(x,y,height){
        var options = {
            isStatic:true
        }
  this.body=Bodies.rectangle(x, y, 70, height, options);
  this.width=70;
  this.height=height;

  World.add(world,this.body)

 }
   
   display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    stroke("blue");
    strokeWeight(10);
    
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
   }








}