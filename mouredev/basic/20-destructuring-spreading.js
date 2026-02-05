// JavaScript Course from Scratch @mouredev
// Class 35 - Destructuring & Spreading

// Creating our objects
let myArray = [1, 2, 3];
let myObject = {
  name: "Jesús",
  age: 21,
  alias: "@jdomingu19",
};

let myValue = myArray[0];
console.log(myValue); // 1

let myName = myObject.name;
console.log(myName); // Jesús

// 2. Destructuring

// 2.1 Destructuring arrays
let [myValue0, myValue1, myValue2, myValue3] = myArray;
console.log(myValue0); // 1
console.log(myValue1); // 2
console.log(myValue2); // 3
console.log(myValue3); // undefined

// 2.2 Destructuring arrays with default values
let [myValue4 = 0, myValue5 = 0, myValue6 = 0, myValue7 = 0] = myArray;
console.log(myValue4); // 1
console.log(myValue5); // 2
console.log(myValue6); // 3
console.log(myValue7); // 0

// 2.3 Destructuring arrays with ignored elements
let [myValue8, , myValue10] = myArray;
console.log(myValue8); // 1
console.log(myValue10); // 3

// 2.4 Destructuring objects
let { name, age, alias } = myObject;
console.log(name); // Jesús
console.log(age); // 21
console.log(alias); // @jdomingu19

// 2.5 Destructuring objects with default values
let { nam2, age2, alias2, email = "some@email.com" } = myObject;
console.log(nam2); // undefined
console.log(age2); // undefined
console.log(alias2); // undefined
console.log(email); // some@email.com

// 2.6 Destructuring objects with named variables
let { name: name3, age: age3, alias: alias3 } = myObject;
console.log(name3); // Jesús
console.log(age3); // 21
console.log(alias3); // @jdomingu19

// 2.7 Destructuring nested objects
let person = {
  name: "Jesús",
  age: 21,
  alias: "@jdomingu19",
  study: function () {
    console.log(`${this.name} is studying`);
  },
  job: {
    role: "React Native Developer",
    exp: 5,
    work: function () {
      console.log(`${person.name} is building a new app`);
    },
  },
};

let {
  name: personName,
  job: { role: jobName },
} = person;

console.log(personName); // Jesús
console.log(jobName); // React Native Developer

// 3. Spreading

// 3.1 Spreading arrays
let myArray2 = [...myArray, 4, 5];

console.log(myArray); // [ 1, 2, 3 ]
console.log(myArray2); // [ 1, 2, 3, 4, 5 ]

// 3.2 Spreading arrays as copying arrays
let myArray3 = [...myArray];

console.log(myArray); // [ 1, 2, 3 ]
console.log(myArray3); // [ 1, 2, 3 ]

console.log(myArray == myArray3); // false
console.log(myArray === myArray3); // false

// 3.3 Spreading arrays to combine arrays
let myArray4 = [...myArray, ...myArray2, ...myArray3];

console.log(myArray); // [ 1, 2, 3 ]
console.log(myArray2); // [ 1, 2, 3, 4, 5 ]
console.log(myArray3); // [ 1, 2, 3 ]
console.log(myArray4); // [ 1, 2, 3, 1, 2, 3, 4, 5, 1, 2, 3 ]

// 3.4 Spreading objects with new values
let person2 = { ...person, email: "some@email.com" };

console.log(person2); // { ... }

// 3.4 Spreading objects as copying objects
let person3 = { ...person };

console.log(person3); // { ... }

console.log(person3 == person); // false
console.log(person3 === person); // false
