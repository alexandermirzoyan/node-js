var array_counter = function (array) {
  if (array instanceof Array) {
    return `Count of array =  ${array.length}`;
  } else {
    return "Please pass through the function array";
  }
};

module.exports = array_counter;

/*
We can pass multiple functions, variables with module.exports, because module.exports = {}

module.exports.func1 = array_counter;
module.exports.func2 = () => {console.log("Hello from second funciton")};

and when importing module need to get access to a func1, func2 as always with normal object
 */