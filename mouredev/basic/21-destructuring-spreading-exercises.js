// JavaScript Course from Scratch @mouredev
// Class 36 - Destructuring & Spreading Exercises

// 1. Use destructuring to extract the first two elements of an array
let myArray = ["a", "b", "c"];

let [value0, value1] = myArray;

console.log(value0); // a
console.log(value1); // b

// 2. Use destructuring on an array and assign a default value to a variable
let [value2 = "char", value3 = "char", value4 = "char", value5 = "char"] =
  myArray;

console.log(value2); // a
console.log(value3); // b
console.log(value4); // c
console.log(value5); // char

// 3. Use destructuring to extract two properties of an object
let myObject = {
  language: "JavaScript",
  environment: "Node.js",
  library: "React Native",
};

let { language, library } = myObject;

console.log(language); // JavaScript
console.log(library); // React Native

// 4. Use destructuring to extract two properties from an object
// and assign them to new variables with different names
let { language: key1, library: key2 } = myObject;

console.log(key1); // JavaScript
console.log(key2); // React Native

// 5. Use destructuring to extract two properties from a nested object
let fullStackDeveloper = {
  exp: 5,
  frontend: {
    language: "JavaScript",
    markup: "HTML",
    style: "CSS",
    library: "React Native",
  },
  backend: {
    environment: "Node.js",
    database: "PostgreSQL",
    api: "REST Full API",
  },
};

let {
  frontend: { library: library2 },
  backend: { api, database },
} = fullStackDeveloper;

console.log(library2); // React Native
console.log(api); // REST Full API
console.log(database); // PostgreSQL

// 6. Use propagation to combine two arrays into a new one
let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];
let myArray3 = [...myArray1, ...myArray2];

console.log(myArray1); // [ 1, 2, 3 ]
console.log(myArray2); // [ 4, 5, 6 ]
console.log(myArray3); // [ 1, 2, 3, 4, 5, 6 ]

// 7. Use propagation to create a copy of an array
let myArray4 = [...myArray3];

console.log(myArray3); // [ 1, 2, 3, 4, 5, 6 ]
console.log(myArray4); // [ 1, 2, 3, 4, 5, 6 ]

// 8. Use propagation to combine two objects into a new one
let myObject1 = {
  name: "Jesús",
  age: 21,
};

let myObject2 = {
  email: "some@email.com",
  alias: "@jdomingu19",
};

let myObject3 = { ...myObject1, ...myObject2 };

console.log(myObject1); // { name: 'Jesús', age: 21 }
console.log(myObject2); // { email: 'some@email.com', alias: '@jdomingu19' }
console.log(myObject3); // { name: 'Jesús', age: 21, email: 'some@email.com', alias: '@jdomingu19' }

// 9. Use propagation to create a copy of an object
let myObject4 = { ...myObject1 };

console.log(myObject1); // { name: 'Jesús', age: 21 }
console.log(myObject4); // { name: 'Jesús', age: 21 }

// 10. Combine destructuring and propagation
let numbers = [1, 2, 3, 4, 5, 6];
let [num1, num2, ...rest] = numbers;

console.log(num1); // 1
console.log(num2); // 2
console.log(rest); // [ 3, 4, 5, 6 ]

let skills = {
  language: "JavaScript",
  library: "React Native",
  environment: "Node.js",
  database: "PostgreSQL",
  design: "Figma",
  deploy: "Vercel",
};

let { language: language2, library: library3, ...rest2 } = skills;

console.log(language2); // JavaScript
console.log(library3); // React Native
console.log(rest2); // { environment: 'Node.js', ..., deploy: 'Vercel' }
