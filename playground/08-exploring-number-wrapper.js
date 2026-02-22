// Hello, JavaScript! @jdomingu19
// Playground: Exploring Number Wrapper

// 1. Primitive number
let primitiveNumber = 42;

console.log(primitiveNumber); // 42
console.log(primitiveNumber.toString()); // 42
console.log(typeof primitiveNumber); // number
console.log(primitiveNumber instanceof Number); // false
console.log(primitiveNumber.__proto__.constructor.name); // Number

// 2. Wrapper number object
let objectNumber = new Number(42);

console.log(objectNumber); // [Number: 42]
console.log(objectNumber.toString()); // 42
console.log(typeof objectNumber); // object
console.log(objectNumber instanceof Number); // true
console.log(objectNumber.__proto__.constructor.name); // Number

// 3. Equality checks
console.log(primitiveNumber == objectNumber); // true
console.log(primitiveNumber === objectNumber); // false

// 4. Arithmetic operations
console.log(primitiveNumber + 8); // 50 → primitive addition
console.log(objectNumber + 8); // 50 → object coerced to primitive

// 5. Object identity
console.log(Object.is(primitiveNumber, objectNumber)); // false

// 6. valueOf()
console.log(primitiveNumber.valueOf()); // 42
console.log(objectNumber.valueOf()); // 42

// 7. toString()
console.log(primitiveNumber.toString()); // "42"
console.log(objectNumber.toString()); // "42"
