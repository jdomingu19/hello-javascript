// JavaScript Course from Scratch @mouredev
// Class 45 - Modules Exercises (Part 6)

// 10. Import (here use export) a function, a constant and a class
// from a different directory than the previous one
export const firstTenEvenNumbers = function () {
  let evenNumbers = [];
  let i = 0;
  while (true) {
    if (evenNumbers.length >= 20) {
      break;
    }
    if (i % 2 == 0) {
      evenNumbers.push(i);
    }
    i++;
  }
  return evenNumbers;
};

export const EARTH_GRAVITY = 9.80665; // m/s²

export class Mountain {
  constructor(name, height, location) {
    this.name = name;
    this.height = height;
    this.location = location;
  }
}
