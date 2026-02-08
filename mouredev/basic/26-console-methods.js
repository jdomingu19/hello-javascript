// JavaScript Course from Scratch @mouredev
// Class 42 - Console Methods

// 1. .log()
console.log("Hello, JavaScript!"); // Hello, JavaScript!

// 2. .error()
console.error("This is an error message"); // ...
console.error("Unable to connect to database:", new Error("Connection failed")); // ...

// 3. .warn()
console.warn("This is a warning message"); // ...

// 4. .info()
console.info("This is an info message"); // ...

// 5. .table()
let myData = [
  ["Jesús", 21],
  ["John", 27],
  ["Mery", 26],
];

console.table(myData); // displays tabular data as a table

myData = [
  { name: "Jesús", age: 21, alias: "@jdomingu19" },
  { name: "John", age: 27, alias: "@john" },
  { name: "Mery", age: 26, alias: "@mery" },
];

console.table(myData); // displays tabular data as a table

// 6. .group()
console.group("User:"); // ...
console.log("Name: Jesús"); // ...
console.log("Age: 21"); // ...
console.groupEnd(); // ...s

// 7. .time()
console.time("Execution time 2"); // ...
for (let i = 0; i < 10000; i++) {}

console.time("Execution time 1"); // ...
for (let i = 0; i < 10000; i++) {}

console.timeEnd("Execution time 2"); // ...
for (let i = 0; i < 10000; i++) {}

console.timeEnd("Execution time 1"); // ...
for (let i = 0; i < 10000; i++) {}

// 8. .assert()
let age = 17;
console.assert(age >= 18, "User must be an adult"); // Assertion failed: User must be an adult

// 9. .count()
console.count("Click"); // Click: 1
console.count("Click"); // Click: 2
console.count("Click"); // Click: 3
console.countReset("Click"); // ...
console.count("Click"); // Click: 1

// 10. .trace()
function funcA() {
  funcB();
}

function funcB() {
  console.trace("A stack trace in funcB");
}

funcA();

// 10. .clear()
console.clear(); // ...
