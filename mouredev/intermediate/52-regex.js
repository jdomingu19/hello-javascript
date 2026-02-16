// Intermediate JavaScript Course @mouredev
// Class 75 to 78 - Regex (Regular Expressions)

// 1. Regex Syntax
const regex = /abc/;

console.log(regex); // /abc/
console.log(typeof regex); // object
console.log(regex.__proto__); // {}
console.log(regex.__proto__.constructor); // [Function: RegExp]
console.log(regex.__proto__.constructor.name); // RegExp

const regex2 = RegExp("abc");

console.log(regex2); // /abc/
console.log(typeof regex2); // object
console.log(regex2.__proto__); // {}
console.log(regex2.__proto__.constructor); // [Function: RegExp]
console.log(regex2.__proto__.constructor.name); // RegExp

// 2. .test()
const text = "Hello, abc JavaScript!";
console.log(regex.test(text)); // true
console.log(regex2.test(text)); // true

const text2 = "He's 21 years old";
const regex3 = /\d/g; // \d : any digit (0-9); g : global
const regex4 = /[1-3]/; // [a-b] : character set
const regex5 = /[4-6]/; // [a-b] : character set

console.log(regex3.test(text2)); // true
console.log(regex4.test(text2)); // true
console.log(regex5.test(text2)); // false

// 3. .replace()
const regex6 = /JavaScript/;
console.log("Hello, JavaScript!".replace(regex6, "TypeScript")); // Hello, TypeScript!

const text3 = "Counting ... 1 2 3 4 5";
console.log(text3.replace(regex3, "[number]")); // Counting ... [number] [number] [number] [number] [number]

// 4. .exec()
console.log(regex3.exec(text3)); // [ '1', index: 13, input: 'Counting ... 1 2 3 4 5', groups: undefined ]

// Executes a search on a string using a regular expression pattern,
// and returns an array containing the results of that search:
while ((match = regex3.exec(text3)) !== null) {
  console.log(match);
  // [ '1', index: 13, input: 'Counting ... 1 2 3 4 5', groups: undefined ]
  // [ '2', index: 15, input: 'Counting ... 1 2 3 4 5', groups: undefined ]
  // [ '3', index: 17, input: 'Counting ... 1 2 3 4 5', groups: undefined ]
  // [ '4', index: 19, input: 'Counting ... 1 2 3 4 5', groups: undefined ]
  // [ '5', index: 21, input: 'Counting ... 1 2 3 4 5', groups: undefined ]
}
