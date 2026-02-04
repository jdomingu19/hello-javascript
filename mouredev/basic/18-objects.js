// JavaScript Course from Scratch @mouredev
// Class 33 - Objects

// 1. Syntax
let person = {
  name: "Jesús",
  age: 21,
  alias: "@jdomingu19",
};

console.log(person); // { name: 'Jesús', age: 21, alias: '@jdomingu19' }
console.log(typeof person); // object

// 2. Access to properties

// 2.1 Point notation
console.log(person.name); // Jesús
console.log(person.age); // 21
console.log(person.alias); // @jdomingu19

// 2.2 Bracket notation
console.log(person["name"]); // Jesús
console.log(person["age"]); // 21
console.log(person["alias"]); // @jdomingu19

// 3. Modify properties
person.name = "Jesús Domínguez";

console.log(person.name); // Jesús Domínguez
console.log(person["name"]); // Jesús Domínguez

console.log(typeof person.age); // number
person.age = "21";

console.log(person.age); // 21
console.log(person["age"]); // 21

console.log(typeof person.age); // string
console.log(typeof person["age"]); // string

// 4. Delete properties
delete person.age;

console.log(person); // { name: 'Jesús Domínguez', alias: '@jdomingu19' }

console.log(person.age); // undefined
console.log(person["age"]); // undefined

console.log(typeof person.age); // undefined
console.log(typeof person["age"]); // undefined

// 5. Add object methods (functions)
let person2 = {
  name: "Jesús",
  age: 21,
  alias: "@jdomingu19",
  study: function () {
    console.log(`${this.name} is studying`);
  },
};

console.log(person2); // { ... }
console.log(typeof person2); // object
person2.study(); // Jesús is studying

// 6. Nested objects
let person3 = {
  name: "Jesús",
  age: 21,
  alias: "@jdomingu19",
  study: function () {
    console.log(`${this.name} is studying`);
  },
  job: {
    rol: "React Native Developer",
    exp: 5,
    work: function () {
      console.log(`${person3.name} is building an app`);
    },
  },
};

console.log(person3); // { ... }
console.log(person3.name); // Jesús
console.log(person3.age); // 21
console.log(person3.alias); // @jdomingu19
console.log(person3.study); // [Function: study]

console.log(person3.job); // { rol: 'React Native Developer', exp: 5, work: [Function: work] }
console.log(typeof person3.job); // object

console.log(person3.job.rol); // React Native Developer
console.log(person3.job.exp); // 5
console.log(person3.job.work); // [Function: work]

person3.study(); // Jesús is studying
person3.job.work(); // Jesús is building an app

// 7. Equality of objects
let person4 = {
  name: "John",
  email: "some@email.com",
  age: 27,
};

console.log(person4); // { name: 'John', email: 'some@email.com', age: 27 }
console.log(typeof person4); // object

let person5 = {
  name: "John",
  email: "some@email.com",
  age: 27,
};

console.log(person5); // { name: 'John', email: 'some@email.com', age: 27 }
console.log(typeof person5); // object

console.log(person4 == person5); // false
console.log(person4 === person5); // false

console.log(person4.name == person5.name); // true
console.log(person4.email == person5.email); // true
console.log(person4.age == person5.age); // true

console.log(person4.name === person5.name); // true
console.log(person4.email === person5.email); // true
console.log(person4.age === person5.age); // true

// 8. Object iteration
for (let key in person) {
  console.log(key); // ...
}

for (let key in person) {
  console.log(person[key]); // ...
}

for (let key in person) {
  console.log(key + ": " + person[key]); // ...
}

for (let key in person) {
  console.log(`${key} : ${person[key]}`); // ...
}

// 9. Object as functions (use Class instead)
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person6 = new Person("Robin Sharma", 61);

console.log(person6); // Person { name: 'Robin Sharma', age: 61 }
console.log(typeof person6); // object
console.log(person6.name); // Robin Sharma
console.log(person6.age); // 61
