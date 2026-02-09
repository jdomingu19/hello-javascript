// JavaScript Course from Scratch @mouredev
// Class 45 - Modules Exercises (Part 1)
import { countToSeven, ALIAS, Book } from "./31-modules-exercises.js";

// 1. Export (use import here) a function
countToSeven(); // 1 - 7
console.log(countToSeven); // [Function: countToSeven]
console.log(typeof countToSeven); // function

// 2. Export (use import here) a constant
console.log(ALIAS); // @jdomingu19
console.log(typeof ALIAS); // string

// 3. Export (use import here) a class
let myBook = new Book("The Mock Who Sold His Ferrari", "Robin S. Sharma", 200);
console.log(myBook); // Book { title: ..., autor: ..., pages: ... }
console.log(typeof myBook); // object
console.log(myBook.title); // The Mock Who Sold His Ferrari
console.log(myBook.autor); // Robin S. Sharma
console.log(myBook.pages); // 200
