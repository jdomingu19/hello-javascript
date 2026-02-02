// JavaScript Course from Scratch @mouredev
// Class 27 - Maps

// 1. Declaration
let myMap = new Map();

console.log(myMap); // Map(0) {}
console.log(typeof myMap); // object

// 2. Initialization
myMap = new Map([
  ["name", "Jesús"],
  ["email", "some@email.com"],
  ["age", "21"],
]);

console.log(myMap); // Map(3) { ... }
console.log(typeof myMap); // object

// 3. Methods and properties

// 3.1 .set()
myMap.set("alias", "jdomingu19");
myMap.set("name", "Jesús Domínguez");

console.log(myMap); // Map(4) { ... }
console.log(typeof myMap); // object

// 3.2 .get()
console.log(myMap.get("name")); // Jesús Domínguez
console.log(myMap.get("surname")); // undefined

// 3.3 .delete()
myMap.delete("email");

console.log(myMap); // Map(3) { ... }
console.log(typeof myMap); // object

// 3.4 .keys()
console.log(myMap.keys()); // [Map Iterator] { 'name', 'age', 'alias' }
console.log(typeof myMap.keys()); // object

// 3.5 .values()
console.log(myMap.values()); // [Map Iterator] { 'Jesús Domínguez', '21', 'jdomingu19' }
console.log(typeof myMap.values()); // object

// 3.6 .entries()
console.log(myMap.entries()); // [Map Entries] { ... }
console.log(typeof myMap.entries()); // object

// 3.7 .size
console.log(myMap.size); // 3

// 3.8 .clear()
myMap.clear();

console.log(myMap); // Map(0) {}
console.log(myMap.size); // 0
console.log(myMap.keys()); // [Map Iterator] {  }
console.log(myMap.values()); // [Map Iterator] {  }
console.log(myMap.entries()); // [Map Entries] {  }
