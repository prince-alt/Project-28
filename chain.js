class chain{

    constructor(bodyA,pointB){
    
        var options = {
         
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.004,
            length : 10
            
            }
    
            this.pointB = pointB;
        this.chain = Constraint.create(options);
        Worldc.add(world,this.chain);
          
    }
    
    fly(){

    this.chain.bodyA = null;

    }

    display(){
    
  if(this.chain.bodyA){

    var pointA = this.chain.bodyA.position;
    var pointB = this.pointB;
    
    strokeWeight(5);
    line (pointA.x,pointA.y,pointB.x,pointB.y);
    
    
    }
    
}
    
    }