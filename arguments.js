var sum = function(){
  var argumentSum = 0;

  for (var i = 0; i < arguments.length; i++) {
    argumentSum += arguments[i];
  }

  return argumentSum;
}

Function.prototype.myBind = function(object){

  var thisFunction = this;

  var args = Array.prototype.slice.call(arguments);
  args = args.slice(1, args.length);

  return function(){
    thisFunction.apply(object, args);
  };

}

var curriedSum = function (numArgs){
  var numbers = [];
  var sum = 0;

  return _curriedSum = function (number) {
    numbers.push(number);

    if (numbers.length === numArgs) {
      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      };
      return sum;
    } else {
      return _curriedSum;
    };
  };
}

Function.prototype.curry = function(numArgs){
  var args = [];
  var final = this;

  return yummyCurry = function(arg){

    args.push(arg);
    return (args.length === numArgs) ? final.apply(null, args) : yummyCurry;

  };
}














//test newMyBind:
// `times` is the same:
function times(num, fun) {
  for (var i = 0; i < num; i++) {
    fun(); // call is made "function-style"
  };
}

var cat = {
  age: 5,

  age_one_year: function (interval) {
    this.age += interval;
  }
};

times(10, cat.age_one_year.myBind(cat,2));