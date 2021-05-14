class ParticleClass{
    constructor(x, y,radius) {
        var options = {
            'restitution':0.8,
            'friction':2.5,
            'density':1.0,
            'isStatic':false
        }
        this.body = Bodies.circle(x, y,radius, options);

        World.add(world, this.body);
      }
      display(){
       ellipse(this.body.position.x,this.body.position.y,10,10);
        console.log("hi");
      }
}