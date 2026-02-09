// Intermediate JavaScript Course @mouredev
// Class 2 to 11 - Advanced Functions

// 1. First class citizens

// 1.1 Assign functions to variables
const greet = function (name) {
  console.log(`Hello, ${name}!`);
};

console.log(greet); // [Function: greet]
console.log(typeof greet); // function

greet("Jesús"); // Hello, Jesús!

// 1.2 Pass functions as arguments
function processGreeting(greetFunction, name) {
  greetFunction(name);
}

console.log(processGreeting); // [Function: processGreeting]
console.log(typeof processGreeting); // function

processGreeting(greet, "Jesús"); // Hello, Jesús!

// 1.3 Return functions from a function
function returnGreeting() {
  return greet;
}

console.log(returnGreeting); // [Function: returnGreeting]
console.log(typeof returnGreeting); // function

const greet2 = returnGreeting();
console.log(greet2); // [Function: greet]
console.log(typeof greet2); // function

greet2("Jesús"); // Hello, Jesús!

// 2. Advanced arrow functions

// 2.1 Implicit return
const multiply = (a, b) => a * b;

console.log(multiply); // [Function: multiply]
console.log(typeof multiply); // function
console.log(multiply(5, 7)); // 35

// 2.2 lexicon this
const handler = {
  name: "Jesús",
  greeting: function () {
    console.log(`Hello, ${this.name}!`);
  },
  arrowGreeting: () => {
    console.log(`Hello, ${this.name}!`);
  },
  arrowGreeting2: () => {
    console.log(`Hello, ${handler.name}!`);
  },
};

console.log(handler); // { name: ..., greeting: ..., arrowGreeting: ..., arrowGreeting2: ... }
console.log(typeof handler); // object

console.log(handler.greeting); // [Function: greeting]
console.log(typeof handler.greeting); // function
handler.greeting(); // Hello, Jesús!

console.log(handler.arrowGreeting); // [Function: arrowGreeting]
console.log(typeof handler.arrowGreeting); // function
handler.arrowGreeting(); // Hello, undefined!

console.log(handler.arrowGreeting2); // [Function: arrowGreeting2]
console.log(typeof handler.arrowGreeting2); // function
handler.arrowGreeting2(); // Hello, Jesús!

// 3. IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("This is a classic IIFE!");
})(); // This is a classic IIFE!

(() => {
  console.log("This is an arrow IIFE!");
})(); // This is an arrow IIFE!

// 4. Rest parameters (`...`)
function sum(...numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum); // [Function: sum]
console.log(typeof sum); // function

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(3, 4, 6, 2)); // 15
console.log(sum(6, 7, 2)); // 15

// 5. Spread operator (`...`)
const numbers = [4, 5, 6];

function sumWithSpread(a, b, c) {
  return a + b + c;
}

console.log(numbers); // [ 4, 5, 6 ]
console.log(typeof numbers); // object

console.log(sumWithSpread); // [Function: sumWithSpread]
console.log(typeof sumWithSpread); // function

console.log(sumWithSpread(4, 5, 6)); // 15
console.log(sumWithSpread(...numbers)); // 15

// 6. Closures
function createCounter() {
  let counter = 0;
  return function () {
    counter++;
    console.log(`Counter: ${counter}`);
  };
}

console.log(createCounter); // [Function: createCounter]
console.log(typeof createCounter); // function

console.log(createCounter()); // [Function (anonymous)]
console.log(typeof createCounter()); // function

const counter = createCounter();

console.log(counter); // [Function (anonymous)]
console.log(typeof counter); // function

counter(); // Counter: 1
counter(); // Counter: 2
counter(); // Counter: 3
counter(); // Counter: 4

// 7. Recursion
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial); // [Function: factorial]
console.log(typeof factorial); // function

console.log(factorial(7)); // 5040
console.log(factorial(6)); // 720
console.log(factorial(5)); // 120
console.log(factorial(1)); // 1

// 8. Partial functions
function partialSum(a) {
  return function (b, c) {
    return sum(a, b, c);
  };
}

console.log(partialSum); // [Function: partialSum]
console.log(typeof partialSum); // function

console.log(partialSum()); // [Function (anonymous)]
console.log(typeof partialSum()); // function

console.log(partialSum()()); // NaN
console.log(typeof partialSum()()); // number

const sumWith = partialSum(1);

console.log(sumWith); // [Function (anonymous)]
console.log(typeof sumWith); // function

console.log(sumWith(2, 3)); // 6 (1 + 2 + 3)
console.log(sumWith(4, 5)); // 10 (1 + 4 + 5)

// 9. Currying
function currySum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return sum(a, b, c, d);
      };
    };
  };
}

console.log(currySum); // [Function: currySum]
console.log(typeof currySum); // function

console.log(currySum()); // [Function (anonymous)]
console.log(typeof currySum()); // function

console.log(currySum()()); // [Function (anonymous)]
console.log(typeof currySum()()); // function

console.log(currySum()()()); // [Function (anonymous)]
console.log(typeof currySum()()()); // function

console.log(currySum()()()()); // NaN
console.log(typeof currySum()()()()); // number

const sumAB = currySum(1)(2);
console.log(sumAB); // [Function (anonymous)]
console.log(typeof sumAB); // function

const sumC = sumAB(3);
console.log(sumC); // [Function (anonymous)]
console.log(typeof sumC); // function

console.log(sumC(3)); // 9
console.log(sumC(4)); // 10
console.log(sumAB(5)(7)); // 15
// console.log(sumAB(5)(7)(8)); // TypeError: sumAB(...)(...) is not a function

console.log(currySum(1)(2)(3)(9)); // 15

// 10. Callbacks
function processData(data, callback) {
  const result = sum(...data);
  callback(result);
}

console.log(processData); // [Function: processData]
console.log(typeof processData); // function

function processResult(result) {
  console.log(result);
}

console.log(processResult); // [Function: processResult]
console.log(typeof processResult); // function

function processResult2(result) {
  console.log(`Result: ${result}`);
  // return `Result: ${result}`
}

console.log(processResult2); // [Function: processResult2]
console.log(typeof processResult2); // function

processData([4, 5, 6], processResult); // 15
processData([4, 5, 6], processResult2); // Result: 15
processData([4, 5, 6], (result) => {
  console.log(`Arrow function result: ${result}`);
}); // Arrow function result: 15
