"use strict";
function trainAnimal(animal) {
    console.log(animal.fly);
    animal.sing();
    animal.bark();
}
function trainAnimalSecond(animal) {
    if ('sing' in animal) {
        animal.sing();
    }
    else {
        animal.bark();
    }
}
function add(first, second) {
    if (typeof first === 'string' && typeof second === 'string') {
        return first + second;
    }
}
var numObj = (function () {
    function numObj() {
        this.counter = 0;
    }
    return numObj;
}());
function addSecond(first, second) {
    if (first instanceof numObj && second instanceof numObj) {
        return first.counter + second.counter;
    }
}
