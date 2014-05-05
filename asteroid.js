(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});


  var Asteroid = Asteroids.Asteroid = function(pos, vel){

    this.RADIUS = 5;
    this.COLOR = "white";

    Asteroids.MovingObject.call(this, pos, vel, ((Math.random() * 10) + 2), this.COLOR);

  };

  Asteroid.inherits(Asteroids.MovingObject)

  Asteroid.randomAsteroid = function(){

    var randomX = Math.random() * Asteroids.Game.DIM_X;
    var randomY = Math.random() * Asteroids.Game.DIM_Y;

    var randomVec = function(){
      var randomX = (
        (((Math.random() * 4) + 1) / 100) * Asteroids.Game.DIM_X
      ) / (1000/Asteroids.Game.FPS);

      var randomY = (
        (((Math.random() * 4) + 1) / 100) * Asteroids.Game.DIM_Y
      ) / (1000/Asteroids.Game.FPS);

      randomX *= Math.random() < 0.5 ? -1 : 1;
      randomY *= Math.random() < 0.5 ? -1 : 1;

      return [randomX, randomY];
    };

    return new Asteroid([randomX, randomY], randomVec());
  };

})(this);