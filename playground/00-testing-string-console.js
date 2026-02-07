// Hello, JavaScript!
// Playground: Testing String on Console
class SumConsole {
  constructor(a = 0, b = 0) {
    this.a = a;
    this.b = b;
  }

  sum() {
    return this.a + this.b;
  }

  printSum() {
    // 1. Concatenation with commas
    console.log(this.a, "+", this.b, "=", this.sum());
    // 2. Concatenation without commas
    console.log(this.a + " + " + this.b + " = " + this.sum());
    // 3. Template literals
    console.log(`${this.a} + ${this.b} = ${this.sum()}`);
  }
}

let a = 5;
let b = 6;

let mySum1 = new SumConsole();
mySum1.printSum();

let mySum2 = new SumConsole(a);
mySum2.printSum();

let mySum3 = new SumConsole(a, b);
mySum3.printSum();
