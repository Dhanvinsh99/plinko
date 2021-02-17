class Plinkos{
    constructor(x, y){
        var options = {
            isStatic : true
        }
        this.body = Bodies.circle(x, y, 10, options)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position

        push()
        translate(pos.x, pos.y)
        noStroke()
        ellipseMode(RADIUS)
        ellipse(0,0, this.r, this.r)
        pop()
    }
}