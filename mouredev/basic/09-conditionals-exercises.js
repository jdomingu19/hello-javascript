// JavaScript Course from Scratch @mouredev
// Class 23 - Conditionals Exercises

// 1. Print your name through the console if a variable takes its value
let username = "Jesús";
if (username == "Jesús") {
  console.log(username);
}

// 2. Print a message through the console if the username and password match the established ones
let password = "1234";
if (username == "Jesús" && password == "1234") {
  console.log("Welcome back, Jesús!");
} else {
  console.log("username and password do not match...");
}

// 3. Check if a number is positive, negative or zero and print a message
let myNumber = 42;
if (myNumber > 0) {
  console.log(myNumber + " is a positive number");
} else if (myNumber == 0) {
  console.log(myNumber + " is zero");
} else {
  console.log(myNumber + " is a negative number");
}

// 4. Checks whether a person can vote or not (greater than or equal to 18) and indicates how many years they have left
let personAge = 16;

if (personAge >= 18) {
  console.log("Person can vote!");
} else {
  console.log("Person can not vote.");
  console.log(`Person is ${personAge} years old.`);
  console.log(`Person have ${18 - personAge} years left.`);
}

// 5. Use the ternary operator to assign the value "adult" or "minor" to a variable depending on the age
let personType = "";
personAge >= 18 ? (personType = "adult") : (personType = "minor");
console.log(`Person is a(n): ${personType}`);

// 6. Shows what season of the year we are in depending on the value of a "month" variable
let month = 4;
if (month >= 1 && month <= 3) {
  console.log("Season is winter");
} else if (month >= 4 && month <= 6) {
  console.log("Season is spring");
} else if (month >= 7 && month <= 9) {
  console.log("Season is summer");
} else if (month >= 10 && month <= 12) {
  console.log("Season is autumn");
} else {
  console.log("Invalid month number.");
}

// 7. Shows the number of days in a month depending on the variable from the previous exercise
if (month <= 0 || month > 12) {
  console.log("Invalid month number.");
} else if (month == 2) {
  console.log("Month 2 has 28 days");
} else if (month == 4 || month == 7 || month == 10 || month == 11) {
  console.log(`Month ${month} has 30 days`);
} else {
  console.log(`Month ${month} has 31 days`);
}

// 8. Use a switch to print a different greeting message depending on the language
let language = "Català";
switch (language) {
  case "English":
    console.log("English: I love you");
    break;

  case "Español":
    console.log("Español: Te amo");
    break;

  case "Català":
    console.log("Català: T'estimo");
    break;

  default:
    console.log("Invalid language value.");
}

// 9. Use a switch to do exercise 6 again
switch (month) {
  case 1:
    console.log("Season is winter");
    break;
  case 2:
    console.log("Season is winter");
    break;
  case 3:
    console.log("Season is winter");
    break;
  case 4:
    console.log("Season is spring");
    break;
  case 5:
    console.log("Season is spring");
    break;
  case 6:
    console.log("Season is spring");
    break;
  case 7:
    console.log("Season is summer");
    break;
  case 8:
    console.log("Season is summer");
    break;
  case 9:
    console.log("Season is summer");
    break;
  case 10:
    console.log("Season is autumn");
    break;
  case 11:
    console.log("Season is autumn");
    break;
  case 12:
    console.log("Season is autumn");
    break;
  default:
    console.log("Invalid language value.");
}

// 10. Use a switch to do exercise 7 again
switch (month) {
  case 1:
    console.log(`Month ${month} has 31 days`);
    break;
  case 2:
    console.log(`Month ${month} has 28 days`);
    break;
  case 3:
    console.log(`Month ${month} has 31 days`);
    break;
  case 4:
    console.log(`Month ${month} has 30 days`);
    break;
  case 5:
    console.log(`Month ${month} has 31 days`);
    break;
  case 6:
    console.log(`Month ${month} has 30 days`);
    break;
  case 7:
    console.log(`Month ${month} has 31 days`);
    break;
  case 8:
    console.log(`Month ${month} has 31 days`);
    break;
  case 9:
    console.log(`Month ${month} has 30 days`);
    break;
  case 10:
    console.log(`Month ${month} has 31 days`);
    break;
  case 11:
    console.log(`Month ${month} has 30 days`);
    break;
  case 12:
    console.log(`Month ${month} has 31 days`);
    break;
  default:
    console.log("Invalid language value.");
}
