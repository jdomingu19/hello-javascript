// JavaScript Course from Scratch @mouredev
// Class 40 - Error Handling Exercises

// 1. Catch an exception using try-catch
let myObject;
try {
  console.log(0 / 0); // NaN
  console.log(myObject.property); // Cannot read properties of undefined (reading 'property')
} catch (error) {
  console.log("An error has occurred:", error.message); // An error has occurred: Cannot read properties of undefined (reading 'property')
}

// 2. Catch an exception using try-catch and finally
try {
  myFunction(); // myFunction is not defined
} catch (error) {
  console.log("An error has occurred:", error.message); // An error has occurred: myFunction is not defined
} finally {
  console.log("try-catch-finally is finished"); // try-catch-finally is finished
}

// 3. Throw a generic exception
try {
  throw new Error("A generic exception");
} catch (error) {
  console.log("An error has occurred:", error.message); // An error has occurred: A generic exception
}

// 4. Create a custom exception
class MyCustomException extends Error {
  constructor(message) {
    super(message);
  }
}

console.log(MyCustomException); // [class MyCustomException extends Error]
console.log(Error); // [Function: Error] { stackTraceLimit: 10 }

// 5. Throw a custom exception
try {
  throw new MyCustomException("A custom exception");
} catch (error) {
  console.log("An error has occurred:", error.message); // An error has occurred: A custom exception
}

// 6. Throws several exceptions according to defined logic
function showPositiveIntegerNumber(number) {
  if (typeof number !== "number") {
    throw new TypeError("number must be type number");
  }
  if (number <= 0) {
    throw new Error("number must greater than zero");
  }
  if (!Number.isInteger(number)) {
    throw new TypeError("number must be an integer");
  }
  return number;
}

try {
  console.log(showPositiveIntegerNumber(5)); // 5
  // console.log(showPositiveIntegerNumber("5")); // An error has occurred: number must be type number
  // console.log(showPositiveIntegerNumber(-5)); // An error has occurred: number must greater than zero
  // console.log(showPositiveIntegerNumber(0)); // An error has occurred: number must greater than zero
  // console.log(showPositiveIntegerNumber(5.7)); // An error has occurred: number must be an integer
} catch (error) {
  console.log("An error has occurred:", error.message); // An error has occurred: ...
}
// 7. Catch several exceptions in the same try-catch
try {
  // console.log(showPositiveIntegerNumber(5)); // 5
  console.log(showPositiveIntegerNumber("5")); // A type error has occurred: number must be type number
  console.log(showPositiveIntegerNumber(-5)); // An error has occurred: number must greater than zero
  console.log(showPositiveIntegerNumber(0)); // An error has occurred: number must greater than zero
  console.log(showPositiveIntegerNumber(5.7)); // A type error has occurred: number must be an integer
} catch (error) {
  if (error instanceof TypeError) {
    console.log("A type error has occurred:", error.message);
  } else if (error instanceof Error) {
    console.log("A error has occurred:", error.message);
  }
}

// 8. Create a loop that tries to transform each value to float and captures and displays errors
try {
  // let myValues = [1, "2", 3, "4"];
  // let myValues = ["1.0", "2.0", "3.0", "4.0"];
  let myValues = [1, "2", 3, "4", null, undefined, true];
  let transformedArray = [];
  for (let value of myValues) {
    if (typeof value !== "number" && typeof value !== "string") {
      throw new TypeError(`${value} is not transformable to number`);
    }
    if (typeof value === "number") {
      value += 0.0; // In JavaScript, all numbers are of type number (IEEE 754 64-bit)
    }
    if (typeof value === "string") {
      value = Number.parseInt(value);
      value += 0.0; // In JavaScript, all numbers are of type number (IEEE 754 64-bit)
    }
    transformedArray.push(value);
  }
  console.log(transformedArray);
  for (let transformedValue of transformedArray) {
    console.log(
      `${transformedValue.toFixed(1)} type: ${typeof transformedValue}`,
      // In JavaScript, all numbers are of type number (IEEE 754 64-bit)
      // In JavaScript, 1 and 1.0 are exactly the same value
    );
  }
} catch (error) {
  console.log("A error has occurred:", error.message);
}

try {
  // let myValues = [1, "2", 3, "4"];
  // let myValues = ["1.0", "2.0", "3.0", "4.0"];
  let myValues = [1, "2", 3, "4", null, undefined, true];
  let transformedArray = [];
  for (let value of myValues) {
    let floatValue = parseFloat(value);
    if (isNaN(floatValue)) {
      throw new TypeError(`${value} is not transformable to number`);
    }
    transformedArray.push(floatValue);
  }
  console.log(transformedArray);
  for (let transformedValue of transformedArray) {
    console.log(
      `${transformedValue.toFixed(1)} type: ${typeof transformedValue}`,
      // In JavaScript, all numbers are of type number (IEEE 754 64-bit)
      // In JavaScript, 1 and 1.0 are exactly the same value
    );
  }
} catch (error) {
  console.log("A error has occurred:", error.message);
}

// 9. Create a function that checks if an object has a specific property and throws a custom exception
let myObject2 = {
  name: "Jesús",
  alias: "@jdomingu19",
};

function hasThisProperty(object, property) {
  if (typeof object[property] === "undefined") {
    throw new MyCustomException2(`${object} has no '${property}' property`);
  }
  return `object.${property} = ${object[property]}`;
}

function hasThisProperty2(object, property) {
  if (!object.hasOwnProperty(property)) {
    throw new MyCustomException2(`${object} has no '${property}' property`);
  }
  return `object.${property} = ${object[property]}`;
}

class MyCustomException2 extends Error {
  constructor(message, object, property) {
    super(message);
    this.object = object;
    this.property = property;
  }

  printMessage() {
    console.log(`${this.object} has no '${this.property}' property`);
  }
}

try {
  console.log(hasThisProperty(myObject2, "name")); // object.name = Jesús
  console.log(hasThisProperty(myObject2, "alias")); // object.alias = @jdomingu19
  // console.log(hasThisProperty(myObject2, "age")); // A error has occurred: [object Object] has no 'age' property

  console.log(hasThisProperty2(myObject2, "name")); // object.name = Jesús
  console.log(hasThisProperty2(myObject2, "alias")); // object.alias = @jdomingu19
  // console.log(hasThisProperty2(myObject2, "age")); // A error has occurred: [object Object] has no 'age' property
} catch (error) {
  console.log("A error has occurred:", error.message);
}

// 10. Create a function that retries in case of error up to a maximum of 10
let catchCounter = 0;
function tryUpToTenTimes() {
  if (catchCounter > 10) {
    console.log("Function is completed");
    return;
  }
  try {
    console.log(someVariableUnknown);
  } catch (error) {
    console.log("A error has occurred:", error.message);
    console.log(`Let's try again... #${catchCounter}`);
    catchCounter += 1;
    tryUpToTenTimes();
  }
}
tryUpToTenTimes();

function randomOperation() {
  if (Math.random() > 0.9) {
    console.log("Random operation completed");
  } else {
    throw new Error("An unexpected error");
  }
}

function retryOperation() {
  const maxRetries = 10;
  let attempts = 0;
  let success = false;

  while (attempts < maxRetries && !success) {
    try {
      randomOperation();
      success = true;
    } catch (error) {
      attempts++;
      console.log(`Attempt #${attempts} has failed: ${error.message}`);
    }
  }
  if (!success) {
    console.log("Maximum number of attempts reached");
  }
}
retryOperation();
