class Ball {
    constructor(x, y) {
      var options = {
         // 'isStatic':false,
          'restitution':0.3,
          'friction':0.1,
          'density':0.5
      }
      this.body = Bodies.circle(x, y, 20, options)
    this.radius = 20
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     // rectMode(CENTER);
     //ellipseMode(RADIUS)
      //fill("red");
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius*3, this.radius*3);
      //strokeWeight(4);
      //stroke("black")
      //rect(0, 0, this.width, this.height);
      //ellipse(0, 0, this.radius, this.radius)
      pop();
    }
  }
  