// JavaScript Course from Scratch @mouredev
// Class 37 - Classes

// 1. Create a class
class Person {
  constructor(name, age, alias) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

// 2. Create objects (class instances)
let person1 = new Person("Jesús", 21, "@jdomingu19");
let person2 = new Person("Jesús", 21, "@jdomingu19");

console.log(person1); // Person { name: 'Jesús', age: 21, alias: '@jdomingu19' }
console.log(person2); // Person { name: 'Jesús', age: 21, alias: '@jdomingu19' }

console.log(typeof person1); // object
console.log(typeof person2); // object

// 3. Compare objects (class instances)
console.log(person1 == person2); // false
console.log(person1.name == person2.name); // true
console.log(person1.age == person2.age); // true
console.log(person1.alias == person2.alias); // true

console.log(person1 === person2); // false
console.log(person1.name === person2.name); // true
console.log(person1.age === person2.age); // true
console.log(person1.alias === person2.alias); // true

// 4. Default values
class DefaultPerson {
  constructor(name = "unknown", age = 0, alias = "unknown") {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

let person3 = new DefaultPerson("John", 27);
console.log(person3); // DefaultPerson { name: 'John', age: 27, alias: 'unknown' }
console.log(person3.name); // John
console.log(person3.age); // 27
console.log(person3.alias); // unknown

// 5. Access to objects properties
console.log(person3.name); // John
console.log(person3.age); // 27
console.log(person3.alias); // unknown

console.log(person3["name"]); // John
console.log(person3["age"]); // 27
console.log(person3["alias"]); // unknown

person3.alias = "@johndoe";
console.log(person3.alias); // @johndoe
console.log(person3["alias"]); // @johndoe

// 6. Class methods
class PersonWithMethods {
  constructor(name = "unknown", age = 0, alias = "unknown") {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }

  study() {
    console.log(`${this.name} is studying`);
  }
}

let person4 = new PersonWithMethods("Jesús", 21, "@jdomingu19");
console.log(person4); // PersonWithMethods { name: 'Jesús', age: 21, alias: '@jdomingu19' }
person4.study(); // Jesús is studying

// 7. Private properties
class PrivatePerson {
  #bank;

  constructor(name = "unknown", age = 0, alias = "unknown", bank) {
    this.name = name;
    this.age = age;
    this.alias = alias;
    this.#bank = bank;
  }

  pay() {
    this.#bank;
  }
}

let person6 = new PrivatePerson("Jesús", 21, "@jdomingu19", "abc12345");
console.log(person6); // PrivatePerson { name: 'Jesús', age: 21, alias: '@jdomingu19' }

console.log(person6.bank); // undefined
// console.log(person6.#bank); // Is not accessible outside its class

// person6.bank = "abc12345"; // .bank != .#bank
// console.log(person6.bank); // abc12345

// 8. Getters & Setters
class GetSetPerson {
  #name;
  #age;
  #alias;
  #bank;

  constructor(name = "unknown", age = 0, alias = "unknown", bank = "secret") {
    this.#name = name;
    this.#age = age;
    this.#alias = alias;
    this.#bank = bank;
  }

  get name() {
    return this.#name;
  }

  set bank(bank) {
    this.#bank = bank;
  }
}

let person7 = new GetSetPerson("Jesús", 21, "@jdomingu19", "abc12345");

console.log(person7); // GetSetPerson {}
console.log(person7.name); // Jesús
console.log(person7.age); // undefined
console.log(person7.alias); // undefined
console.log(person7.bank); // undefined

person7.bank = "def6789";
console.log(person7.bank); // undefined

// 9. Class inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log("Animal is making a sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Dog says woof!");
  }

  run() {
    console.log("Dog is running!");
  }
}

class Fish extends Animal {
  constructor(name, size) {
    super(name);
    this.size = size;
  }

  swim() {
    console.log("Fish is swimming!");
  }
}

let animal = new Animal("generic animal");
console.log(animal.name); // generic animal
console.log(animal.sound); // [Function: sound]
animal.sound(); // Animal is making a sound

let myDog = new Dog("Collie");
console.log(myDog.name); // Collie
console.log(myDog.run); // [Function: run]
console.log(myDog.sound); // [Function: sound]
myDog.run(); // Dog is running!
myDog.sound(); // Dog says woof!

let myFish = new Fish("Coral", 7);
console.log(myFish.name); // Coral
console.log(myFish.size); // [7
console.log(myFish.sound); // [Function: sound]
console.log(myFish.swim); // [Function: swim]
myFish.sound(); // Animal is making a sound
myFish.swim(); // Fish is swimming!

// 10. Static methods
class MathOperations {
  static sum(a, b) {
    return a + b;
  }

  static sub(a, b) {
    return a - b;
  }

  static mult(a, b) {
    return a * b;
  }
}

console.log(MathOperations.sum(5, 10)); // 15
console.log(MathOperations.sub(5, 10)); // -5
console.log(MathOperations.mult(5, 10)); // 50
