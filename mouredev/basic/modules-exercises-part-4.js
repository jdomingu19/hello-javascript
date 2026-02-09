// JavaScript Course from Scratch @mouredev
// Class 45 - Modules Exercises (Part 4)

// 8. Import (use export here) a function, a constant and a default class (in case you allow it)
const isPositiveNumber = (number) => typeof number === "number" && number > 0;

const EARTH_RADIUS = 6371000; // meters

class Laptop {
  constructor(model, brand) {
    this.model = model;
    this.brand = brand;
  }
}

export default { isPositiveNumber, EARTH_RADIUS, Laptop };
