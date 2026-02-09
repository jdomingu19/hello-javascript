// JavaScript Course from Scratch @mouredev
// Class 45 - Modules Exercises (Part 2)

// 4. Import (use export here) a function
export function isEvenNumber(number) {
  if (typeof number !== "number") {
    return false;
  }
  if (number % 2 == 0) {
    return true;
  }
  return false;
}

// 5. Import (use export here) a constant
export const NAME = "Jesús";

// 6. Import (use export here) a class
export class Piano {
  constructor(keys, model, brand) {
    this.keys = keys;
    this.model = model;
    this.brand = brand;
  }
}
