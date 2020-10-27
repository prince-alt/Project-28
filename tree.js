class tree {

    constructor(x,y){
    
    this.x = x;
    this.y = y;
    this.dustbinwidth = 450;
    this.dustbinheight = 600;
    this.wallthickness = 10;
    this.image = loadImage("tree.png");
    this.bottombody = Bodies.rectangle(this.x,this.y,this.dustbinwidth,this.wallthickness,{isStatic : true});
    //this.leftwallbody = Bodies.rectangle(this.x-this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,{isStatic : true});
    //this.rightwallbody = Bodies.rectangle(this.x+this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,{isStatic : true});
    Worldc.add(world,this.bottombody);
   // Worldc.add(world,this.leftwallbody);
    //orldc.add(world,this.rightwallbody);
        
    }
    
    display(){
    
        var pos = this.bottombody.position;
        push ();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0 ,-this.dustbinheight/2, this.dustbinwidth, this.dustbinheight+85);
        pop ();
    
    }
    
    }
    