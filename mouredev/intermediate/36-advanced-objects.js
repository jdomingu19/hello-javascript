// Intermediate JavaScript Course @mouredev
// Class 24 to 28 - Advanced Object

// 1. Prototypes
let person = {
  name: "Jesús",
  age: 21,
  greet() {
    console.log(`Hello, this is ${this.name}`);
  },
};

console.log(person); // { name: 'Jesús', age: 21, greet: [Function: greet] }
console.log(typeof person); // object

console.log(person.__proto__); // [Object: null prototype] {}
console.log(Object.getPrototypeOf(person)); // [Object: null prototype] {}

person.sayAge = function () {
  console.log(`I'm ${this.age} years old`);
};

console.log(person); // { name: 'Jesús', age: 21, greet: [Function: greet], sayAge: [Function (anonymous)] }
console.log(typeof person); // object

person.greet(); // Hello, this is Jesús
person.sayAge(); // I'm 21 years old

// 2. Inheritance
let programmer = Object.create(person);

console.log(programmer); // {}
console.log(typeof programmer); // object

programmer.language = "JavaScript";
programmer.name = "@jdomingu19";

console.log(person.name); // Jesús
console.log(person.age); // 21
console.log(person.language); // undefined

console.log(programmer.name); // @jdomingu19
console.log(programmer.age); // 21
console.log(programmer.language); // JavaScript

programmer.greet(); // Hello, this is @jdomingu19
programmer.sayAge(); // I'm 21 years old

// 3. Static methods & Instance methods (Use class declaration instead)
function Person(name, age) {
  this.name = name;
  this.age = age;
}

console.log(Person); // [Function: Person]
console.log(typeof Person); // function

console.log(Person.prototype); // {}
console.log(typeof Person.prototype); // object

Person.prototype.greet = function () {
  console.log(`Hello, this is ${this.name}`);
};

let newPerson = new Person("Jesús", 21);

console.log(newPerson); // Person { name: 'Jesús', age: 21 }
console.log(typeof newPerson); // object

console.log(newPerson instanceof Number); // false
console.log(newPerson instanceof Person); // true
console.log(newPerson instanceof Object); // true

newPerson.greet(); // Hello, this is Jesús

// 4. Advanced methods

// 4.1 .assign()
let personCore = { name: "Jesús" };
let personDetails = { age: 21, alias: "@jdomingu19" };
let fullPerson = Object.assign(personCore, personDetails);

console.log(personCore); // { name: 'Jesús', age: 21, alias: '@jdomingu19' }
console.log(personDetails); // { age: 21, alias: '@jdomingu19' }
console.log(fullPerson); // { name: 'Jesús', age: 21, alias: '@jdomingu19' }

console.log(typeof personCore); // object
console.log(typeof personDetails); // object
console.log(typeof fullPerson); // object

// 4.2 .keys()
console.log(Object.keys(fullPerson)); // [ 'name', 'age', 'alias' ]

// 4.3 .values()
console.log(Object.values(fullPerson)); // [ 'Jesús', 21, '@jdomingu19' ]

// 4.4 .entries()
console.log(Object.entries(fullPerson)); // [ [ 'name', 'Jesús' ], [ 'age', 21 ], [ 'alias', '@jdomingu19' ] ]
