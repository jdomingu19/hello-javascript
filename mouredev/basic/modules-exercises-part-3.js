// JavaScript Course from Scratch @mouredev
// Class 45 - Modules Exercises (Part 3)

import defaultImport from "./31-modules-exercises.js";

// 7. Export (use import here) a function, a constant and a default class (in case you allow it)
console.log(defaultImport); // { myFunction: [Function: myFunction], EYES_COLOR: 'Brown', Developer: [class Developer] }
console.log(typeof defaultImport); // object

let { myFunction, EYES_COLOR, Developer } = defaultImport;

console.log(myFunction); // [Function: [Function: myFunction]]
console.log(typeof myFunction); // function
console.log(myFunction()); // Hello, JavaScript!
console.log(typeof myFunction()); // string

console.log(EYES_COLOR); // Brown
console.log(typeof EYES_COLOR); // string

console.log(Developer); // [class Developer]
console.log(typeof Developer); // function

let developer1 = new Developer("React Native Developer", 5, 5000);
console.log(developer1); // Developer { role: ..., experience: ..., salary: ... }
console.log(typeof developer1); // object
console.log(developer1.role); // React Native Developer
console.log(developer1.experience); // 5
console.log(developer1.salary); // 5000
