class ground {

    constructor(x,y){
    
    var groundp = {
    
    isStatic : true
    
    }
    
    this.body = Bodies.rectangle(x,y,1800,40,groundp);
    this.width = 1800;
    this.height = 40;
    Worldc.add(world,this.body);
    
    }
    
    display(){
    
    var pos = this.body.position;
    
    rectMode(CENTER);
    fill("brown");
    rect(pos.x,pos.y,this.width,this.height);
    
    
    }
    
    
    }
    