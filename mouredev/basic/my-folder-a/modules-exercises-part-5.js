// JavaScript Course from Scratch @mouredev
// Class 45 - Modules Exercises (Part 5)

// 9. Export (here use import) a function, a constant and a class from a folder
import {
  greetUser,
  ASTRONOMICAL_UNIT,
  Person,
} from "../31-modules-exercises.js";

console.log(greetUser); // [Function: greetUser]
console.log(typeof greetUser); // function
console.log(greetUser("Jesús")); // Hello, Jesús!
console.log(typeof greetUser()); // string

console.log(ASTRONOMICAL_UNIT); // 149597870700
console.log(typeof ASTRONOMICAL_UNIT); // number

console.log(Person); // [class Person]
console.log(typeof Person); // function

let person1 = new Person("Jesús", 21, "@jdomingu19");
console.log(person1); // Person { name: 'Jesús', age: 21, alias: '@jdomingu19' }
console.log(typeof person1); // object
console.log(person1.name); // Jesús
console.log(person1.age); // 21
console.log(person1.alias); // @jdomingu19
