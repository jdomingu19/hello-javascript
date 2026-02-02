// JavaScript Course from Scratch @mouredev
// Class 28 - Structures Exercises

// 1. Create an array that stores five animals
let myAnimals = ["owl", "bird", "penguin", "duck", "butterfly"];

console.log(myAnimals); // [ 'owl', 'bird', 'penguin', 'duck', 'butterfly' ]
console.log(typeof myAnimals); // object
console.log(myAnimals.length); // 5

// 2. Add two more. One at the beginning and one at the end
myAnimals.unshift("turtle");
myAnimals.push("dog");

console.log(myAnimals); // [ 'turtle', 'owl', 'bird', 'penguin', 'duck', 'butterfly', 'dog' ]
console.log(myAnimals.length); // 7

// 3. Eliminate the one in third position
myAnimals.splice(2, 1);

console.log(myAnimals); // [ 'turtle', 'owl', 'penguin', 'duck', 'butterfly', 'dog' ]
console.log(myAnimals.length); // 6

// 4. Create a set that stores five books
let myBooks = new Set([
  "The Alchemist",
  "The Little Prince",
  "The Lord of the Rings",
  "The Hobbit",
  "Love",
]);

console.log(myBooks); // Set(5) { ... }
console.log(typeof myBooks); // object
console.log(myBooks.size); // 5

// 5. Add two more. One of them repeated
myBooks.add("Atomic Habits");
myBooks.add("Atomic Habits");
myBooks.add("The Monk Who Sold His Ferrari");

console.log(myBooks); // Set(7) { ... }
console.log(typeof myBooks); // object
console.log(myBooks.size); // 7

// 6. Delete a specific one of your choice
myBooks.delete("The Hobbit");

console.log(myBooks); // Set(6) { ... }
console.log(typeof myBooks); // object
console.log(myBooks.size); // 6

// 7. Create a map that associates the month number with its name
let months = new Map([
  [1, "January"],
  [2, "February"],
  [3, "March"],
  [4, "April"],
  [5, "May"],
  [6, "June"],
  [7, "July"],
  [8, "August"],
  [9, "September"],
  [10, "October"],
  [11, "November"],
  [12, "December"],
]);

console.log(months); // Map(12) { ... }
console.log(typeof months); // object
console.log(months.size); // 12

// 8. Checks if month number 5 exists in the map and prints its value
console.log(months.has(5)); // true
if (months.has(5)) {
  console.log(months.get(5)); // May
}

// 9. Add a key to the map with an array that stores the summer months
months.set("summerMonths", [6, 7, 8, 9]);

console.log(months); // Map(13) { ... }
console.log(typeof months); // object
console.log(months.size); // 13
console.log(months.has("summerMonths")); // true
console.log(months.get("summerMonths")); // [ 6, 7, 8, 9 ]

// 10. Create an Array, transform it to a Set and store it in a Map
let myArray = ["a", "b", "c", "a", "b", "c"];

console.log(myArray); // [ 'a', 'b', 'c', 'a', 'b', 'c' ]
console.log(typeof myArray); // object
console.log(myArray.length); // 6

let mySet = new Set(myArray);

console.log(mySet); // Set(3) { 'a', 'b', 'c' }
console.log(typeof mySet); // object
console.log(mySet.size); // 3

let myMap = new Map([["letters", mySet]]);

console.log(myMap); // Map(1) { 'letters' => Set(3) { 'a', 'b', 'c' } }
console.log(typeof myMap); // object
console.log(myMap.size); // 1

myMap.clear();

console.log(myMap); // Map(0) {}
console.log(typeof myMap); // object
console.log(myMap.size); // 0

myMap = new Map();
myMap.set("letters", mySet);

console.log(myMap); // Map(1) { 'letters' => Set(3) { 'a', 'b', 'c' } }
console.log(typeof myMap); // object
console.log(myMap.size); // 1

if (myMap.has("letters")) {
  console.log(myMap.get("letters")); // Set(3) { 'a', 'b', 'c' }
}
