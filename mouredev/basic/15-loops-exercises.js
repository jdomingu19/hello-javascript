// JavaScript Course from Scratch @mouredev
// Class 29 - Loops Exercise

// NOTE: Explore different loop syntaxes to solve the exercises

// 1. Create a loop that prints the numbers 1 to 20

// for
for (let i = 1; i <= 20; i++) {
  console.log(`for: ${i}`); // ...
}

// while
let i = 1;
while (i <= 20) {
  console.log(`while: ${i}`); // ...
  i++;
}

// do while
i = 1;
do {
  console.log(`do while: ${i}`); // ...
  i++;
} while (i <= 20);

// 2. Create a loop that adds all the numbers from 1 to 100 and displays the result

// for
let forSum = 0;
for (let i = 1; i <= 100; i++) {
  forSum += i;
}
console.log(`for sum: ${forSum}`); // 5050

// while
let whileSum = 0;
i = 1;
while (i <= 100) {
  whileSum += i;
  i++;
}
console.log(`while sum: ${whileSum}`); // 5050

// do while
let doWhileSum = 0;
i = 1;
do {
  doWhileSum += i;
  i++;
} while (i <= 100);
console.log(`do while sum: ${doWhileSum}`); // 5050

// 3. Create a loop that prints all even numbers between 1 and 50

// for
for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(`for: ${i}`); // ...
  }
}

// while
i = 1;
while (i <= 50) {
  if (i % 2 == 0) {
    console.log(`while: ${i}`); // ...
  }
  i++;
}

// do while
i = 1;
do {
  if (i % 2 == 0) {
    console.log(`do while: ${i}`); // ...
  }
  i++;
} while (i <= 50);

// 4. Given an array of names, use a loop to print each name to the console
let namesArray = ["Jesús", "Álex", "Robin", "Antoine"];

// for
for (let i = 0; i < namesArray.length; i++) {
  console.log(`for: ${namesArray[i]}`); // ...
}

// for of
for (let name of namesArray) {
  console.log(`for of: ${name}`); // ...
}

// while
i = 0;
while (i < namesArray.length) {
  console.log(`while: ${namesArray[i]}`); // ...
  i++;
}

// do while
i = 0;
do {
  console.log(`do while: ${namesArray[i]}`); // ...
  i++;
} while (i < namesArray.length);

// 5. Write a loop that counts the number of vowels in a text string
let myString = "Hello, JavaScript!"; // 5
let vowels = new Set(["a", "e", "i", "o", "u"]);
let vowelsCount = 0;

// for
for (let i = 0; i < myString.length; i++) {
  if (vowels.has(myString[i].toLowerCase())) {
    vowelsCount += 1;
  }
}
console.log(`for: ${vowelsCount}`); // 5

// for of
vowelsCount = 0;
for (let char of myString) {
  if (vowels.has(char.toLowerCase())) {
    vowelsCount += 1;
  }
}
console.log(`for of: ${vowelsCount}`); // 5

// while
vowelsCount = 0;
i = 0;
while (i < myString.length) {
  if (vowels.has(myString[i].toLowerCase())) {
    vowelsCount += 1;
  }
  i++;
}
console.log(`while: ${vowelsCount}`); // 5

// do while
vowelsCount = 0;
i = 0;
do {
  if (vowels.has(myString[i].toLowerCase())) {
    vowelsCount += 1;
  }
  i++;
} while (i < myString.length);
console.log(`do while: ${vowelsCount}`); // 5

// 6. Given an array of numbers, use a loop to multiply all the numbers and display the product
let numbers = [1, 2, 3, 4, 5]; // 120
let productResult = 1;

// for
for (let i = 0; i < numbers.length; i++) {
  productResult *= numbers[i];
}
console.log(`for: ${productResult}`); // 120

// for of
productResult = 1;
for (let number of numbers) {
  productResult *= number;
}
console.log(`for of: ${productResult}`); // 120

// while
productResult = 1;
i = 0;
while (i < numbers.length) {
  productResult *= numbers[i];
  i++;
}
console.log(`while: ${productResult}`); // 120

// do while
productResult = 1;
i = 0;
do {
  productResult *= numbers[i];
  i++;
} while (i < numbers.length);
console.log(`do while: ${productResult}`); // 120

// 7. Write a loop that prints the multiplication table for 5

// for
for (let i = 1; i <= 10; i++) {
  console.log(`for: 5 x ${i} = ${5 * i}`); // ...
}

// for of
let multiplicadors = [1, 2, 3, 4, 5, 7, 8, 9, 10]; // just for practicing
for (let multiplicador of multiplicadors) {
  console.log(`for of: 5 x ${multiplicador} = ${5 * multiplicador}`); // ...
}

// while
i = 1;
while (i <= 10) {
  console.log(`while: 5 x ${i} = ${5 * i}`); // ...
  i++;
}

// do while
i = 1;
do {
  console.log(`do while: 5 x ${i} = ${5 * i}`); // ...
  i++;
} while (i <= 10);

// 8. Use a loop to reverse a text string
let message = "Hello"; // olleH

// for
let reverseMessage = "";
for (let i = message.length - 1; i != -1; i--) {
  reverseMessage += message[i];
}
console.log(`for: ${reverseMessage}`); // olleH

// for of (just for practicing)
reverseMessage = "";
let tempCharArray = [];
for (let char of message) {
  tempCharArray.unshift(char);
}
for (let char of tempCharArray) {
  reverseMessage += char;
}
console.log(`for of: ${reverseMessage}`); // olleH

// while
reverseMessage = "";
i = message.length - 1;
while (i != -1) {
  reverseMessage += message[i];
  i--;
}
console.log(`while: ${reverseMessage}`); // olleH

// do while
reverseMessage = "";
i = message.length - 1;
do {
  reverseMessage += message[i];
  i--;
} while (i != -1);
console.log(`do while: ${reverseMessage}`); // olleH

// 9. Use a loop to generate the first 10 numbers of the Fibonacci sequence
let fibonacci = [0, 1]; // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
let n = 2;

// for
for (let n = 2; n < 10; n++) {
  fibonacci.push(fibonacci[n - 1] + fibonacci[n - 2]);
}
console.log(`for: ${fibonacci}`); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// while
fibonacci = [0, 1];
n = 2;
while (n < 10) {
  fibonacci.push(fibonacci[n - 1] + fibonacci[n - 2]);
  n++;
}
console.log(`while: ${fibonacci}`); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// do while
fibonacci = [0, 1];
n = 2;
do {
  fibonacci.push(fibonacci[n - 1] + fibonacci[n - 2]);
  n++;
} while (n < 10);
console.log(`do while: ${fibonacci}`); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// 10. Given an array of numbers, use a loop to create a new array containing only numbers greater than 10
let numbersArray = [4, 26, 3, 27, 42, 6, 115, 5]; // [26, 27, 42, 115]
let greaterThanTen = [];

// for
for (let i = 0; i < numbersArray.length; i++) {
  if (numbersArray[i] > 10) {
    greaterThanTen.push(numbersArray[i]);
  }
}
console.log(`for: ${greaterThanTen}`); // [26, 27, 42, 115]

// for of
greaterThanTen = [];
for (let number of numbersArray) {
  if (number > 10) {
    greaterThanTen.push(number);
  }
}
console.log(`for of: ${greaterThanTen}`); // [26, 27, 42, 115]

// while
greaterThanTen = [];
i = 0;
while (i < numbersArray.length) {
  if (numbersArray[i] > 10) {
    greaterThanTen.push(numbersArray[i]);
  }
  i++;
}
console.log(`while: ${greaterThanTen}`); // [26, 27, 42, 115]

// do while
greaterThanTen = [];
i = 0;
do {
  if (numbersArray[i] > 10) {
    greaterThanTen.push(numbersArray[i]);
  }
  i++;
} while (i < numbersArray.length);
console.log(`do while: ${greaterThanTen}`); // [26, 27, 42, 115]
