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

// 8. Wrapping NaN with Number object
let wrappedNaN = new Number(NaN);

// 9. Object wrapper representation
console.log(wrappedNaN); // [Number: NaN]

// 10. String conversion of wrapper
console.log(wrappedNaN.toString()); // "NaN"

// 11. Wrapper vs primitive comparison
console.log(wrappedNaN === NaN); // false

// 12. Global isNaN treats wrapper as NaN
console.log(isNaN(wrappedNaN)); // true

// 13. Number.isNaN does not unwrap object
console.log(Number.isNaN(wrappedNaN)); // false

// 14. Wrapper type is 'object'
console.log(typeof wrappedNaN); // object

// 15. Constructor of wrapper is Number
console.log(wrappedNaN.__proto__.constructor.name); // Number

// 16. Wrapper is instance of Number object
console.log(wrappedNaN instanceof Number); // true
