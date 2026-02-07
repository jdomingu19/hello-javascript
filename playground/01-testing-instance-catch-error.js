// Hello, JavaScript!
// Playground: Testing Instance on Catch Error
class MyError extends Error {
  sayHello() {
    console.log("Hello from MyError!");
  }
}

try {
  throw new MyError("Something went wrong");
} catch (error) {
  // error is an instance of MyError
  error.sayHello(); // Hello from MyError!
}
