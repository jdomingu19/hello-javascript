// Intermediate JavaScript Course @mouredev
// Class 82 - Testing Exercises

// 1. Create a function isEven(number) that returns true if the number is even and false if it is odd
function isEven(number) {
  if (typeof number === "number" && number % 2 == 0) {
    return true;
  }
  return false;
}

module.exports = isEven;

console.log(isEven); // [Function: isEven]
console.log(typeof isEven); // function

// 2. Write a test in Jest to verify that the function works correctly
// * Go to './57-testing-exercises.test.js'

// 3. Verify that the test runs successfully
// * Go to './57-testing-exercises.test.js'
