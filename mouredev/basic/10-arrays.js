// JavaScript Course from Scratch @mouredev
// Class 24 - Arrays

// 1. Declaration
let myArray = [];
let myArray2 = new Array();

console.log(myArray); // []
console.log(typeof myArray); // object

console.log(myArray2); // []
console.log(typeof myArray2); // object

// 2. Initialization
myArray = [3];
myArray2 = new Array(3);

console.log(myArray); // [ 3 ]
console.log(typeof myArray); // object

console.log(myArray2); // [ <3 empty items> ]
console.log(typeof myArray2); // object

myArray = [1, 2, 3, 4];
myArray2 = new Array(1, 2, 3, 4);

console.log(myArray); // [ 1, 2, 3, 4 ]
console.log(typeof myArray); // object

console.log(myArray2); // [ 1, 2, 3, 4 ]
console.log(typeof myArray2); // object

myArray = ["abc", true, 42, null, undefined];
myArray2 = new Array("abc", true, 42, null, undefined);

console.log(myArray); // [ "abc", true, 42, null, undefined ]
console.log(typeof myArray); // object

console.log(myArray2); // [ "abc", true, 42, null, undefined ]
console.log(typeof myArray2); // object

// 3. Checking empty items with new Array(length);
myArray2 = new Array(4);
// myArray2[0] = "abc";
myArray2[1] = "Jesús";
// myArray2[2] = "abc";
myArray2[3] = "Domínguez";

console.log(myArray2); // [ <1 empty item>, 'Jesús', <1 empty item>, 'Domínguez' ]
console.log(typeof myArray2); // object

// 4. Common method
myArray = [];

// 4.1 .push()
myArray.push("Jesús");
myArray.push("Domínguez");
myArray.push("jdomingu19");
myArray.push(21);

console.log(myArray); // [ 'Jesús', 'Domínguez', 'jdomingu19', 21 ]
console.log(typeof myArray); // object
console.log(myArray.length); // 4

// 4.2 .pop()
console.log(myArray.pop()); // 21

console.log(myArray); // [ 'Jesús', 'Domínguez', 'jdomingu19']
console.log(typeof myArray); // object
console.log(myArray.length); // 3

// 4.3 .shift()
console.log(myArray.shift()); // Jesús

console.log(myArray); // [ 'Domínguez', 'jdomingu19']
console.log(typeof myArray); // object
console.log(myArray.length); // 2

// 4.4 .unshift()
console.log(myArray.unshift("Developer", "Jesús")); // 4

console.log(myArray); // [ 'Developer', 'Jesús', 'Domínguez', 'jdomingu19' ]
console.log(typeof myArray); // object
console.log(myArray.length); // 4

// 4.5 .length()
console.log(myArray.length); // 4

// 4.6 .clear()
myArray = [];

console.log(myArray); // []
console.log(typeof myArray); // object
console.log(myArray.length); // 0

myArray.length = 0;

console.log(myArray); // []
console.log(typeof myArray); // object
console.log(myArray.length); // 0

// 4.7 .slice()
myArray = ["a", "b", "c", "d", "e"];
let myNewArray = myArray.slice(1, 3);

console.log(myArray); // [ 'a', 'b', 'c', 'd', 'e' ]
console.log(typeof myArray); // object
console.log(myArray.length); // 5

console.log(myNewArray); // [ 'b', 'c' ]
console.log(typeof myNewArray); // object
console.log(myNewArray.length); // 2

// 4.8 .splice()
myArray.splice(1, 3);

console.log(myArray); // [ 'a', 'e' ]
console.log(typeof myArray); // object
console.log(myArray.length); // 2

myArray = ["a", "b", "c", "d", "e"];
myArray.splice(1, 2, "f");

console.log(myArray); // [ 'a', 'f', 'd', 'e' ]
console.log(typeof myArray); // object
console.log(myArray.length); // 4
