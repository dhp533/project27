class Rope {
    constructor(body1, body2){
        var options = {
            bodyA : body1,
            bodyB : body2,
            length : 100,
            stiffness : 0.7
        }
        
         this.rope = Matter.Constraint.create(options);
         World.add (world, this.rope);
    }
    display() {
        var birdPos = this.rope.bodyA.position
        var log6Pos = this.rope.bodyB.position
        line(birdPos.x, birdPos.y, log6Pos.x, log6Pos.y);
        push();
        fill ("blue")
        pop();
    }
}