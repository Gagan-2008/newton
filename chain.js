
  
   class Chain {
    constructor(bodyA,bodyB,offsetX,offsetY)
    {
        this.offsetX = offsetX;
      this.offsetY = offsetY;
       var options= {
           bodyA:bodyA,
           bodyB:bodyB,
          // pointA:pointA,
          //stiffness:0.04,
          //length:150,
           pointB:{x:this.offsetX,y:this.offsetY}
   }
   this.chain = Constraint.create(options);
   
   World.add(world,this.chain);
    }
   
   
   display()
   {
       
       var pointA=this.chain.bodyA.position;
       var pointB=this.chain.bodyB.position;
      // var pointC=this.pointA;      
       var Anchor1X=pointA.x;
       var Anchor1Y=pointA.y;

      var Anchor2X=pointB.x +this.offsetX;
       var Anchor2Y=pointB.y +this.offsetY;
   

       
       strokeWeight(3);
       line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
       
       //line(pointA.x,pointA.y,pointB.x,pointB.y,pointC.x,pointC.y);
       }
   
   }
   
   
   
   
   
     
  
   
   
   
   
   
     
     