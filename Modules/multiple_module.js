module.exports.array_counter = function (array) {
  if (array instanceof Array) {
    return `Count of array =  ${array.length}`;
  } else {
    return "Please pass through the function array";
  }
};

module.exports.multiply = function(x,y) {
  return `${x} * ${y} = ${x*y}`;
};

module.exports.some_value = 1200;

/*
Alternative way to export modules
module.exports.array_counter = array_counter;
module.exports.multiply = multiply;
module.exports.some_value = some_value;

or
need to have variables - array_counter, multiply, some_value
module.exports = {
  array_counter,
  multiply,
  some_value
}
*/
