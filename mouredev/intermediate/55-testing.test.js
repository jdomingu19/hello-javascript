// Intermediate JavaScript Course @mouredev
// Class 80 to 81 - Testing (using Jest)
const sum = require("./54-testing");

test("5 + 6 must be 11", () => {
  expect(sum(5, 6)).toBe(11); // passed
});

test("5 + 7 must be 12", () => {
  expect(sum(5, "7")).toBe(25); // failed
});

test("5 + 10 must be 15", () => {
  expect(sum(5, 10)).toBe(15); // passed
});
