class Triangle{
    constructor(x,y,radius,angle){
        var options={
            isStatic:true
        }
        this.body=Bodies.polygon(x,y,3,radius,options,angle);
        this.radius=radius;
        this.vertices=3;
        World.add(world,this.body);
        console.log(this.body.vertices[0].x);
        Matter.Body.setAngle(this.body,angle);
    }
        display(){
            var pos=this.body.position;
            var angle=this.body.angle;
            
            push();
           // translate(pos.x,pos.y);
           // rotate(angle);
           stroke("pink");
           strokeWeight(5);
             fill(255); 
              triangle(this.body.vertices[0].x,this.body.vertices[0].y,
                this.body.vertices[1].x,this.body.vertices[1].y,
                this.body.vertices[2].x,this.body.vertices[2].y);
            
            pop();
           }
            
        }

    
