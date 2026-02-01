// JavaScript Course from Scratch @mouredev
// Class 20 - Operators Exercises

// 1. Create a variable for each arithmetic operation
let a = 5;
let b = 10;

let myAddition = a + b;
let mySubtraction = a - b;
let myMultiplication = a * b;
let myDivision = a / b;
let myModulus = a % b;
let myExponentiation = a ** b;
let myIncrement = ++a;
let myDecrement = --a;

console.log(myAddition); // 15
console.log(mySubtraction); // -5
console.log(myMultiplication); // 50
console.log(myDivision); // 0.5
console.log(myModulus); // 5
console.log(myExponentiation); // 9765625
console.log(myIncrement); // 6
console.log(myDecrement); // 5

// 2. Create a variable for each type of assignment operation,
// which makes use of the variables used for arithmetic operations
let myAdditionAssignment = 1;
let mySubtractionAssignment = 1;
let myMultiplicationAssignment = 1;
let myDivisionAssignment = 1;
let myModulusAssignment = 1;
let myExponentiationAssignment = 1;

myAdditionAssignment += myAddition; // 1 + 15
mySubtractionAssignment -= mySubtraction; // 1 - (-5)
myMultiplicationAssignment *= myMultiplication; // 1 * 50
myDivisionAssignment /= myDivision; // 1 / 0.5
myModulusAssignment %= myModulus; // 1 % 5
myExponentiationAssignment **= myExponentiation; // 1 ** 9765625

console.log(myAdditionAssignment); // 16
console.log(mySubtractionAssignment); // 6
console.log(myMultiplicationAssignment); // 50
console.log(myDivisionAssignment); // 2
console.log(myModulusAssignment); // 1
console.log(myExponentiationAssignment); // 1

// 3. Print 5 true comparisons with different comparison operators
console.log(myAddition > mySubtraction); // true
console.log(myDivision < myModulus); // true
console.log(myModulus >= myDecrement); // true
console.log(myModulus <= myDecrement); // true
console.log(myModulus == myDecrement); // true
console.log(myModulus === myDecrement); // true
console.log(myIncrement != myDivision); // true
console.log(myIncrement !== myDivision); // true

// 4. Print 5 false comparisons with different comparison operators
console.log(myAddition < mySubtraction); // false
console.log(myDivision > myModulus); // false
console.log(myDivision >= myModulus); // false
console.log(myIncrement <= myDecrement); // false
console.log(myIncrement == myDecrement); // false
console.log(myIncrement === myDecrement); // false
console.log(myModulus != myDecrement); // false
console.log(myModulus !== myDecrement); // false

// 5. Use the logical and operator
console.log(myAddition > mySubtraction && myModulus === myDecrement); // true

// 6. Use the logical or operator
console.log(myModulus != myDecrement || myIncrement > myDecrement); // true

// 7. Combine both logical operators
console.log(
  (myAddition != myDivision && myIncrement <= myDecrement) ||
    myModulus === myDecrement,
); // true

// 8. Add some negation
console.log(!(myAddition > mySubtraction)); // false

// 9. Use the ternary operator
myIncrement == myDivision
  ? console.log("myIncrement == myDivision")
  : console.log("myIncrement != myDivision"); // Outputs this log

// 10. Combine arithmetic, comparison and logical operators
!(myAddition + mySubtraction) > myIncrement &&
((myDecrement **= myAddition) != myModulus || myExponentiation < myDivision)
  ? console.log("It's true")
  : console.log("It's false"); // Outputs this log
