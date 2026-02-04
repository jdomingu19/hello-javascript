// JavaScript Course from Scratch @mouredev
// Class 31 - Functions

// 1. Simple function
function myFunction() {
  console.log("Hello, JavaScript!");
}

for (let i = 0; i < 5; i++) {
  myFunction(); //  Hello, JavaScript! x 5
}

// 2. Function with parameters
function myFunctionWithParameters(name) {
  console.log(`Hello, ${name}!`);
}

myFunctionWithParameters("Jesús"); // Hello, Jesús!
myFunctionWithParameters("@jdomingu19"); // Hello, @jdomingu19!

// 3. Anonymous function
const myAnonymousFunction = function (name) {
  console.log(`Hello, ${name}!`);
};

myAnonymousFunction("Jesús"); // Hello, Jesús!
myAnonymousFunction("@jdomingu19"); // Hello, @jdomingu19!

// 4. Arrow function
const myArrowFunction = (name) => {
  console.log(`Hello, ${name}!`);
};

myArrowFunction("Jesús"); // Hello, Jesús!("Jesús"); // Hello, Jesús!
myArrowFunction("@jdomingu19"); // Hello, @jdomingu19!("@jdomingu19"); // Hello, @jdomingu19!

const myArrowFunction2 = (name) => console.log(`Hello, ${name}!`);

myArrowFunction2("Jesús"); // Hello, Jesús!("Jesús"); // Hello, Jesús!
myArrowFunction2("@jdomingu19"); // Hello, @jdomingu19!("@jdomingu19"); // Hello, @jdomingu19!

// 5. Multiple parameters
function sum(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
}

sum(5, 10); // 5 + 10 = 15
sum(5); // 5 + undefined = NaN
sum(); // undefined + undefined = NaN
sum(undefined, undefined); // undefined + undefined = NaN

// 6. Parameters with default values
function defaultSum(a = 0, b = 0) {
  console.log(`${a} + ${b} = ${a + b}`);
}

defaultSum(5, 10); // 5 + 10 = 15
defaultSum(5); // 5 + 0 = 5
defaultSum(); // 0 + 0 = 0
defaultSum(undefined, undefined); // 0 + 0 = 0

// 7. Return of values
function multiplication(a, b) {
  return a * b;
}

let result = multiplication(5, 10);
console.log(`Result: ${result}`); // Result: 50

// 8. Nested functions
function externalFunction() {
  console.log("External function!");
  function internalFunction() {
    console.log("Internal function!");
  }
  internalFunction();
}

externalFunction(); // calls both external and internal function
// internalFunction(); // ReferenceError: internalFunction is not defined

// 9. Higher order functions
function applyFunction(func, parameter) {
  func(parameter);
}

applyFunction(myArrowFunction, "Higher order functions"); // Hello, Higher order functions!

// 10. forEach
const myArray = [1, 2, 3, 4];
const mySet = new Set(["abc", 123, true, null, undefined]);
const myMap = new Map([
  ["name", "Jesús"],
  ["email", "some@email.com"],
  ["age", "21"],
]);

myArray.forEach(function (value) {
  console.log(value); // ...
});

mySet.forEach(function (value) {
  console.log(value); // ...
});

myMap.forEach(function (value) {
  console.log(value); // ...
});

myArray.forEach(function (value) {
  return console.log(value);
}); // ...

mySet.forEach(function (value) {
  return console.log(value);
}); // ..

myMap.forEach(function (value) {
  return console.log(value);
}); // ..

myArray.forEach((value) => {
  console.log(value);
}); // ...

mySet.forEach((value) => {
  console.log(value);
}); // ...

myMap.forEach((value) => {
  console.log(value);
}); // ...

myArray.forEach((value) => console.log(value)); // ...

mySet.forEach((value) => console.log(value)); // ...

myMap.forEach((value) => console.log(value)); // ...
