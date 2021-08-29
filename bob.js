class Bob
{
    constructor (xpos, ypos, radius)
    {
        var options={
            density: 1,
            friction: 5,
            restitution: 0.3
        }
        this.bob = Bodies.circle(xpos, ypos, radius, options);        
        World.add(world, this.bob)
        this.radius = 20;
    }
    display()
    {
        var position = this.bob.position;
        push();
        ellipseMode(RADIUS)
        fill ("pink")
        ellipse(position.x,position.y, this.radius);
        pop();
    }
}