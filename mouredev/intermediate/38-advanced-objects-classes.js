// Intermediate JavaScript Course @mouredev
// Class 38 - Advanced Objects & Classes Exercises

// 1. Add a function to the prototype of an object
let favoriteOwl = {
  name: "Snowy Owl",
  color: "White",
};

console.log(favoriteOwl); // { name: 'Snowy Owl', color: 'White' }
console.log(typeof favoriteOwl); // object

console.log(favoriteOwl.name); // Snowy Owl
console.log(favoriteOwl.color); // White
console.log(favoriteOwl.makeSound); // undefined

favoriteOwl.makeSound = function () {
  return "Hoo-hoo!";
};

console.log(favoriteOwl.name); // Snowy Owl
console.log(favoriteOwl.color); // White
console.log(favoriteOwl.makeSound); // [Function (anonymous)]
console.log(favoriteOwl.makeSound()); // Hoo-hoo!

// 2. Create an object that inherits from another
let employer = {
  role: "abc",
  salary: "0.0 USD",
};

console.log(employer); // { role: 'abc', salary: '0.0 USD' }
console.log(typeof employer); // object

console.log(employer.role); // abc
console.log(employer.salary); // 0.0 USD
console.log(employer.language); // undefined
console.log(employer.library); // undefined

let developer1 = Object.create(employer);

console.log(employer); // { role: 'abc', salary: '0.0 USD' }
console.log(typeof employer); // object

console.log(employer.role); // abc
console.log(employer.salary); // 0.0 USD
console.log(employer.language); // undefined
console.log(employer.library); // undefined

developer1.role = "Full Stack Developer";
developer1.salary = "99999 USD";
developer1.language = "JavaScript";
developer1.library = "React Native";

console.log(developer1.role); // Full Stack Developer
console.log(developer1.salary); // 99999 USD
console.log(developer1.language); // JavaScript
console.log(developer1.library); // React Native

// 3. Define an instance method on an object
function Book(title, autor) {
  this.title = title;
  this.autor = autor;
}

console.log(Book); // [Function: Book]
console.log(typeof Book); // function

console.log(Book.prototype); // {}
console.log(typeof Book.prototype); // object

Book.prototype.showInfo = function () {
  return `${this.title} by ${this.autor}`;
};

let book1 = new Book("The Mock Who Sold His Ferrari", "Robin S. Sharma");

console.log(book1); // Book { title: ..., autor: ... }
console.log(typeof book1); // object

console.log(book1.showInfo); // [Function (anonymous)]
console.log(book1.showInfo()); // The Mock Who Sold His Ferrari by Robin S. Sharma

// 4. Make use of get and set on an object
let book2 = {
  title: "The Mock Who Sold His Ferrari",
  autor: "abc",
  pages: 213,
  getAuthor() {
    return this.autor;
  },
  setAuthor(autor) {
    this.autor = autor;
  },
};

console.log(book2.title); // The Mock Who Sold His Ferrari
console.log(book2.autor); // abc
console.log(book2.pages); // 213

console.log(book2.getAuthor); // [Function: getAuthor]
console.log(book2.setAuthor); // [Function: setAuthor]

console.log(book2.getAuthor()); // abc
book2.setAuthor("Robin S. Sharma");
console.log(book2.getAuthor()); // Robin S. Sharma

// 5. Use the assign operation on an object
let bookCore = {
  title: "The Mock Who Sold His Ferrari",
  autor: "Robin S. Sharma",
};
let bookDetails = {
  pages: 213,
  editorial: "Debolsillo",
};

console.log(bookCore); // { title: 'The Mock Who Sold His Ferrari', autor: 'Robin S. Sharma' }
console.log(bookDetails); // { pages: 213, editorial: 'Debolsillo' }

let fullBookInfo = Object.assign(bookCore, bookDetails);

console.log(bookCore); // { title: ..., autor: ..., pages: ..., editorial: ... }
console.log(bookDetails); // { pages: 213, editorial: 'Debolsillo' }
console.log(fullBookInfo); // { title: ..., autor: ..., pages: ..., editorial: ... }

// 6. Create an abstract class
class Instrument {
  constructor(model) {
    if (new.target === Instrument) {
      throw new Error("Can't instantiate an abstract class");
    }
    this.model = model;
  }

  playMelody() {
    throw new Error("This method has to be implemented by the subclass");
  }
}

// Error: Can't instantiate an abstract class
// const instrument1 = new Instrument("Piano");
// console.log(instrument1);

// 7. Use polymorphism in two different classes
class Piano extends Instrument {
  playMelody() {
    return `Playing a piano melody on ${this.model}`;
  }
}

class Guitar extends Instrument {
  playMelody() {
    return `Playing a guitar melody on ${this.model}`;
  }
}

let piano1 = new Piano("Yamaha JU109");
console.log(piano1.model); // Yamaha JU109
console.log(piano1.playMelody); // [Function: playMelody]
console.log(piano1.playMelody()); // Playing a piano melody on a Yamaha JU109

let guitar1 = new Piano("Ortega R220");
console.log(guitar1.model); // Ortega R220
console.log(guitar1.playMelody); // [Function: playMelody]
console.log(guitar1.playMelody()); // Playing a piano melody on Ortega R220

// 8. Implement a Mixin
const PianoKeys = {
  getKeys() {
    return this.keys;
  },
  setKeys(keys) {
    this.keys = keys;
  },
  showKeys() {
    return `${this.model} has ${this.getKeys()} keys`;
  },
};

Object.assign(Piano.prototype, PianoKeys);

const piano2 = new Piano("Yamaha P-45");

console.log(piano2); // Piano { model: 'Yamaha P-45' }
console.log(piano2.model); // Yamaha P-45
console.log(piano2.playMelody); // [Function: playMelody]
console.log(piano2.playMelody()); // Playing a piano melody on Yamaha P-45

console.log(piano2.keys); // undefined
console.log(piano2.setKeys); // [Function: setKeys]
console.log(piano2.getKeys); // [Function: getKeys]
console.log(piano2.getKeys()); // undefined

console.log(piano2.setKeys(88)); // [Function: setKeys]
console.log(piano2.keys); // 88
console.log(piano2.getKeys()); // 88

console.log(piano2.showKeys); // [Function: showKeys]
console.log(piano2.showKeys()); // Yamaha P-45 has 88 keys

// 9. Create a Singleton
class UniquePassword {
  constructor(password) {
    if (UniquePassword.instance) {
      return UniquePassword.instance;
    }
    this.password = password;
    UniquePassword.instance = this;
  }
}

const password1 = new UniquePassword("abc123");

console.log(password1); // UniquePassword { password: 'abc123' }
console.log(typeof password1); // object
console.log(password1.__proto__); // {}
console.log(password1.__proto__.constructor); // [class UniquePassword] { instance: UniquePassword { password: 'abc123' } }
console.log(password1.__proto__.constructor.name); // UniquePassword
console.log(password1.password); // abc123

const password2 = new UniquePassword("def456");

console.log(password2); // UniquePassword { password: 'abc123' }
console.log(typeof password2); // object
console.log(password2.__proto__); // {}
console.log(password2.__proto__.constructor); // [class UniquePassword] { instance: UniquePassword { password: 'abc123' } }
console.log(password2.__proto__.constructor.name); // undefined
console.log(password2.password); // abc123

console.log(password1 === password2); // true
console.log(password1.password === password2.password); // true

// 10. Develop a Proxy
const passwordProxy = {
  get(target, property) {
    console.log(`Property ${property} is accessed`);
    return target[property];
  },
  set(target, property, value) {
    if (property === "password" && value.trim() == "") {
      throw new Error("Password cannot be an empty string");
    }
    target[property] = value;
  },
};

console.log(passwordProxy); // { get: [Function: get], set: [Function: set] }
console.log(typeof passwordProxy); // object
console.log(passwordProxy.__proto__); // [Object: null prototype] {}
console.log(passwordProxy.__proto__.constructor); // [Function: Object]
console.log(passwordProxy.__proto__.constructor.name); // Object
console.log(passwordProxy.get); // [Function: get]
console.log(passwordProxy.set); // [Function: set]

class UserInfo {
  constructor(password) {
    this.password = password;
  }
}

const userInfo1 = new Proxy(new UserInfo("abc123"), passwordProxy);

console.log(userInfo1); // UserInfo { password: 'abc123' }
console.log(typeof userInfo1); // object
console.log(userInfo1.__proto__); // Property __proto__ is accessed + {}
console.log(userInfo1.__proto__.constructor); // Property __proto__ is accessed + [class UserInfo]
console.log(userInfo1.__proto__.constructor.name); // Property __proto__ is accessed + UserInfo
console.log(userInfo1.password); // Property balance is accessed + abc123

userInfo1.password = "def456";
console.log(userInfo1.password); // Property balance is accessed + def456

// Error: Password cannot be an empty string
// userInfo1.password = "";
// userInfo1.password = " ";
// userInfo1.password = "  ";
// console.log(userInfo1.password); // ...
