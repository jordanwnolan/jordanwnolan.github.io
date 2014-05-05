// define a surrogate class
// Surrogate.prototype = SuperClass.prototype
// Subclass.prototype = new Surrogate()

Function.prototype.inherits = function(SuperClass){

  var SubClass = this;

  function Surrogate() {};

  Surrogate.prototype = SuperClass.prototype
  SubClass.prototype = new Surrogate();

}

//testing area

function MovingObject() {
  this.name = 'MovingObject';
};

MovingObject.prototype.move = function(){

    console.log("Believe me, I moved");

};

function Ship () {
  MovingObject.call(this);
};

Ship.inherits(MovingObject);

function Asteroid () {};
Asteroid.inherits(MovingObject);

ship = new Ship();
ship.move();
console.log(ship.name);