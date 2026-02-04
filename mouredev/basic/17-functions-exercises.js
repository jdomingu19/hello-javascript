// JavaScript Course from Scratch @mouredev
// Class 32 - Functions Exercises

// NOTE: Explore different function syntaxes to solve the exercises

// 1. Create a function that receives two numbers and returns their sum

// simple function
function myFunc1(a = 0, b = 0) {
  return `${a} + ${b} = ${a + b}`;
}
console.log(myFunc1(5, 6)); // 5 + 6 = 11

// arrow function
const myFunc2 = (a = 0, b = 0) => `${a} + ${b} = ${a + b}`;
console.log(myFunc2(5, 6)); // 5 + 6 = 11

const myFunc3 = (a = 0, b = 0) => {
  return `${a} + ${b} = ${a + b}`;
};
console.log(myFunc3(5, 6)); // 5 + 6 = 11

// anonymous function
const myFunc4 = function (a = 0, b = 0) {
  return `${a} + ${b} = ${a + b}`;
};
console.log(myFunc4(5, 6)); // 5 + 6 = 11

// 2. Create a function that receives an array of numbers and returns the largest of them
let numbers = [1, 2, 3, 4, 1, 2, 3];

// simple function
function myFunc5(numbers) {
  let greater = 0;
  for (let number of numbers) {
    if (number > greater) {
      greater = number;
    }
  }
  return greater;
}
console.log(`Greater: ${myFunc5(numbers)}`); // Greater: 4

// arrow function
const myFunc6 = (numbers) => {
  let greater = 0;
  for (let number of numbers) {
    if (number > greater) {
      greater = number;
    }
  }
  return greater;
};
console.log(`Greater: ${myFunc6(numbers)}`); // Greater: 4

// anonymous function
const myFunc7 = function (numbers) {
  let greater = 0;
  for (let number of numbers) {
    if (number > greater) {
      greater = number;
    }
  }
  return greater;
};
console.log(`Greater: ${myFunc7(numbers)}`); // Greater: 4

// 3. Create a function that receives a string and returns the number of vowels it contains
let myString = "Hello, JavaScript!"; // 5
let vowels = new Set(["a", "e", "i", "o", "u"]);

// simple function
function myFunc8(string) {
  let vowelsCount = 0;
  for (let char of string) {
    if (vowels.has(char.toLowerCase())) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
console.log(`Vowels count: ${myFunc8(myString)}`); // Vowels count: 5

// arrow function
const myFunc9 = (string) => {
  let vowelsCount = 0;
  for (let char of string) {
    if (vowels.has(char.toLowerCase())) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
};
console.log(`Vowels count: ${myFunc9(myString)}`); // Vowels count: 5

// anonymous function
const myFunc10 = function (string) {
  let vowelsCount = 0;
  for (let char of string) {
    if (vowels.has(char.toLowerCase())) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
};
console.log(`Vowels count: ${myFunc10(myString)}`); // Vowels count: 5

// 4. Create a function that receives an array of strings and returns a new array with the strings in uppercase
let stringsArray = ["hello", "javascript", "typescript"];

// simple function
function myFunc11(stringsArray) {
  let uppercaseStringsArray = [];
  for (let string of stringsArray) {
    uppercaseStringsArray.push(string.toUpperCase());
  }
  return uppercaseStringsArray;
}
console.log(`Uppercase: ${myFunc11(stringsArray)}`); // Uppercase: HELLO,JAVASCRIPT,TYPESCRIPT

// arrow function
const myFunc12 = (stringsArray) => {
  let uppercaseStringsArray = [];
  for (let string of stringsArray) {
    uppercaseStringsArray.push(string.toUpperCase());
  }
  return uppercaseStringsArray;
};
console.log(`Uppercase: ${myFunc12(stringsArray)}`); // Uppercase: HELLO,JAVASCRIPT,TYPESCRIPT

// anonymous function
const myFunc13 = function (stringsArray) {
  let uppercaseStringsArray = [];
  for (let string of stringsArray) {
    uppercaseStringsArray.push(string.toUpperCase());
  }
  return uppercaseStringsArray;
};
console.log(`Uppercase: ${myFunc13(stringsArray)}`); // Uppercase: HELLO,JAVASCRIPT,TYPESCRIPT

// 5. Create a function that receives a number and returns true if it is prime, and false otherwise

// simple function
function myFunc14(number) {
  if (number < 2) {
    return false;
  } else if (number == 2 || number == 3) {
    return true;
  } else if (number % 2 != 0 && number % 3 != 0) {
    return true;
  } else {
    return false;
  }
}
console.log(`Is 6 prime?: ${myFunc14(6)}`); // Is 6 prime?: true
console.log(`Is 7 prime?: ${myFunc14(7)}`); // Is 7 prime?: false

// arrow function
const myFunc15 = (number) => {
  if (number < 2) {
    return false;
  } else if (number == 2 || number == 3) {
    return true;
  } else if (number % 2 != 0 && number % 3 != 0) {
    return true;
  } else {
    return false;
  }
};
console.log(`Is 6 prime?: ${myFunc15(6)}`); // Is 6 prime?: true
console.log(`Is 7 prime?: ${myFunc15(7)}`); // Is 7 prime?: false

// anonymous function
const myFunc16 = function (number) {
  if (number < 2) {
    return false;
  } else if (number == 2 || number == 3) {
    return true;
  } else if (number % 2 != 0 && number % 3 != 0) {
    return true;
  } else {
    return false;
  }
};
console.log(`Is 6 prime?: ${myFunc16(6)}`); // Is 6 prime?: true
console.log(`Is 7 prime?: ${myFunc16(7)}`); // Is 7 prime?: false

// 6. Create a function that receives two arrays and returns a new array that contains the common elements between both
let array1 = ["abc", 123, true, "null", undefined];
let array2 = ["def", 123, false, true, "abc"];

// simple function
function myFunc17(array1, array2) {
  let commonElements = [];
  for (let element of array1) {
    if (array2.includes(element)) {
      commonElements.push(element);
    }
  }
  return commonElements;
}
console.log(`Common elements: ${myFunc17(array1, array2)}`); // Common elements: abc,123,true

// arrow function
const myFunc18 = (array1, array2) => {
  let commonElements = [];
  for (let element of array1) {
    if (array2.includes(element)) {
      commonElements.push(element);
    }
  }
  return commonElements;
};
console.log(`Common elements: ${myFunc18(array1, array2)}`); // Common elements: abc,123,true

// anonymous function
const myFunc19 = function (array1, array2) {
  let commonElements = [];
  for (let element of array1) {
    if (array2.includes(element)) {
      commonElements.push(element);
    }
  }
  return commonElements;
};
console.log(`Common elements: ${myFunc19(array1, array2)}`); // Common elements: abc,123,true

// 7. Create a function that receives an array of numbers and returns the sum of all even numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 2 + 4 + 6 + 8 = 20

// simple function
function myFunc20(numbersArray) {
  let evensSum = 0;
  for (let number of numbersArray) {
    if (number % 2 == 0) {
      evensSum += number;
    }
  }
  return evensSum;
}
console.log(`Evens sum: ${myFunc20(numbers)}`); // Evens sum: 20

// arrow function
const myFunc21 = (numbersArray) => {
  let evensSum = 0;
  for (let number of numbersArray) {
    if (number % 2 == 0) {
      evensSum += number;
    }
  }
  return evensSum;
};
console.log(`Evens sum: ${myFunc21(numbers)}`); // Evens sum: 20

// anonymous function
const myFunc22 = function (numbersArray) {
  let evensSum = 0;
  for (let number of numbersArray) {
    if (number % 2 == 0) {
      evensSum += number;
    }
  }
  return evensSum;
};
console.log(`Evens sum: ${myFunc22(numbers)}`); // Evens sum: 20

// 8. Create a function that receives an array of numbers and returns a new array with each number squared
// numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// simple function
function myFunc23(numbersArray) {
  let squareNumbers = [];
  for (let number of numbersArray) {
    squareNumbers.push(number ** 2);
  }
  return squareNumbers;
}
console.log(`Square numbers: ${myFunc23(numbers)}`); // Square numbers: 1,4,9,16,25,36,49,64,81

// arrow function
const myFunc24 = (numbersArray) => {
  let squareNumbers = [];
  for (let number of numbersArray) {
    squareNumbers.push(number ** 2);
  }
  return squareNumbers;
};
console.log(`Square numbers: ${myFunc24(numbers)}`); // Square numbers: 1,4,9,16,25,36,49,64,81

// anonymous function
const myFunc25 = function (numbersArray) {
  let squareNumbers = [];
  for (let number of numbersArray) {
    squareNumbers.push(number ** 2);
  }
  return squareNumbers;
};
console.log(`Square numbers: ${myFunc25(numbers)}`); // Square numbers: 1,4,9,16,25,36,49,64,81

// 9. Create a function that receives a text string and returns the same string with the words in reverse order
let myString2 = "How are you?"; // woH era ?uoy

// simple function
function myFunc26(string) {
  let words = string.split(" ");
  let reverseStringWords = "";
  for (let word of words) {
    for (let i = word.length - 1; i > -1; i--) {
      reverseStringWords += word[i];
    }
    reverseStringWords += " ";
  }
  reverseStringWords = reverseStringWords.trimEnd();
  return reverseStringWords;
}
console.log(`Reverse string words: ${myFunc26(myString2)}`); // Reverse string words: woH era ?uoy

// arrow function
const myFunc27 = (string) => {
  let words = string.split(" ");
  let reverseStringWords = "";
  for (let word of words) {
    for (let i = word.length - 1; i > -1; i--) {
      reverseStringWords += word[i];
    }
    reverseStringWords += " ";
  }
  reverseStringWords = reverseStringWords.trimEnd();
  return reverseStringWords;
};
console.log(`Reverse string words: ${myFunc27(myString2)}`); // Reverse string words: woH era ?uoy

// anonymous function
const myFunc28 = function (string) {
  let words = string.split(" ");
  let reverseStringWords = "";
  for (let word of words) {
    for (let i = word.length - 1; i > -1; i--) {
      reverseStringWords += word[i];
    }
    reverseStringWords += " ";
  }
  reverseStringWords = reverseStringWords.trimEnd();
  return reverseStringWords;
};
console.log(`Reverse string words: ${myFunc28(myString2)}`); // Reverse string words: woH era ?uoy

// 10. Create a function that calculates the factorial of a given number

// simple function
function myFunc29(number) {
  if (number < 0) {
    return 0;
  } else if (number == 0) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }
}
console.log(`Factorial of 0: ${myFunc29(0)}`); // Factorial of 0: 1
console.log(`Factorial of 5: ${myFunc29(5)}`); // Factorial of 5: 120
console.log(`Factorial of 7: ${myFunc29(7)}`); // Factorial of 7: 5040

// arrow function
const myFunc30 = (number) => {
  if (number < 0) {
    return 0;
  } else if (number == 0) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }
};
console.log(`Factorial of 0: ${myFunc30(0)}`); // Factorial of 0: 1
console.log(`Factorial of 5: ${myFunc30(5)}`); // Factorial of 5: 120
console.log(`Factorial of 7: ${myFunc30(7)}`); // Factorial of 7: 5040

// anonymous function
const myFunc31 = function (number) {
  if (number < 0) {
    return 0;
  } else if (number == 0) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }
};
console.log(`Factorial of 0: ${myFunc31(0)}`); // Factorial of 0: 1
console.log(`Factorial of 5: ${myFunc31(5)}`); // Factorial of 5: 120
console.log(`Factorial of 7: ${myFunc31(7)}`); // Factorial of 7: 5040
