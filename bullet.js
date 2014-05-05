(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function(pos, vel, game){

    this.RADIUS = 2;
    this.COLOR = "red";
    this.game = game;

    posDup = pos.slice();

    var hypotenuse = Math.sqrt(Math.pow(vel[0], 2) + Math.pow(vel[1], 2));

    var x = (vel[0] / hypotenuse) * Bullet.SPEED;
    var y = (vel[1] / hypotenuse) * Bullet.SPEED;

    Asteroids.MovingObject.call(this, posDup, [x, y], this.RADIUS, this.COLOR);

  };

  Bullet.inherits(Asteroids.MovingObject);

  Bullet.prototype.hitAsteroids = function(){
    var thisBullet = this;

    for (var i = 0; i < thisBullet.game.asteroids.length; i++) {
      if (thisBullet.game.asteroids[i].isCollidedWith(thisBullet)){
        console.log("Collision!");
        thisBullet.game.removeAsteroid(i);
        thisBullet.game.removeBullet(thisBullet);
      }
    }
  };

  Bullet.prototype.move = function(){

    Asteroids.MovingObject.prototype.move.call(this);

    this.hitAsteroids();

  };

  Bullet.SPEED = 3;

})(this);