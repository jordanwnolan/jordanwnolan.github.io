(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MovingObject = Asteroids.MovingObject = function(pos, vel, radius, color){ //vector?

    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;

  }

  MovingObject.prototype.move = function(){
    if (this.vel[0] + this.pos[0] < 0){
      this.pos[0] = this.vel[0] + this.pos[0] + Asteroids.Game.DIM_X;

    } else {
      this.pos[0] = (this.pos[0] + this.vel[0]) % Asteroids.Game.DIM_X;
    };

    if (this.vel[1] + this.pos[1] < 0){
      this.pos[1] = this.vel[1] + this.pos[1] + Asteroids.Game.DIM_X;

    } else {
      this.pos[1] = (this.pos[1] + this.vel[1]) % Asteroids.Game.DIM_Y;
    };
  }

  MovingObject.prototype.draw = function(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI
    );

    ctx.fill();
  }

  MovingObject.prototype.isCollidedWith = function(otherObject){
    var otherX = otherObject.pos[0];
    var otherY = otherObject.pos[1];

    var distanceX = this.pos[0] - otherX;
    var distanceY = this.pos[1] - otherY;

    var hypotenuse = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));

    return (this.radius + otherObject.radius >= hypotenuse) ? true : false;
  }

})(this);