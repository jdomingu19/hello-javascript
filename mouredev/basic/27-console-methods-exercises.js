// JavaScript Course from Scratch @mouredev
// Class 42 - Console Methods Exercises

// 1. Create a function that uses error correctly
function addTwoNumber(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.error(
      "An error has occurred:",
      new TypeError("a and b must be numbers"),
    );
    return;
  }
  console.log(a + b);
}

addTwoNumber(5, 6); // 11
addTwoNumber("5", "6"); // An error has occurred: TypeError: a and b must be numbers ...

// 2. Create a function that uses warn correctly
function getObjectPropertyValue(object, property) {
  if (!object.hasOwnProperty(property)) {
    console.warn(
      "Warning message:",
      new Error(`${object} has no '${property}' property:`),
    );
    return;
  }
  console.log(`${object}.${property} = ${object[property]}`);
}

let myObject = {
  name: "Jesús",
  alias: "@jdomingu19",
};

getObjectPropertyValue(myObject, "name"); // [object Object].name = Jesús
getObjectPropertyValue(myObject, "alias"); // [object Object].alias = @jdomingu19
getObjectPropertyValue(myObject, "age"); // Warning message: Error: [object Object] has no 'age' property: ...

// 3. Create a function that uses info correctly
function createPassword(password) {
  if (password.length < 8) {
    console.info("Password must have at least 8 characters");
    return;
  }
  console.log("Password created!");
}

createPassword("1234567"); // Password must have at least 8 characters
createPassword("12345678"); // Password created!

// 4. Use table
let myData = [
  {
    title: "The Mock Who Sold His Ferrari",
    autor: "Robin S. Sharma",
    pages: "200",
  },
  {
    title: "The Alchemist",
    autor: "Paulo Coelho",
    pages: "189",
  },
  {
    title: "Letters to a Young Poet",
    autor: "Rainer Maria Rilke",
    pages: "80",
  },
];

console.table(myData);

// 5. Use group
console.group("Show repository info");
console.log("Name: hello-javascript");
console.log("Autor: @jdomingu19");
console.groupEnd();

// 6. Use time
console.time("Get greater number");
let numbers = [10, 92, 56, 82, 26, 75, 43];
let greater = 0;
for (const number of numbers) {
  if (number > greater) {
    greater = number;
  }
}
console.log("Greater:", greater); // Greater: 92
console.timeEnd("Get greater number"); // e.g. Get greater number: 0.055ms

// 7. Validate with assert if a number is positive
let a = 26;
let b = -26;

console.assert(a >= 0, `${a} is not a positive number`); // Ok
console.assert(b >= 0, `${b} is not a positive number`); // Assertion failed: -26 is not a positive number

// 8. Use count
let myString = "Hello, JavaScript!";
for (let i = 0; i < 5; i++) {
  console.count(myString);
}

console.countReset(myString);
for (let i = 0; i < 5; i++) {
  console.count(myString);
}

// 9. Use trace
let vowelsSet = new Set(["a", "e", "i", "o", "u"]);
let userChar = "j";

if (vowelsSet.has(userChar) == false) {
  console.trace(`User char '${userChar}' is not a vowel:`); // Trace: User char 'j' is not a vowel: ...
}

// 10. Use clear
let cleanConsole = true;

if (cleanConsole) {
  console.clear();
}
