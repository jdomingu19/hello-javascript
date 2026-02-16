// Intermediate JavaScript Course @mouredev
// Class 80 to 81 - Testing

// 1. Unit Tests
function sum(a, b) {
  return a + b;
}

module.exports = sum;

console.log(sum(5, 6) === 11); // true
console.log(sum(2, 3) === 5); // true
console.log(sum(0, 0) === 0); // true

// 2. Integration Tests
function average(numbers) {
  const total = numbers.reduce((acc, n) => sum(acc, n), 0);
  return total / numbers.length;
}

console.log(average([2, 4, 6]) === 4); // true
console.log(average([4, 8, 12]) === 8); // true
console.log(average([8, 16, 24]) === 16); // true

// 3. Ent-To-End (E2E) Tests
function login(username, password) {
  if (username === "admin" && password === "12345") {
    return "Login successful!";
  }
  return "Login failed";
}

console.log(login("user", "123") === "Login failed"); // true
console.log(login("admin", "123") === "Login failed"); // true
console.log(login("admin", "12345") === "Login successful!"); // true
