// Intermediate JavaScript Course @mouredev
// Class 13 to 22 - Advanced Structures

// 1. Advanced arrays

// 1.1 Functional array methods

// 1.1.1 .forEach()
let numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach((element) => console.log(element)); // 1 ... 6

// 1.1.2 .map()
let doubled = numbers.map((element) => element * 2);
console.log(doubled); // [ 2, 4, 6, 8, 10, 12 ]

// 1.1.3 .filter()
let evens = numbers.filter((element) => element % 2 == 0);
console.log(evens); // [ 2, 4, 6 ]

let odds = numbers.filter((element) => element % 2 != 0);
console.log(odds); // [ 1, 3, 5 ]

// 1.1.4 .reduce()
let sum = numbers.reduce((result, current) => result + current, 0);
console.log(sum); // 21

// 1.2 Array manipulation

// 1.2.1 .flat()
let nestedArray = [1, [2, [3, [4]]]];
console.log(nestedArray); // [ 1, [ 2, [ 3, [Array] ] ] ]

let flatArray = nestedArray.flat(1);
console.log(flatArray); // [ 1, 2, [ 3, [ 4 ] ] ]

flatArray = nestedArray.flat(2);
console.log(flatArray); // [ 1, 2, 3, [ 4 ] ]

flatArray = nestedArray.flat(3);
console.log(flatArray); // [ 1, 2, 3, 4 ]

// 1.2.2 .flatMap()
let phrases = ["Hello, JavaScript!", "Learning JavaScript from Scratch!"];
let words = phrases.flatMap((phrases) => phrases.split(" "));
console.log(words); // [ 'Hello,', ..., 'Scratch!' ]

// 1.3 Array sorting

// 1.3.1 .sort()
let unsorted = ["b", "a", "d", "c"];
let sorted = [...unsorted].sort();

console.log(unsorted); // [ 'b', 'a', 'd', 'c' ]
console.log(sorted); // [ 'a', 'b', 'c', 'd' ]

unsorted = [3, 4, 1, 6, 8];
sorted = [...unsorted].sort((a, b) => a - b);

console.log(unsorted); // [ 3, 4, 1, 6, 8 ]
console.log(sorted); // [ 1, 3, 4, 6, 8 ]

// 1.3.2 .reverse()
unsorted.reverse();
console.log(unsorted); // [ 8, 6, 1, 4, 3 ]

sorted.reverse();
console.log(sorted); // [ 8, 6, 4, 3, 1 ]

// 1.4 Array searching

// 1.4.1 .includes()
console.log(sorted.includes(4)); // true
console.log(sorted.includes(5)); // false
console.log(sorted.includes(6)); // true

// 1.4.2 .find()
let firstEven = sorted.find((element) => element % 2 === 0);
console.log(firstEven); // 8

let firstOdd = sorted.find((element) => element % 2 !== 0);
console.log(firstOdd); // 3

// 1.4.2 .findIndex()
let firstEvenIndex = sorted.findIndex((element) => element % 2 === 0);
console.log(firstEvenIndex); // 0

let firstOddIndex = sorted.findIndex((element) => element % 2 !== 0);
console.log(firstOddIndex); // 3

// 2. Advanced sets

// 2.1 Set operations

// 2.1.1 Duplicate removal
let numbersArray = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
numbersArray = [...new Set(numbersArray)];

console.log(numbersArray); // [ 1, 2, 3, 4 ]
console.log(new Set(numbersArray)); // Set(4) { 1, 2, 3, 4 }

// 2.1.2 Union
const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4, 5]);
const union = new Set([...setA, ...setB]);

console.log(setA); // Set(3) { 1, 2, 3 }
console.log(setB); // Set(4) { 2, 3, 4, 5 }
console.log(union); // Set(5) { 1, 2, 3, 4, 5 }

// 2.1.3 Intersection
const intersection = new Set([...setA].filter((element) => setB.has(element)));
console.log(intersection); // Set(2) { 2, 3 }

// 2.1.3 Difference
const difference = new Set([...setA].filter((element) => !setB.has(element)));
console.log(difference); // Set(1) { 1 }

// 2.1.4 Symmetric difference
const symmetricDifference = new Set(
  [...setA, ...setB].filter(
    (element) => !(setA.has(element) && setB.has(element)),
  ),
);
console.log(symmetricDifference); // Set(3) { 1, 4, 5 }

// 2.2 Set conversion

// 2.2.1 Set to array
let newArray = [...setA];

console.log(setA); // Set(3) { 1, 2, 3 }
console.log(newArray); // [ 1, 2, 3 ]

// 2.3 Set iteration

// 2.3.1 .forEach()
setA.forEach((element) => console.log(element)); // 1 ... 3

// 3. Advanced maps

// 3.1 Map iteration

// 3.1.1 .forEach()
let myMap = new Map([
  ["name", "Jesús"],
  ["age", 21],
  ["alias", "@jdomingu19"],
]);

myMap.forEach((value, key) => console.log(`${key}: ${value}`)); // ...

// 3.2 Map conversion

// 3.2.1 Map to array
const arrayFromMap = Array.from(myMap);

console.log(myMap); // Map(3) { 'name' => 'Jesús', 'age' => 21, 'alias' => '@jdomingu19' }
console.log(arrayFromMap); // [ [ 'name', 'Jesús' ], [ 'age', 21 ], [ 'alias', '@jdomingu19' ] ]

// 3.2.2 Map to object
const objectFromMap = Object.fromEntries(myMap);

console.log(myMap); // Map(3) { 'name' => 'Jesús', 'age' => 21, 'alias' => '@jdomingu19' }
console.log(objectFromMap); // { name: 'Jesús', age: 21, alias: '@jdomingu19' }

// 3.2.3 Object to map
const mapFromObject = new Map(Object.entries(objectFromMap));

console.log(objectFromMap); // { name: 'Jesús', age: 21, alias: '@jdomingu19' }
console.log(mapFromObject); // Map(3) { 'name' => 'Jesús', 'age' => 21, 'alias' => '@jdomingu19' }
