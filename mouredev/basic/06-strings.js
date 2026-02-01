// JavaScript Course from Scratch @mouredev
// Class 21 - Strings

// 1. string
let myString = "Hello, JavaScript!";
console.log(myString); // Hello, JavaScript!
console.log(typeof myString); // string

// 2. Concatenation
let myFirstName = "Jesús";
let myLastName = "Domínguez";

let myName = myFirstName + " " + myLastName;
let greeting = "Hello, " + myName + "!";

console.log(greeting); // Hello, Jesús Domínguez!
console.log(typeof greeting); // string

// 3. length
console.log(myName.length); // 15
console.log(typeof myName.length); // number

// 4. Character access
console.log(myName[0]); // J
console.log(typeof myName[0]); // string

console.log(myName[14]); // z
console.log(typeof myName[14]); // string

// 5.Common methods
console.log(myName.toUpperCase()); // JESÚS DOMÍNGUEZ
console.log(myName.toLowerCase()); // jesús domínguez
console.log(myName.indexOf("Jesús")); // 0
console.log(myName.indexOf(" ")); // 5
console.log(myName.indexOf("Domínguez")); // 6
console.log(myName.includes("Jesús")); // true
console.log(myName.includes(" ")); // true
console.log(myName.includes("Domínguez")); // true
console.log(myName.includes("@jdomingu19")); // false
console.log(myName.slice(0, 5)); // Jesús
console.log(myName.replace("Domínguez", "@jdomingu19")); // Jesús @jdomingu19
console.log(myName.includes("@jdomingu19")); // false

// 6. Template literals

// 6.1 Strings on multiple lines
let message = `Hello,
this is
a course
of JavaScript
from Scratch!`;
console.log(message); // It takes multiple lines

// 6.2 Value interpolation
let email = "some@email.com";
console.log(`${myName}, ${email}`); // Jesús Domínguez, some@email.com
console.log(`Hello, ${myName}`); // Hello, Jesús Domínguez
console.log(`Your email is ${email}`); // Your email is some@email.com
