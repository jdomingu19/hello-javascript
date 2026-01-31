// JavaScript Course from Scratch @mouredev
// Class 18 - Beginner Exercises

// 1. Write a comment on one line

// This a comment on one line

// 2. Write a comment on several lines

/*
This is
a comment
on several
lines
*/

// 3. Declare variables with values associated with all primitive type data
let myString = "Hello, JavaScript!";
let myInt = 42;
let myDouble = 26.27;
let myBool1 = true;
let myBool2 = false;
let myUndefined;
let myNull = null;
let mySymbol = Symbol("mySymbol");
let myBigInt = 123456789123456789n;

// 4. Print the value of all variables through the console
console.log(myString); // Hello, JavaScript!
console.log(myInt); // 42
console.log(myDouble); // 26.27
console.log(myBool1); // true
console.log(myBool2); // false
console.log(myUndefined); // undefined
console.log(myNull); // null
console.log(mySymbol); // Symbol(mySymbol)
console.log(myBigInt); // 123456789123456789n

// 5. Print the type of all variables through the console
console.log(typeof myString); // string
console.log(typeof myInt); // number
console.log(typeof myDouble); // number
console.log(typeof myBool1); // boolean
console.log(typeof myBool2); // boolean
console.log(typeof myUndefined); // undefined
console.log(typeof myNull); // object
console.log(typeof mySymbol); // symbol
console.log(typeof myBigInt); // bigint

// 6. Next, modify the values of the variables with others of the same type
myString = "Hello, TypeScript!";
myInt = 75;
myDouble = 34.42;
myBool1 = false;
myBool2 = true;
mySymbol = Symbol("myOtherSymbol");
myBigInt = 987654321987654321n;

console.log(myString); // Hello, TypeScript!
console.log(myInt); // 75
console.log(myDouble); // 34.42
console.log(myBool1); // false
console.log(myBool2); // true
console.log(mySymbol); // Symbol(myOtherSymbol)
console.log(myBigInt); // 987654321987654321n

// 7. Next, modify the values of the variables with others of a different type
myString = "123";
myInt = null;
myDouble = false;
myBool1 = Symbol("mySymbol");
myBool2 = undefined;
myUndefined = 42;
myNull = 26.27;
mySymbol = 123456789123456789n;
myBigInt = true;

console.log(myString); // 123
console.log(myInt); // null
console.log(myDouble); // false
console.log(myBool1); // Symbol(mySymbol)
console.log(myBool2); // undefined
console.log(myUndefined); // 42
console.log(myNull); // 26.27
console.log(mySymbol); // 123456789123456789n
console.log(myBigInt); // true

// 8. Declare constants with values associated with all primitive data types
const myConstantString = "Hello, JavaScript!";
const myConstantInt = 42;
const myConstantDouble = 26.27;
const myConstantBool1 = true;
const myConstantBool2 = false;
const myConstantUndefined = undefined;
const myConstantNull = null;
const myConstantSymbol = Symbol("mySymbol");
const myConstantBigInt = 123456789123456789n;

console.log(myConstantString); // Hello, JavaScript!
console.log(myConstantInt); // 42
console.log(myConstantDouble); // 26.27
console.log(myConstantBool1); // true
console.log(myConstantBool2); // false
console.log(myConstantUndefined); // undefined
console.log(myConstantNull); // null
console.log(myConstantSymbol); // Symbol(mySymbol)
console.log(myConstantBigInt); // 123456789123456789n

// 9. Next, modify the values of the constants
// myConstantString = "Hello, TypeScript!";
// myConstantInt = 75;
// myConstantDouble = 34.42;
// myConstantBool1 = false;
// myConstantBool2 = true;
// myConstantSymbol = Symbol("mytOtherSymbol");
// myConstantBigInt = 987654321987654321n;

// 10. Comment the lines that produce some type of error when executed

// All of them; see step 9 above.
