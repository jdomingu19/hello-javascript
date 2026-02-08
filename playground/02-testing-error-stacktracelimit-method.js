// Hello, JavaScript!
// Playground: Testing Error stackTraceLimit Method
function a() {
  b();
}

function b() {
  c();
}

function c() {
  throw new Error("Test Error");
}

Error.stackTraceLimit = 2;

try {
  a(); // It will show only the last two calls in the trace
} catch (error) {
  console.log(error); // Error: Test Error at a (...) at b (...)
  console.log(error.stack); // Error: Test Error at a (...) at b (...)
  console.log(error.message); // Test Error
  console.log(error.stackTraceLimit); // undefined (Error != error)
}
