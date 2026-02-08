// JavaScript Course from Scratch @mouredev
// Class 44 - Import Modules

// 1. Import from 28-export-modules.js
import { add, Circle } from "./28-export-modules.js";
import { LANGUAGE, EULER, PI } from "./28-export-modules.js";
import { name, age, isDeveloper } from "./28-export-modules.js";

import defaultImport from "./28-export-modules.js";

// 2. Use imported functions
console.log(add(5, 6)); // 11

// 3. Use imported properties
console.log(LANGUAGE); // JavaScript
console.log(EULER); // 2.7183
console.log(PI); // 3.1416

console.log(name); // Jesús
console.log(age); // 21
console.log(isDeveloper); // true

// 4. Use imported classes
let circle = new Circle(7);
console.log(circle.radius); // 7
console.log(circle.getArea().toFixed(2)); // 153.94
console.log(circle.getPerimeter().toFixed(2)); // 43.98

// 5. Use default export
let myClass = new defaultImport();
myClass.doSomething(); // Hello, JavaScript!

// console.log(defaultImport(5, 6)); // -1
