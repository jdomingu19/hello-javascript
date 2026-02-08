// JavaScript Course from Scratch @mouredev
// Class 44 - Export Modules

// 1. Export functions
export function add(a, b) {
  return a + b;
}

console.log(add(5, 6)); // 11

// 2. Export variables
export const LANGUAGE = "JavaScript";
export const PI = 3.1416;
export const EULER = 2.7183;

export let name = "Jesús";
export let age = 21;
export let isDeveloper = true;

// 3. Export classes
export class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// 4. Export default
export default class MyClass {
  doSomething() {
    console.log("Hello, JavaScript!");
  }
}

// SyntaxError: Duplicate export of 'default'
// export default function subtract(a, b) {
//   return a - b;
// }
