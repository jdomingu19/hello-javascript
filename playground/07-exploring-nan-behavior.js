// Hello, JavaScript! @jdomingu19
// Playground: Exploring NaN Behavior

// 1. Invalid numeric operations → NaN
console.log(0 / 0); // NaN
console.log(Number("abc")); // NaN

// 2. NaN is never equal to itself
console.log(NaN === NaN); // false

// 3. Global check (loose) for NaN
console.log(isNaN(NaN)); // true

// 4. Strict check for NaN (Number.isNaN)
console.log(Number.isNaN(NaN)); // true

// 5. Type of NaN is still 'number'
console.log(typeof NaN); // number

// 6. Constructor of NaN is Number
console.log(NaN.__proto__.constructor.name); // Number

// 7. NaN is not an instance of Number object
console.log(NaN instanceof Number); // false
