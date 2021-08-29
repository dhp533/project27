class Roof
{

    constructor(xpos, ypos, width1, height1)
    {
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(xpos, ypos, width1, height1, {isStatic:true} );
        this.width = width1
        this.height = height1
        World.add(world, this.body)
    }
    display()
    {
        var position = this.body.position;
        push();
        rectMode(CENTER);
        rect(position.x, position.y, this.width, this.height)
        fill("grey");
        pop();
    }
}