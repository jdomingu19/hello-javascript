// Intermediate JavaScript Course @mouredev
// Class 72 to 73 - Debugging

// 1. Basic debugging with `console.log();`
function sum(a, b) {
  console.log("a:", a); // a: 5
  console.log("typeof a:", typeof a); // typeof a: number
  console.log("b:", b); // b: 6
  console.log("typeof b:", typeof b); // typeof b: string
  return a + b; // 56
}

console.log(sum(5, "6")); // 56

// 2. Professional debugging with Visual Studio Code
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero...");
  }
  return a / b;
}

// Error: Cannot divide by zero...
// console.log(divide(5, 0)); // ...

console.log(divide(5, 2)); // 2.5

try {
  console.log(divide(5, 0)); // ...
} catch (error) {
  console.log(error); // Error: Cannot divide by zero...
}

// 2.1 Create launch.json file
// - folder: .vscode
// - type: node.js
// 2.2 Use breakpoints
//  - Caught Exceptions
// 2.3 Navigate the Call Stack
//  - Continue
//  - Step Over
//  - Step Into
//  - Step Out
//  - Restart
//  - Stop
