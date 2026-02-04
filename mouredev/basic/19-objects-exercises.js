// JavaScript Course from Scratch @mouredev
// Class 34 - Objects Exercises

// 1. Create an object with 3 properties
let book = {
  title: "The Mock Who Sold His Ferrari",
  autor: "Robin S. Sharma",
  pages: 200,
};

console.log(book); // { ... }
console.log(typeof book); // object

// 2. Access and show its value
console.log(book.title, typeof book.title); // The Mock Who Sold His Ferrari string
console.log(book.autor, typeof book.autor); // Robin S. Sharma string
console.log(book.pages, typeof book.pages); // 200 number

// 3. Add a new property
book.editorial = "Debolsillo";
console.log(book); // { ... }
console.log(book.editorial, typeof book.editorial); // Debolsillo string

// 4. Delete one of the first 3 properties
delete book.pages;
console.log(book); // { ... }
console.log(book.pages, typeof book.pages); // undefined undefined

// 5. Add a function and call it
book.teach = function teach() {
  console.log(`${this.title} is teaching you`);
};

console.log(book); // { ... }
console.log(book.teach, typeof book.teach); // [Function: teach] function
book.teach(); // The Mock Who Sold His Ferrari is teaching you

// 6. Iterate the properties of the object
for (let key in book) {
  console.log(`${key} : ${book[key]}`); // ...
}

for (let key of Object.keys(book)) {
  console.log(key); // ...
}

for (let value of Object.values(book)) {
  console.log(value); // ...
}

for (let [key, value] of Object.entries(book)) {
  console.log(`${key} : ${value}`); // ...
}

// 7. Create a nested object
let laptop = {
  name: "MacBook Air Pro",
  brand: "Apple",
  price: "799 USD",
  specs: {
    cpu: "M4",
    ram: "16 GB",
    storage: "SSD",
  },
};

console.log(laptop); // { ... }
console.log(typeof laptop); // object

// 8. Access and display the value of nested properties
for (let key in laptop.specs) {
  console.log(`${key} : ${laptop.specs[key]}`); // ...
}

for (let [key, value] of Object.entries(laptop.specs)) {
  console.log(`${key} : ${value}`); // ...
}

// 9. Check if two created objects are the same
let person1 = {
  name: "Jesús",
  age: 21,
  location: "Spain",
};

let person2 = {
  name: "Jesús",
  age: 21,
  location: "Spain",
};

console.log(person1 == person2); // false
console.log(person1 === person2); // false

console.log(person1 != person2); // true
console.log(person1 !== person2); // true

function areEqualObjects(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length != keys2.length) {
    return false;
  }

  for (let key in keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}

console.log(areEqualObjects(person1, person2)); // true

// 10. Check if two different properties are equal
let isSameAgeAndPages = person2.age === book.pages;
console.log(isSameAgeAndPages); // false
