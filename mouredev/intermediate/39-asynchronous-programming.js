// Intermediate JavaScript Course @mouredev
// Class 39 to 44 - Asynchronous programming

// 1. Synchronous Code
console.log("Start (Synchronous code)");

for (let i = 0; i < 1000000; i++) {}

console.log("End (Synchronous code)");

// 2. Event Loop Components
// - Call Stack: executes functions in a last-in, first-out order
// - Web APIs / Node.js APIs: manage asynchronous operations (timers, I/O, fetch, etc.)
// - Task Queue (Macrotasks): holds callbacks from operations like setTimeout or setInterval
// - Microtask Queue: holds microtasks such as Promise callbacks and MutationObservers

// 3. Event Loop Flow
// - Code is pushed onto the Call Stack and executed.
// - Asynchronous operations are delegated to Web APIs / Node.js APIs
// - Once completed, their callbacks are queued in either the Task Queue or Microtask Queue
// - When the Call Stack is empty, the Event Loop first processes all microtasks,
//   then moves macrotasks from the Task Queue into the Call Stack
// - This cycle repeats continuously, ensuring non-blocking execution of asynchronous code

// 4. ASCII Diagram of the Event Loop:
//
//        ┌───────────────┐
//        │   Call Stack  │
//        └───────▲───────┘
//                │
//                │
//        ┌───────┴────────┐
//        │   Event Loop   │
//        └───────▲────────┘
//                │
//   ┌────────────┴─────────────┐
//   │                          │
// ┌─┴───────────┐       ┌──────┴─────────┐
// │ Microtask   │       │ Task Queue     │
// │ Queue       │       │ (Macrotasks)   │
// └────▲────────┘       └──────▲─────────┘
//      │                       │
//      │                       │
// ┌────┴───────────────────────────────┐
// │   Web APIs / Node.js APIs          │
// │   (Timers, I/O, fetch, etc.)       │
// └────────────────────────────────────┘

// 5. Asynchronous Code

// 5.1 Callbacks
console.log("Start (Asynchronous code)");
setTimeout(() => {
  console.log("This will be executed after 2 seconds! (2000 ms)");
}, 2000); // 2000 ms = 2 s
console.log("End (Asynchronous code)");

// 5.2. Callback Hell
function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 completed");
    callback();
  }, 1000); // 1000 ms = 1 s
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 completed");
    callback();
  }, 1000); // 1000 ms = 1 s
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 completed");
    callback();
  }, 1000); // 1000 ms = 1 s
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps completed");
    });
  });
});

// 5.3 Promises
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const OK = true;
    if (OK) {
      resolve("Successful operation!");
    } else {
      reject("An error has occurred");
    }
  }, 4000); // 5000 ms = 4 s
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });

// 5.4 Promise Chaining
function promiseStep1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise step 1 completed");
      resolve();
    }, 1000); // 1000 ms = 1 s
  });
}

function promiseStep2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise step 2 completed");
      resolve();
    }, 1000); // 1000 ms = 1 s
  });
}

function promiseStep3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise step 3 completed");
      resolve();
    }, 1000); // 1000 ms = 1 s
  });
}

promiseStep1()
  .then(promiseStep2)
  .then(promiseStep3)
  .then(() => {
    console.log("All Promise steps completed");
  });

// 5.5 `async` & `await`
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function doSomethingAsync() {
  console.log("Process Start");

  await wait(1000);
  console.log("Process after 1 second (1000 ms)");

  await wait(2000);
  console.log("Process after 2 seconds (2000 ms)");

  await wait(3000);
  console.log("Process after 3 seconds (3000 ms)");

  console.log("Process End");
}

doSomethingAsync();
