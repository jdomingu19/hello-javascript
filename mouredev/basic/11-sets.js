// JavaScript Course from Scratch @mouredev
// Class 26 - Sets

// 1. Declaration
let mySet = new Set();

console.log(mySet); // Set(0) {}
console.log(typeof mySet); // object

// 2. Initialization
mySet = new Set(["abc", 123, true, null, undefined]);

console.log(mySet); // Set(5) { 'abc', 123, true, null, undefined }
console.log(typeof mySet); // object

// 3. Common methods

// 3.1 .add()
mySet.add("hello");

console.log(mySet); // Set(6) { 'abc', 123, true, null, undefined, 'hello' }
console.log(typeof mySet); // object

// 3.2 .delete()
mySet.delete("abc");

console.log(mySet); // Set(5) { 123, true, null, undefined, 'hello' }
console.log(typeof mySet); // object

// 3.3 .has()
console.log(mySet.has(true)); // true
console.log(mySet.has(false)); // false
console.log(mySet.has(123)); // true

// 3.4 .size()
console.log(mySet.size); // 5
console.log(mySet); // Set(5) { 123, true, null, undefined, 'hello' }

// 4. Convert a set to an array
let myArray = Array.from(mySet);
console.log(myArray); // [ 123, true, null, undefined, 'hello' ]
console.log(typeof myArray); // object

// 5. Convert an array to a set
mySet = new Set(myArray);

console.log(mySet); // Set(5) { 123, true, null, undefined, 'hello' }
console.log(typeof mySet); // object

// 6.Duplicates are not allowed
mySet.add(123);
mySet.add(123);
mySet.add(123);

console.log(mySet); // Set(5) { 123, true, null, undefined, 'hello' }
console.log(mySet.size); // 5
console.log(typeof mySet); // object
