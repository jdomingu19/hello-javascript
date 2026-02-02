// JavaScript Course from Scratch @mouredev
// Class 29 - Loops

// 1. for
for (let i = 0; i < 5; i++) {
  console.log(`Hello ${i}`); // ... 0 - 4
}

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(`Index ${i}: | Element: ${numbers[i]}`); // ... 0 - 4
}

// 2. while
let i = 0;
while (i < 5) {
  console.log(`Hello ${i}`); // ... 0 - 4
  i++;
}

i = 0;
while (i < numbers.length) {
  console.log(`Index ${i}: | Element: ${numbers[i]}`); // ... 0 - 4
  i++;
}

// 2.1 infinite loop
// while (true) {
//   console.log("Do something...");
// }

// 3. do while
i = 0;
do {
  console.log(`Hello ${i}`); // ... 0 - 4
  i++;
} while (i < 5);

i = 0;
do {
  console.log(`Index ${i}: | Element: ${numbers[i]}`); // ... 0 - 4
  i++;
} while (i < numbers.length);

// 4. for of
const myArray = [1, 2, 3, 4];
const mySet = new Set(["hello", true, 123, null]);
const myMap = new Map([
  ["name", "Jesús"],
  ["email", "some@email.com"],
  ["age", 21],
]);
const myString = "Hello, JavaScript!";

for (let value of myArray) {
  console.log(`myArray: ${value}`); // ...
}

for (let value of mySet) {
  console.log(`mySet: ${value}`); // ...
}

for (let value of myMap) {
  console.log(`myMap: ${value}`); // ...
}

for (let value of myString) {
  console.log(`myString: ${value}`); // ...
}

// 5. break & continue
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  } else if (i == 7) {
    break;
  }
  console.log(`Hello ${i}`); // ... 0 - 4, 6
}
