// Hello, JavaScript!
// Playground: Get Object Class/Constructor

// 1. Using `.constructor`
class Person {
  constructor(name) {
    this.name = name;
  }
}

const person1 = new Person("Jesús");

console.log(person1.constructor); // [class Person]
console.log(person1.constructor.name); // Person

// 2. Using `Object.getPrototypeof()`
const personPrototype = Object.getPrototypeOf(person1);

console.log(personPrototype.constructor); // [class Person]
console.log(personPrototype.constructor.name); // Person

// 3. Check with `instanceof` operator
console.log(person1 instanceof Person); // true
console.log(person1 instanceof Object); // true
console.log(person1 instanceof Array); // false
