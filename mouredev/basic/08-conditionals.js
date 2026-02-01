// JavaScript Course from Scratch @mouredev
// Class 23 - Conditionals

// 1. if
let age = 21;
if (age == 21) {
  console.log("You're an adult!");
}

// 2. else
age = 16;
if (age == 21) {
  console.log("You're an adult!");
} else {
  console.log("You're not an adult yet."); // Outputs this one
}

// 3. else if
age = 32;
if (age == 21) {
  console.log("You're an adult!");
} else if (age < 21) {
  console.log("You're not an adult yet.");
} else {
  console.log("You're older than 21."); // Outputs this one
}

// 4. Ternary operator
const message = age >= 21 ? "You're an adult!" : "You're not an adult yet.";
console.log(message); // You're an adult!

// 5. Switch
let day = 3;
let dayName = "";

switch (day) {
  case 0:
    dayName = "Monday";
    break;
  case 1:
    dayName = "Mars";
    break;
  case 2:
    dayName = "Wednesday";
    break;
  case 3:
    dayName = "Thursday";
    break;
  case 4:
    dayName = "Friday";
    break;
  case 5:
    dayName = "Saturday";
    break;
  case 6:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day number...";
}
console.log(dayName); // Thursday
