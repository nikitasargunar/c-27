class Chain {
    constructor(bodyA, bodyB){
 var option
 var o1 = {
    bodyA: bird.body,       
    bodyB: log2a.body,
    stiffness: 0.4,
    length: 13,
   } 
   this.chain = Constraint.create(o1)
   World.add(world, this.chain) 
    }

    displayC(){
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        strokeWeight (3);
        line (pointA.x, pointA.y, pointB.x, pointB.y);


    }
}