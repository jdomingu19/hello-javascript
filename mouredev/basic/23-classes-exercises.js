// JavaScript Course from Scratch @mouredev
// Class 39 - Classes Exercises

// 1. Create a class that receives two properties
class Books {
  constructor(title, autor) {
    this.title = title;
    this.autor = autor;
  }
}

let myBook1 = new Books("The Monk Who Sold His Ferrari", "Robin S. Sharma");
console.log(myBook1); // Books { title: ..., autor: ... }
console.log(myBook1.title); // The Monk Who Sold His Ferrari
console.log(myBook1.autor); // Robin S. Sharma
console.log(typeof myBook1); // object

// 2. Add a method to the class that uses the properties
class Books2 {
  constructor(title, autor) {
    this.title = title;
    this.autor = autor;
  }

  showInfo() {
    return `${this.title} by ${this.autor}`;
  }
}

let myBook2 = new Books2("The Monk Who Sold His Ferrari", "Robin S. Sharma");
console.log(myBook2); // Books2 { title: ..., autor: ... }
console.log(myBook2.showInfo); // [Function: showInfo]
console.log(typeof myBook2); // object

// 3. Show the values of the properties and call the function
console.log(myBook2.title); // The Monk Who Sold His Ferrari
console.log(myBook2.autor); // Robin S. Sharma
console.log(myBook2.showInfo); // [Function: showInfo]
console.log(myBook2.showInfo()); // The Monk Who Sold His Ferrari by Robin S. Sharma

// 4. Add a static method to the first class
class Books3 {
  constructor(title, autor) {
    this.title = title;
    this.autor = autor;
  }

  static whisperWisdom() {
    return `Let a book guide you daily`;
  }
}

let myBook3 = new Books3("The Little Prince", "Antoine de Saint-Exupéry");
console.log(myBook3); // Books3 { title: ..., autor: ... }
console.log(myBook3.title); // The Little Prince
console.log(myBook3.autor); // Antoine de Saint-Exupéry
console.log(typeof myBook3); // object

// 5. Make use of the static method
console.log(Books3.whisperWisdom); // [Function: whisperWisdom]
console.log(Books3.whisperWisdom()); // Let a book guide you daily

// 6. Create a class that uses inheritance
class Developer {
  constructor(role, salary) {
    this.role = role;
    this.salary = salary;
  }
}

class ReactNativeDeveloper extends Developer {
  constructor(role, salary, language, library) {
    super(role, salary);
    this.language = language;
    this.library = library;
  }
}

let developer1 = new ReactNativeDeveloper(
  "React Native Developer",
  "5000 USD",
  "TypeScript",
  "React Native",
);

console.log(developer1); //  ReactNativeDeveloper { ... }
console.log(developer1.role); // React Native Developer
console.log(developer1.salary); // 5000 USD
console.log(developer1.language); // TypeScript
console.log(developer1.library); // React Native
console.log(typeof developer1); // object

// 7. Create a class that makes use of getters and setters
class Person {
  #alias;

  constructor(name, alias = "unknown") {
    this.name = name;
    this.#alias = alias;
  }

  get alias() {
    return this.#alias;
  }

  set alias(alias) {
    this.#alias = alias;
  }
}

let person1 = new Person("Jesús");

console.log(person1); // Person { name: 'Jesús' }
console.log(person1.name); // Jesús
console.log(person1.alias); // unknown
console.log(typeof person1); // object

person1.alias = "@jdomingu19";
console.log(person1); // Person { name: 'Jesús' }
console.log(person1.name); // Jesús
console.log(person1.alias); // @jdomingu19
console.log(typeof person1); // object

// 8. Modify the class with getters and setters so that it uses private properties
class Person2 {
  #name;
  #alias;

  constructor(name = "unknown", alias = "unknown") {
    this.#name = name;
    this.#alias = alias;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get alias() {
    return this.#alias;
  }

  set alias(alias) {
    this.#alias = alias;
  }
}

let person2 = new Person2();

console.log(person2); // Person2 {}
console.log(typeof person2); // object

// 9. Use get and set and show their values
console.log(person2); // Person2 {}
console.log(person2.name); // unknown
console.log(person2.alias); // unknown

person2.name = "Jesús";
person2.alias = "@jdomingu19";

console.log(person2); // Person2 {}
console.log(person2.name); // Jesús
console.log(person2.alias); // @jdomingu19

// 10. Override a method of a class that uses inheritance
class ClassA {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  doSomething() {
    return "ClassA does something";
  }
}

class ClassB extends ClassA {
  constructor(a, b, c) {
    super(a, b);
    this.c = c;
  }

  doSomething() {
    return "ClassB does something";
  }
}

let classA = new ClassA(1, 2);
let classB = new ClassB(1, 2, 3);

console.log(classA); // ClassA { a: 1, b: 2 }
console.log(classA.doSomething); // [Function: doSomething]
console.log(classA.doSomething()); // ClassA does something
console.log(typeof classA); // object

console.log(classB); // ClassB { a: 1, b: 2, c: 3 }
console.log(classB.doSomething); // [Function: doSomething]
console.log(classB.doSomething()); // ClassB does something
console.log(typeof classB); // object
