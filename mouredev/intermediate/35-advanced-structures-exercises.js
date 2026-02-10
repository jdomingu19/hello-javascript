// Intermediate JavaScript Course @mouredev
// Class 23 - Advanced Structures Exercises @jdomingu19

// 1. Use map, filter and reduce to create an example different from the one in the lesson
let chars = ["a", "b", "c", "d", "e"];
let vowels = new Set(["a", "e", "i", "o", "u"]);

let uppercaseChars = chars.map((char) => char.toUpperCase());
console.log(uppercaseChars); // [ 'A', 'B', 'C', 'D', 'E' ]

let vowelsChars = chars.filter((char) => vowels.has(char));
console.log(vowelsChars); // [ 'a', 'e' ]

let concatenatedChars = chars.reduce((result, current) => result + current);
console.log(concatenatedChars); // abcde

// 2. Given an array of numbers, create a new one with said numbers cubed and filter only the even numbers
let numbersArray = [1, 2, 3, 4, 5];

let newArray = numbersArray
  .map((number) => number ** 3) // [ 1, 8, 27, 64, 125 ]
  .filter((number) => number % 2 == 0); // [ 8, 64 ]

console.log(numbersArray); // [ 1, 2, 3, 4, 5 ]
console.log(newArray); // [ 8, 64 ]

// 3. Use flat and flatMap to create an example different from the one in the lesson
let nestedArray = ["a", ["b", ["c", ["d", ["e"]]]]];
console.log(nestedArray); // [ 'a', [ 'b', [ 'c', [Array] ] ] ]

let flatArray;
for (let i = 1; i < 5; i++) {
  flatArray = nestedArray.flat(i);
  console.log(flatArray);
  // [ 'a', 'b', [ 'c', [ 'd', [Array] ] ] ]
  // [ 'a', 'b', 'c', [ 'd', [ 'e' ] ] ]
  // [ 'a', 'b', 'c', 'd', [ 'e' ] ]
  // [ 'a', 'b', 'c', 'd', 'e' ]
}

let booleans = [true, false, true, false, true];
let booleansToBits = booleans.flatMap((bool) => (bool ? 1 : 0));
console.log(booleans); // [ true, false, true, false, true ]
console.log(booleansToBits); // [ 1, 0, 1, 0, 1 ]

// 4. Order an array of numbers from greatest to least
console.log(numbersArray.sort((a, b) => a - b).reverse()); // [ 5, 4, 3, 2, 1 ]

// 5. Given two sets, find the union, intersection and difference of them
let setA = new Set(["A", "B", "C"]);
let setB = new Set(["C", "D", "E"]);

let union = new Set([...setA, ...setB]);
let intersection = new Set([...setA].filter((element) => setB.has(element)));
let difference = new Set([...setA].filter((element) => !setB.has(element)));

console.log(union); // Set(5) { 'A', 'B', 'C', 'D', 'E' }
console.log(intersection); // Set(1) { 'C' }
console.log(difference); // Set(2) { 'A', 'B' }

// 6. Iterates the results of the previous exercise
for (const element of union) {
  console.log(`union: ${element}`);
}

for (const element of intersection) {
  console.log(`intersection: ${element}`);
}

for (const element of difference) {
  console.log(`difference: ${element}`);
}

union.forEach((element) => console.log(`union: ${element}`)); // ...

intersection.forEach((element) => console.log(`intersection: ${element}`)); // ...

difference.forEach((element) => console.log(`difference: ${element}`)); // ...

// 7. Create a map that stores user information (name, age and email) and iterates the data
let userInfo = new Map([
  [1, { name: "Jesús", age: 21, email: "jesus@email.com" }],
  [2, { name: "John", age: 27, email: "john@email.com" }],
  [3, { name: "Clark", age: 16, email: "Clark@email.com" }],
]);

for (const element of userInfo) {
  console.log(
    `Id: ${element[0]} | Name: ${element[1].name} | Age: ${element[1].age} | Email: ${element[1].email}`,
  );
}

userInfo.forEach((data, id) => {
  console.log(
    `Id: ${id} | Name: ${data.name} | Age: ${data.age} | Email: ${data.email}`,
  );
});

// 8. Given the previous map, create an array with the names
const userNames = [...userInfo.values()].map((user) => user.name);
console.log(userNames); // [ 'Jesús', 'John', 'Clark' ]

// 9. Given the previous map, obtain an array with the emails of the users of legal age and transform it to a set
const adultsEmail = [...userInfo.values()]
  .filter((user) => user.age >= 18)
  .map((user) => user.email);

const legalUserEmail = new Set(adultsEmail);
console.log(legalUserEmail); // Set(2) { 'jesus@email.com', 'john@email.com' }

// 10. Transform the map into an object, then transform the object into a map with key the email of each user and as value all the user's data
const usersObject = Object.fromEntries(userInfo);
console.log(usersObject); // { ... }

const usersByEmail = new Map();

Object.values(usersObject).forEach((user) => {
  usersByEmail.set(user.email, { name: user.name, age: user.age });
});

console.log(usersByEmail); // Map(3) { ... }

usersByEmail.forEach((userData, email) => {
  console.log(
    `Email: ${email} | Name: ${userData.name} | Age: ${userData.age}`,
  );
});
