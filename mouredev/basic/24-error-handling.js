// JavaScript Course from Scratch @mouredev
// Class 40 - Error Handling

// 1. Exception
let myObject;
console.log(myObject); // undefined
// console.log(myObject.email); // TypeError: Cannot read properties of undefined (reading 'email')

// 2. Catch errors

// 2.1 Basic try-catch
try {
  console.log(myObject.email);
  console.log("No error has occurred!");
} catch {
  console.log("An error has occurred..."); // this line is executed
}

// 2.2 Catch an error
try {
  console.log(myObject.email);
  console.log("No error has occurred!");
} catch (error) {
  console.log("An error has occurred:"); // this line is executed
  console.log(error.message); // Cannot read properties of undefined (reading 'email')
}

// 2.3 finally
try {
  console.log(myObject.email);
  console.log("No error has occurred!");
} catch (error) {
  console.log("An error has occurred:"); // this line is executed
  console.log(error.message); // Cannot read properties of undefined (reading 'email')
} finally {
  console.log("This line is always executed.");
}

// this is not allowed:
// try {
//   console.log(myObject.email);
//   console.log("No error has occurred!");
// } finally {
//   console.log("This line is always executed.");
// }

// 3. Throw exceptions

// 3.1 throw
// throw new Error("My error message...");

// 3.2 catch error when calling functions
function sumIntegers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log(a, b);
    throw new TypeError("This operation only allows numbers...");
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    console.log(a, b);
    throw new Error("This operation only allows integers numbers...");
  }
  if (a == 0 || b == 0) {
    console.log(a, b);
    throw new SumZeroIntegerError("You're trying to add zero...", a, b);
  }
  return a + b;
}

try {
  console.log(sumIntegers(5, 10)); // 15
  // console.log(sumIntegers("5", 10)); // An error has occurred: This operation only allows numbers...
  // console.log(sumIntegers(5, "10")); // An error has occurred: This operation only allows numbers...
  // console.log(sumIntegers("5", "10")); // An error has occurred: This operation only allows numbers...
  // console.log(sumIntegers(5.7, 10.2)); // An error has occurred: This operation only allows integers numbers...
  // console.log(sumIntegers(5, 0)); // An error has occurred: You're trying to add zero...
  // console.log(sumIntegers(0, 10)); // An error has occurred: You're trying to add zero...
  // console.log(sumIntegers(0, 0)); // An error has occurred: You're trying to add zero...
} catch (error) {
  console.log("An error has occurred:", error.message);
} finally {
  console.log("Sum Operation is finished.");
}

// 3.3 Catch different types of errors
try {
  console.log(sumIntegers(5.7, 10.2)); // A error has occurred: This operation only allows
  // console.log(sumIntegers("5", "10")); // A type error has occurred: This operation only allows numbers...
} catch (error) {
  if (error instanceof TypeError) {
    console.log("A type error has occurred:", error.message);
  } else if (error instanceof Error) {
    console.log("A error has occurred:", error.message);
  }
}

// 3.4 Create custom exceptions
class SumZeroIntegerError extends Error {
  constructor(message, a, b) {
    super(message);
    this.a = a;
    this.b = b;
  }

  printNumbers() {
    // console.log(this.a, "+", this.b);
    console.log(`${this.a} + ${this.b}`);
  }
}

try {
  console.log(sumIntegers(0, 10)); // A custom error has occurred: You're trying to add zero...
} catch (error) {
  console.log("A custom error has occurred:", error.message);
  error.printNumbers(); // 0 + 10
}
