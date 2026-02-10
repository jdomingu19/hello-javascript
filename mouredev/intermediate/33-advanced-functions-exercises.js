// Intermediate JavaScript Course @mouredev
// Class 12 - Advanced Functions Exercises

// 1. Create a function that returns another function
function printLanguage(language = "JavaScript") {
  console.log(`Hello, ${language}!`);
}

function showLanguage() {
  return printLanguage;
}

console.log(printLanguage); // [Function: printLanguage]
console.log(typeof printLanguage); // function

printLanguage(); // Hello, JavaScript!
printLanguage("TypeScript"); // Hello, TypeScript!

console.log(showLanguage); // [Function: showLanguage]
console.log(typeof showLanguage); // function

console.log(showLanguage()); // [Function: printLanguage]
console.log(typeof showLanguage()); // function

showLanguage()(); // Hello, JavaScript!
showLanguage()("TypeScript"); // Hello, TypeScript!

const repositoryLanguage = showLanguage();
console.log(repositoryLanguage()); // [Function: printLanguage]
console.log(typeof repositoryLanguage()); // function

repositoryLanguage(); // Hello, JavaScript!
repositoryLanguage("TypeScript"); // Hello, TypeScript!

// 2. Implement a curried function that multiplies 3 numbers
function curryMultiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
console.log(curryMultiply); // [Function: curryMultiply]
console.log(typeof curryMultiply); // function

console.log(curryMultiply()); // [Function (anonymous)]
console.log(typeof curryMultiply()); // function

console.log(curryMultiply()()); // [Function (anonymous)]
console.log(typeof curryMultiply()()); // function

console.log(curryMultiply()()()); // NaN
console.log(typeof curryMultiply()()()); // number

const multAB = curryMultiply(4)(5);
const multC = multAB(6);

console.log(multC); // 120
console.log(curryMultiply(4)(5)(6)); // 120

// 3. Develop a recursive function that calculates the power of a number raised to an exponent
function recursivePowerOf(number, exponent) {
  // 2 ** 4 = 2 * 2 * 2 * 2 = 16
  // console.log(number, exponent);
  if (exponent <= 0) {
    return 1;
  }
  return number * recursivePowerOf(number, exponent - 1);
}

console.log(recursivePowerOf(2, 4)); // 16

// 4. Create a createCounter() function that takes an initial value and returns an object
// with methods for increment(), decrement() and getValue(), using a closure to maintain the state
function createCounter() {
  let counter = 0;
  return {
    increment: function increment() {
      counter++;
      return this.getValue();
    },
    decrement: function decrement() {
      counter--;
      return this.getValue();
    },
    getValue: function getValue() {
      return counter;
    },
  };
}

console.log(createCounter); // [Function: createCounter]
console.log(typeof createCounter); // function

console.log(createCounter()); // { increment: ..., decrement: ..., getValue }
console.log(typeof createCounter()); // object

const myCounter = createCounter();

console.log(myCounter.getValue); // [Function: getValue]
console.log(typeof myCounter.getValue); // function
console.log(myCounter.getValue()); // 0

console.log(myCounter.increment); // [Function: increment]
console.log(typeof myCounter.increment); // function
console.log(myCounter.increment()); // 1
console.log(myCounter.increment()); // 2
console.log(myCounter.increment()); // 3

console.log(myCounter.getValue()); // 3

console.log(myCounter.decrement); // [Function: decrement]
console.log(typeof myCounter.decrement); // function
console.log(myCounter.decrement()); // 2
console.log(myCounter.decrement()); // 1
console.log(myCounter.decrement()); // 0

console.log(myCounter.getValue()); // 0

// 5. Create a function sumManyTimes(multiplier, ...numbers) that first adds all the numbers (using Rest parameters)
// and then multiplies the result by multiplier
function sumManyTimes(multiplier, ...numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return multiplier * sum;
}

console.log(sumManyTimes(2, 1, 2, 3, 4, 5)); // 30 (2 * 15)
console.log(sumManyTimes(3, 1, 2, 3, 4, 5)); // 45 (3 * 15)
console.log(sumManyTimes(4, 1, 2, 3, 4, 5)); // 60 (4 * 15)

// 6. Create a Callback that is invoked with the result of the sum of all the numbers passed to a function
function sumWithCallback(callback, ...numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  callback(sum);
}

function printSumCallback(sum) {
  console.log(`Sum: ${sum}`);
}

sumWithCallback(printSumCallback, 1, 2, 3, 4, 5); // Sum: 15
sumWithCallback(printSumCallback, 6, 7, 8, 9, 10); // Sum: 40
sumWithCallback(printSumCallback, 11, 12, 13, 14, 15); // Sum: 65

// 7. Develop a partial function
function partialMessage(str1) {
  return function (str2, str3) {
    return str1 + str2 + str3;
  };
}

console.log(partialMessage); // [Function: partialMessage]
console.log(typeof partialMessage); // function

console.log(partialMessage()); // [Function (anonymous)]
console.log(typeof partialMessage()); // function

console.log(partialMessage()()); // NaN
console.log(typeof partialMessage()()); // number

const message = partialMessage("Hello");
console.log(message); // [Function (anonymous)]
console.log(typeof message); // function
console.log(message(", ", "JavaScript!")); // Hello, JavaScript!

// 8. Implement an example that uses Spread
let myObject = {
  name: "Jesús",
  age: 21,
  alias: "@jdomingu19",
};

function showUserInfo(name, age, alias) {
  console.log(`name: ${name}`);
  console.log(`age: ${age}`);
  console.log(`alias: ${alias}`);
}

showUserInfo(myObject.name, myObject.age, myObject.alias); // ...
showUserInfo(...Object.values(myObject)); // ...

// 9. Implement an implicit return
const greetUser = (username) => `Hello, ${username}!`;

console.log(greetUser("Jesús")); // Hello, Jesús!

// 10. Make use of this lexicon
let developer = {
  language: "TypeScript",
  library: "React Native",
  develop: function () {
    console.log(`Making an app with ${this.library}`);
  },
  develop2: () => {
    console.log(`Making an app with ${this.library}`);
  },
  develop3: () => {
    console.log(`Making an app with ${developer.library}`);
  },
};

developer.develop(); // Making an app with React Native
developer.develop2(); // Making an app with undefined
developer.develop3(); // Making an app with React Native
