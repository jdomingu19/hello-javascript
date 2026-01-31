// JavaScript Course from Scratch @mouredev
// Class 17 - Datatypes

// 1. Primitive data types

// 1.1 string
let myName = "Jesús Domínguez";
let alias = "jdomingu19";
let email = "some@email.com";

console.log(myName); // Jesús Domínguez
console.log(alias); // jdomingu19
console.log(email); // some@email.com

// 1.2 number
let age = 21;
let height = 1.82;

console.log(age); // 21
console.log(height); // 1.82

// 1.3 boolean
let isDeveloper = true;
let isSleeping = false;

console.log(isDeveloper); // true
console.log(isSleeping); // false

// 1.4 undefined
let undefinedValue;
console.log(undefinedValue); // undefined

// 1.5 null
let nullValue = null;
console.log(nullValue); // null

// 1.6 symbol
let mySymbol = Symbol("mySymbol");
console.log(mySymbol); // Symbol(mySymbol)

// 1.7 bigint
let myBigInt = BigInt(123456789123456789n);
let myBigInt2 = 123456789123456789n;
console.log(myBigInt); // 123456789123456789n
console.log(myBigInt2); // 123456789123456789n

// 2. Show data types
console.log(typeof myName); // string
console.log(typeof alias); // string
console.log(typeof email); // string

console.log(typeof age); // number
console.log(typeof height); // number

console.log(typeof isDeveloper); // boolean
console.log(typeof isSleeping); // boolean

console.log(typeof undefinedValue); // undefined

console.log(typeof nullValue); // object

console.log(typeof mySymbol); // symbol

console.log(typeof myBigInt); // bigint
console.log(typeof myBigInt2); // bigint
