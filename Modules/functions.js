function greet(name) {
  console.log(`Hello, ${name}`);
}

greet("Poxos");
greet("Martiros");

function callFunctionInside(func) {
  func();
}

let printSomething = function () {
  console.log("Just a text");
};

printSomething();
callFunctionInside(printSomething);