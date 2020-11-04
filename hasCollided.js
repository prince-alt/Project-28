function hasCollided(lstone,lmango){

    mangobodyposition=lmango.body.position;
    stonebodyposition=lstone.body.position;

    var distance = dist(stonebodyposition.x,stonebodyposition.y,mangobodyposition.x,mangobodyposition.y);
    
    if(distance<=lmango.r+lstone.r){

Matter.Body.setStatic(lmango.body,false);

    }

}