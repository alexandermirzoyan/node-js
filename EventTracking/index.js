/*
let events = require('events');

let myEmit = new events.EventEmitter();
myEmit.on('some_event', (text) => {
  console.log(text);
});

myEmit.emit('some_event', "Barev Dzezz!");
*/

let events = require('events');
let util = require('util');

let Cars = function (model) {
  this.model = model;
};

util.inherits(Cars, events.EventEmitter);

let mercedes = new Cars("Mercedes");
let bmw = new Cars("BMW");
let mazda = new Cars("Mazda");

let cars = [mercedes, bmw, mazda];

cars.forEach(function (car) {
  car.on('speed', function (speedText) {
    console.log(`${car.model} speed = ${speedText}`)
  });
});

mercedes.emit('speed', '1000 km/h');
bmw.emit('speed', '987 km/h');