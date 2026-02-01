// JavaScript Course from Scratch @mouredev
// Class 22 - Strings Exercises

// 1. Concatenate two text strings
let myString1 = "Hello, ";
let myString2 = "JavaScript!";
console.log(myString1 + myString2); // Hello, JavaScript!

// 2. Display the length of a text string
console.log(myString2.length); // 11
console.log(typeof myString2.length); // number

// 3. Shows the first and last character of a string
console.log(myString2[0]); // J
console.log(typeof myString2[0]); // string

console.log(myString2[myString2.length - 1]); // !
console.log(typeof myString2[myString2.length - 1]); // string

// 4. Convert a string to upper and lower case
console.log(myString2.toUpperCase()); // JAVASCRIPT!
console.log(typeof myString2.toUpperCase()); // string

console.log(myString2.toLowerCase()); // javascript!
console.log(typeof myString2.toLowerCase()); // string

// 5. Create a text string on multiple lines
let myString3 = `This is
a text
string
on
multiple
lines!`;
console.log(myString3); // ...
console.log(typeof myString3); // string

// 6. Interpolate the value of a variable into a string
let a = 5;
let b = 6;
console.log(`${a} + ${b} = ${a + b}`); // 5 + 6 = 11

// 7. Replace all whitespace in a string with dashes
let myString4 = "a b c d";
console.log(myString4); // a b c d
console.log(typeof myString4); // string

console.log(myString4.replaceAll(" ", "-")); // a-b-c-d
console.log(typeof myString4); // string

// 8. Checks if a text string contains a specific word
let myString5 = "I love you!";
console.log(myString5.includes("love")); // true

// 9. Check if two strings are equal
let myString6 = "Hello";
let myString7 = `Hello`;

console.log(myString6 == myString7); // true
console.log(myString6 === myString7); // true

console.log(myString6 == "Hello"); // true
console.log(myString6 === "Hello"); // true

console.log(myString6 == `Hello`); // true
console.log(myString6 === `Hello`); // true

console.log(myString6 == 5); // false
console.log(myString6 === 5); // false

// 10. Check if two strings have the same length
console.log(myString6.length == myString7.length); // true
console.log(myString6.length === myString7.length); // true

console.log(myString6.length == myString5.length); // false
console.log(myString6.length === myString5.length); // false
