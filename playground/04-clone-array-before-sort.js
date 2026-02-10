// Hello, JavaScript!
// Playground: Clone Array Before Sort

// sort() mutates the original array in place
let array1 = [3, 4, 1, 6, 8];
let sorted1 = array1.sort((a, b) => a - b);

console.log(array1); // [ 1, 3, 4, 6, 8 ]
console.log(sorted1); // [ 1, 3, 4, 6, 8 ]
console.log(array1 === sorted1); // true

// clone array before sort to preserve original
let array2 = [3, 4, 1, 6, 8];
let sorted2 = [...array2].sort((a, b) => a - b);

console.log(array2); // [ 3, 4, 1, 6, 8 ]
console.log(sorted2); // [ 1, 3, 4, 6, 8 ]
console.log(array2 === sorted2); // false
