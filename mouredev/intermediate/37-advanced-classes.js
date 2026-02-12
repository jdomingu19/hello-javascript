// Intermediate JavaScript Course @mouredev
// Class 29 to 37 - Advanced Classes

// 1. Basic class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, this is ${this.name}!`;
  }
}

const person1 = new Person("Jesús", 21);

console.log(person1); // Person { name: 'Jesús', age: 21 }
console.log(typeof person1); // object

console.log(person1.name); // Jesús
console.log(person1.age); // 21
console.log(person1.greet); // [Function: greet]
console.log(person1.greet()); // Hello, this is Jesús!

person1.sayAge = function () {
  return `I'm ${person1.age} years old`;
};

console.log(person1); // Person { name: 'Jesús', age: 21, sayAge: [Function (anonymous)] }
console.log(person1.sayAge); // [Function (anonymous)]
console.log(person1.sayAge()); // I'm 21 years old

// 2. Class abstraction
class Animal {
  constructor(name) {
    if (new.target === Animal) {
      throw new Error("Can't instantiate an abstract class");
    }
    this.name = name;
  }

  makeSound() {
    throw new Error("This method has to be implemented by the subclass");
  }
}

// Error: Can't instantiate an abstract class
// const animal1 = new Animal("Owl");
// console.log(animal1);

// 3. Polymorphism
class Dog extends Animal {
  makeSound() {
    return "Woof!";
  }
}

class Cat extends Animal {
  makeSound() {
    return "Meow!";
  }
}

const dog1 = new Dog("Border Collie");

console.log(dog1); // Dog { name: 'Border Collie' }
console.log(typeof dog1); // object
console.log(dog1.__proto__.constructor); // [class Dog extends Animal]
console.log(dog1.__proto__.constructor.name); // Dog
console.log(dog1.makeSound); // [Function: makeSound]
console.log(dog1.makeSound()); // Woof!

const cat1 = new Cat("Turkish Van");

console.log(cat1); // Cat { name: 'Turkish Van' }
console.log(typeof cat1); // object
console.log(cat1.__proto__.constructor); // [class Cat extends Animal]
console.log(cat1.__proto__.constructor.name); // Cat
console.log(cat1.makeSound); // [Function: makeSound]
console.log(cat1.makeSound()); // Meow!

// 4. Mixins
const CanFlyMixin = {
  fly() {
    return `${this.name} is flying!`;
  },
};

class Bird extends Animal {}

class Dragon extends Animal {}

Object.assign(Bird.prototype, CanFlyMixin);
Object.assign(Dragon.prototype, CanFlyMixin);

const bird1 = new Bird("Snowy Owl");

console.log(bird1); // Bird { name: 'Snowy Owl' }
console.log(typeof bird1); // object
console.log(bird1.__proto__.constructor); // [class Bird extends Animal]
console.log(bird1.__proto__.constructor.name); // Bird
console.log(bird1.name); // Snowy Owl
console.log(bird1.fly); // [Function: fly]
console.log(bird1.fly()); // Snowy Owl is flying!

const dragon1 = new Dragon("Smaug");

console.log(dragon1); // Dragon { name: 'Smaug' }
console.log(typeof dragon1); // object
console.log(dragon1.__proto__.constructor); // [class Dragon extends Animal]
console.log(dragon1.__proto__.constructor.name); // Dragon
console.log(dragon1.name); // Smaug
console.log(dragon1.fly); // [Function: fly]
console.log(dragon1.fly()); // Smaug is flying!

// 5. Singleton pattern
class Session {
  constructor(name) {
    if (Session.instance) {
      return Session.instance;
    }
    this.name = name;
    Session.instance = this;
  }
}

const session1 = new Session("Jesús Domínguez");

console.log(session1); // Session { name: 'Jesús Domínguez' }
console.log(typeof session1); // object
console.log(session1.__proto__); // {}
console.log(session1.__proto__.constructor); // [class Session] { instance: Session { name: 'Jesús Domínguez' } }
console.log(session1.__proto__.constructor.name); // Session
console.log(session1.name); // Jesús Domínguez

const session2 = new Session();

console.log(session2); // Session { name: 'Jesús Domínguez' }
console.log(typeof session2); // object
console.log(session2.__proto__); // {}
console.log(session2.__proto__.constructor); // [class Session] { instance: Session { name: 'Jesús Domínguez' } }
console.log(session2.__proto__.constructor.name); // Session
console.log(session2.name); // Jesús Domínguez

console.log(session1 === session2); // true
console.log(session1.name === session2.name); // true

// 6. `Symbol`
const ID = Symbol("id");

class User {
  constructor(name) {
    this.name = name;
    this[ID] = Math.random();
  }

  getId() {
    return this[ID];
  }
}

const user1 = new User("Jesús");

console.log(user1); // User { name: 'Jesús', Symbol(id): e.g. 0.9983709895527928 }
console.log(typeof user1); // object
console.log(user1.__proto__); // {}
console.log(user1.__proto__.constructor); // [class User]
console.log(user1.__proto__.constructor.name); // User

console.log(user1.name); // Jesús
console.log(user1.ID); // undefined
console.log(user1.getId); // [Function: getId]
console.log(user1.getId()); // e.g. 0.9983709895527928

// 7. `instanceof` operator
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}

const car1 = new Car("McLaren", "720S");

console.log(car1); // Car { brand: 'McLaren', model: '720S' }
console.log(typeof car1); // object
console.log(car1.__proto__); // {}
console.log(car1.__proto__.constructor); // [class Car]
console.log(car1.__proto__.constructor.name); // Car
console.log(car1.brand); // McLaren
console.log(car1.model); // 720S

console.log(car1 instanceof Car); // true

// 8. `Object.create()`
const anotherCar = Object.create(Car.prototype);

console.log(anotherCar); // Car {}
console.log(typeof anotherCar); // object
console.log(anotherCar.__proto__); // {}
console.log(anotherCar.__proto__.constructor); // [class Car]
console.log(anotherCar.__proto__.constructor.name); // Car
console.log(anotherCar.brand); // undefined
console.log(anotherCar.model); // undefined

console.log(anotherCar instanceof Car); // true

// 9. Proxy
const proxy = {
  get(target, property) {
    console.log(`Property ${property} is accessed`);
    return target[property];
  },
  set(target, property, value) {
    if (property === "balance" && value < 0) {
      throw new Error("Balance cannot be negative");
    }
    target[property] = value;
  },
};

console.log(proxy); // { get: [Function: get], set: [Function: set] }
console.log(typeof proxy); // object
console.log(proxy.__proto__); // [Object: null prototype] {}
console.log(proxy.__proto__.constructor); // [Function: Object]
console.log(proxy.__proto__.constructor.name); // Object
console.log(proxy.get); // [Function: get]
console.log(proxy.set); // [Function: set]

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
}

const account1 = new Proxy(new BankAccount(100), proxy);

console.log(account1); // BankAccount { balance: 100 }
console.log(typeof account1); // object
console.log(account1.__proto__); // Property __proto__ is accessed + {}
console.log(account1.__proto__.constructor); // Property __proto__ is accessed + [class BankAccount]
console.log(account1.__proto__.constructor.name); // Property __proto__ is accessed + BankAccount
console.log(account1.balance); // Property balance is accessed + 100

account1.balance = 50;
console.log(account1.balance); // Property balance is accessed + 50

// Error: Balance cannot be negative
// account1.balance = -10;
// console.log(account1.balance); // ...
