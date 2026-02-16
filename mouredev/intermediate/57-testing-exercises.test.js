// Intermediate JavaScript Course @mouredev
// Class 82 - Testing Exercises (Using Jest)

// 1. Create a function isEven(number) that returns true if the number is even and false if it is odd
const isEven = require("./56-testing-exercises.js");

// 2. Write a test in Jest to verify that the function works correctly
test("26 is an even number", () => {
  expect(isEven(26)).toBe(true); // passed
});

test("'26' is an even number", () => {
  expect(isEven("26")).toBe(true); // failed
});

test("27 is an odd number", () => {
  expect(isEven(27)).toBe(false); // passed
});

test("'27' is an odd number", () => {
  expect(isEven("27")).toBe(false); // passed
});

// 3. Verify that the test runs successfully
// * npm init -y
// * npm install --save-dev jest
// * npm test
