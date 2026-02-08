// Hello, JavaScript!
// Playground: Get Class Properties
class MyClass {
  static foo() {} // static method
  static bar() {} // static method
  baz() {} // instance method
}

// 1. Get all class properties
console.log(Object.getOwnPropertySymbols(MyClass)); // []
console.log(Object.getOwnPropertyNames(MyClass)); // [ 'length', 'name', 'prototype', 'foo', 'bar' ]
console.log(Object.getOwnPropertyDescriptor(MyClass)); // undefined
console.log(Object.getOwnPropertyDescriptors(MyClass)); // { ... }

// 2. Filter only static methods (function)
const staticMethods = Object.getOwnPropertyNames(MyClass).filter(
  (property) => typeof MyClass[property] === "function",
);
console.log(staticMethods); // [ 'foo', 'bar' ]

// 3. Filter only instance methods (constructor)
const instanceMethods = Object.getOwnPropertyNames(MyClass.prototype).filter(
  (property) => property !== "constructor",
);
console.log(instanceMethods); // [ 'baz' ]
