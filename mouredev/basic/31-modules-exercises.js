// JavaScript Course from Scratch @mouredev
// Class 45 - Modules Exercises

import { isEvenNumber, NAME, Piano } from "./modules-exercises-part-2.js";

import defaultImport from "./modules-exercises-part-4.js";

import {
  firstTenEvenNumbers,
  EARTH_GRAVITY,
  Mountain,
} from "./my-folder-b/modules-exercises-part-6.js";

// 1. Export a function
export function countToSeven() {
  for (let i = 1; i <= 7; i++) {
    console.log(i);
  }
}

// 2. Export a constant
export const ALIAS = "@jdomingu19";

// 3. Export a class
export class Book {
  constructor(title, autor, pages) {
    this.title = title;
    this.autor = autor;
    this.pages = pages;
  }
}

// 4. Import a function
console.log(isEvenNumber(5)); // false
console.log(isEvenNumber(6)); // true

// 5. Import a constant
console.log(NAME); // Jesús

// 6. Import a class
let myPiano = new Piano(88, "P-45", "Yamaha");
console.log(myPiano); // Piano { keys: 88, model: 'P-45', brand: 'Yamaha' }
console.log(typeof myPiano); // object
console.log(myPiano.keys); // 88
console.log(myPiano.model); // P-45
console.log(myPiano.brand); // Yamaha

// 7. Export a function, a constant and a default class (in case you allow it)
const myFunction = () => "Hello, JavaScript!";

const EYES_COLOR = "Brown";

class Developer {
  constructor(role, experience, salary) {
    this.role = role;
    this.experience = experience;
    this.salary = salary;
  }
}

export default { myFunction, EYES_COLOR, Developer };

// 8. Import a function, a constant and a default class (in case you allow it)
console.log(defaultImport); // { isPositiveNumber: [Function: isPositiveNumber], EARTH_RADIUS: 6371000, Laptop: [class Laptop] }
console.log(typeof defaultImport); // object

let { isPositiveNumber, EARTH_RADIUS, Laptop } = defaultImport;

console.log(isPositiveNumber); // [Function: isPositiveNumber]
console.log(typeof isPositiveNumber); // function
console.log(isPositiveNumber(26)); // true
console.log(typeof isPositiveNumber(26)); // boolean

console.log(EARTH_RADIUS); // 6371000
console.log(typeof EARTH_RADIUS); // number

console.log(Laptop); // [class Laptop]
console.log(typeof Laptop); // function

let laptop1 = new Laptop("MacBook Air Pro", "Apple");
console.log(laptop1); // Laptop { model: 'MacBook Air Pro', brand: 'Apple' }
console.log(typeof laptop1); // object
console.log(laptop1.model); // MacBook Air Pro
console.log(laptop1.brand); // Apple

// 9. Export a function, a constant and a class from a folder
export const greetUser = (username) => `Hello, ${username}!`;

export const ASTRONOMICAL_UNIT = 149597870700; // meters

export class Person {
  constructor(name, age, alias) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

// 10. Import a function, a constant and a class from a different directory than the previous one
console.log(firstTenEvenNumbers); // [Function: firstTenEvenNumbers]
console.log(typeof firstTenEvenNumbers); // function
console.log(firstTenEvenNumbers()); // [ 0, 2, 4, ..., 34, 36, 38]
console.log(typeof firstTenEvenNumbers()); // object

console.log(EARTH_GRAVITY); // 80665
console.log(typeof EARTH_GRAVITY); // number

console.log(Mountain); // [class Mountain]
console.log(typeof Mountain); // function

let mountain1 = new Mountain("Everest", 8849, "Nepal");
console.log(mountain1); // Mountain { name: 'Everest', height: 8849, location: 'Nepal' }
console.log(typeof mountain1); // object
console.log(mountain1.name); // Everest
console.log(mountain1.height); // 8849
console.log(mountain1.location); // Nepal
