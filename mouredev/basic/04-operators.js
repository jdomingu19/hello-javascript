// JavaScript Course from Scratch @mouredev
// Class 19 - Operators

// 1. Arithmetic operators
let a = 5;
let b = 10;

// 1.1 addition operator
console.log(a + b); // 15

// 1.2. subtraction operator
console.log(a - b); // -5

// 1.3 multiplication operator
console.log(a * b); // 50

// 1.4 division operator
console.log(a / b); // 0.5

// 1.5 modulus operator
console.log(a % b); // 5

// 1.6 exponentiation operator
console.log(a ** b); // 9765625

// 1.7 increment operator
a++;
console.log(a); // 6

// 1.8 decrement operator
b--;
console.log(b); // 9

// 2. Assignment operators
let myVariable = 2;
console.log(myVariable); // 2

// 2.1 addition assignment operator
myVariable += 2;
console.log(myVariable); // 4

// 2.2 subtraction assignment operator
myVariable -= 2;
console.log(myVariable); // 2

// 2.3 multiplication assignment operator
myVariable *= 2;
console.log(myVariable); // 4

// 2.4 division assignment operator
myVariable /= 2;
console.log(myVariable); // 2

// 2.5 modulus assignment operator
myVariable %= 2;
console.log(myVariable); // 0

// 2.6 exponentiation assignment operator
myVariable **= 2;
console.log(myVariable); // 0

// 3. Comparison operators

// 3.1 greater than
console.log(a > b); // false

// 3.2 less than
console.log(a < b); // true

// 3.3 greater than or equal to
console.log(a >= b); // false

// 3.3 less than or equal t
console.log(a <= b); // true

// 3.4 Equal to
// (Checks if two values are equal)
console.log(a == 6); // true
console.log(a == "6"); // true
console.log(a == a); // true

// 3.5 Strict equal to
// (Checks if two values are equal and of the same type)
console.log(a === 6); // true
console.log(a === "6"); // false
console.log(a === a); // true

// 3.7 Not equal to
// (Checks if two values are not equal)
console.log(a != 6); // false
console.log(a != "6"); // false
console.log(a != a); // false

// 3.8 Strict not equal to
// (Checks if two values are not equal or not of the same type)
console.log(a !== 6); // false
console.log(a !== "6"); // true
console.log(a !== a); // false

// 3.9 Checking truthy and falsy values
console.log(0 == false); // true
console.log(1 == false); // false
console.log(2 == false); // false
console.log(-1 == false); // false
console.log(-2 == false); // false

console.log(0 == ""); // true
console.log(0 == " "); // true
console.log(0 == "abc"); // false

console.log(0 === ""); // false
console.log(0 === " "); // false
console.log(0 === "abc"); // false

console.log(0 == " "); // true
console.log(0 == "  "); // true
console.log(0 == "   "); // true

console.log(0 === " "); // false
console.log(0 === "  "); // false
console.log(0 === "   "); // false

console.log(0 == null); // false
console.log(0 == undefined); // false

console.log(0 === null); // false
console.log(0 === undefined); // false

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(null == ""); // false
console.log(null == " "); // false
console.log(null == "abc"); // false

console.log(null === ""); // false
console.log(null === " "); // false
console.log(null === "abc"); // false

console.log(null == " "); // false
console.log(null == "  "); // false
console.log(null == "   "); // false

console.log(null === " "); // false
console.log(null === "  "); // false
console.log(null === "   "); // false

console.log(undefined == ""); // false
console.log(undefined == " "); // false
console.log(undefined == "abc"); // false

console.log(undefined === ""); // false
console.log(undefined === " "); // false
console.log(undefined === "abc"); // false

console.log(undefined == " "); // false
console.log(undefined == "  "); // false
console.log(undefined == "   "); // false

console.log(undefined === " "); // false
console.log(undefined === "  "); // false
console.log(undefined === "   "); // false

// 3.10 Falsy Values
console.log("3.10 Falsy Values");
console.log(0 == false); // true
console.log(0n == false); // true
console.log(null == false); // false
console.log(undefined == false); // false
console.log(NaN == false); // false
console.log(false == false); // true
console.log("" == false); // true
console.log(" " == false); // true
console.log("  " == false); // true

console.log(0 === false); // false
console.log(0n === false); // false
console.log(null === false); // false
console.log(undefined === false); // false
console.log(NaN === false); // false
console.log(false === false); // true
console.log("" === false); // false
console.log(" " === false); // false
console.log("  " === false); // false

// 4. Logical operators

// 4.1 and operator (&&)
console.log(5 > 10 && 15 > 20); // false
console.log(5 < 10 && 15 < 20); // true
console.log(5 < 10 && 15 > 20); // false
console.log(5 > 10 && 15 > 20 && 30 > 40); // false

// 4.2 or operator (||)
console.log(5 > 10 || 15 > 20); // false
console.log(5 < 10 || 15 < 20); // true
console.log(5 < 10 || 15 > 20); // true
console.log(5 > 10 || 15 > 20 || 30 > 40); // false

// 4.3 using both operators (and, or, &&, ||)
console.log((5 > 10 && 15 > 20) || 30 > 40); // false

// 4.3 not operator (!)
console.log(!true); // false
console.log(!false); // true
console.log(!(5 > 10 && 15 > 20)); // true
console.log(!(5 > 10 || 15 > 20)); // true

// 4.4 ternary operator (x ? y : z)
const isRaining = false;
console.log(isRaining); // false

isRaining ? console.log("Is raining") : console.log("Is not raining"); // Is not raining
