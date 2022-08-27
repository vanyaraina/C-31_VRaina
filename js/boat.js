class Boat{

    constructor(x,y,w,h){

        this.x = x
        this.y = y
        this.w = w
        this.h = h

        var options = {
            restitution:0.8,
            friction: 1,
            density : 1,
        }

        this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h, options)
        World.add(world,this.body)

        this.image = loadImage("assets/boat.png")
    }

    display(){
        var angle = this.body.angle
        var pos = this.body.position

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.w, this.h)
        pop()


    }
}