// Intermediate JavaScript Course @mouredev
// Class 45 - Asynchronous Programming Exercises

// 1. Create a greet function that receives a name and a callback.
//    The callback should be executed after 2 seconds and display "Hello, [name]" in the console.
function greetUser(name, callback) {
  setTimeout(() => {
    callback(name);
  }, 2000); // 2000 ms = 2 s
}

const greetCallback = (name) => {
  console.log(`Hello, ${name}!`);
};

greetUser("Jesús", greetCallback); // Hello, Jesús! (2000 ms)

// 2. Create three functions task1(callback), task2(callback) and task3(callback).
//    Each function should take 1 second to execute and then call the callback.
function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 completed");
    callback();
  }, 1000); // 1000 ms = 1 s
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 completed");
    callback();
  }, 1000); // 1000 ms = 1 s
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 completed");
    callback();
  }, 1000); // 1000 ms = 1 s
}

task1(() => {
  task2(() => {
    task3(() => {
      console.log("All tasks completed");
    });
  });
});

// 3. Create a function to check a number that returns a Promise.
//    If the number is even, the promise is resolved with the message "Even number".
//    If the number is odd, the promise is rejected with the message "Odd number".

// function
function isEvenNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 == 0) {
      resolve(`${number} is an even number`);
    } else {
      reject(`${number} is an odd number`);
    }
  });
}
// console.log(isEvenNumber(42)); // Promise { '42 is an even number' }
isEvenNumber(42)
  .then((result) => {
    console.log(result); // 42 is an even number
  })
  .catch((error) => {
    console.log(error);
  });

// console.log(isEvenNumber(41)); // Promise { <rejected> '41 is an odd number' }
isEvenNumber(41)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error); // 41 is an odd number
  });

// const function
const isEvenNumberPromise = (number) =>
  new Promise((resolve, reject) => {
    if (number % 2 == 0) {
      resolve(`${number} is an even number`);
    } else {
      reject(`${number} is an odd number`);
    }
  });

// console.log(isEvenNumberPromise(42)); // Promise { '42 is an even number' }
isEvenNumberPromise(42)
  .then((result) => {
    console.log(result); // 42 is an even number
  })
  .catch((error) => {
    console.log(error);
  });

// console.log(isEvenNumberPromise(41)); // Promise { <rejected> '41 is an odd number' }
isEvenNumberPromise(41)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error); // 41 is an odd number
  });

// 4. Create three functions that return promises:
//    firstTask(): takes 1s and displays "First task completed".
//    secondTask(): takes 2s and displays "Second task completed".
//    thirdTask(): takes 1.5s and displays "Third task completed".
function firstTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("First task completed");
      resolve();
    }, 1000); // 1000 ms = 1 s
  });
}

function secondTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Second task completed");
      resolve();
    }, 2000); // 2000 ms = 2 s
  });
}

function thirdTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Third task completed");
      resolve();
    }, 1500); // 1500 ms = 1.5 s
  });
}

firstTask()
  .then(secondTask)
  .then(thirdTask)
  .then(console.log("All task completed"));

// 5. Transform the previous Promises exercise into an async/await function called executeTasks().
function waitPromise(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function executeTasks() {
  console.log("Starting tasks with async/await");

  await waitPromise(1000); // 1000 ms = 1 s
  console.log("First task completed");

  await waitPromise(2000); // 2000 ms = 2 s
  console.log("Second task completed");

  await waitPromise(1500); // 1500 ms = 1.5 s
  console.log("Third task completed");

  console.log("All task with async/await completed");
}

executeTasks();

async function executeTasks2() {
  console.log("Starting tasks with async/await");

  await firstTask(); // First task completed
  await secondTask(); // Second task completed
  await thirdTask(); // Third task completed

  console.log("All task with async/await completed");
}

// 6. Create a getUser(id) function that returns a promise and simulates an API call (taking 2s).
//    If the id is less than 5, the promise resolves to { id, name: "User " + id }.
//    If the id is 5 or greater, the promise is rejected with the message "User not found".
//    Use async/await to call getUser(id) and handle errors with try/catch.
async function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 5) {
        resolve({ id, name: "User " + id });
      } else {
        reject("User not found");
      }
    }, 2000); // 2000 ms = 2 s
  });
}

try {
  await getUser(4).then((result) => {
    console.log(result);
  }); // { id: 4, name: 'User 4' }

  await getUser(5).then((result) => {
    console.log(result);
  }); // ...
} catch (error) {
  console.log(error); // User not found
}

await getUser(4)
  .then((result) => {
    console.log(result); // { id: 4, name: 'User 4' }
  })
  .catch((error) => {
    console.log(error);
  });

await getUser(5)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error); // User not found
  });

async function fetchUser(id) {
  try {
    const user = await getUser(id);
    console.log(`User found: ${user}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

fetchUser(4); // { id: 4, name: 'User 4' } + User found: [object Object]
fetchUser(5); // User not found + Error: User not found

// 7. Try to predict the result of this code before running it in the console:
//    console.log("Home") // Home
//    setTimeout(() => console.log("setTimeout executed"), 0) // setTimeout executed (0 ms)
//    Promise.resolve().then(() => console.log("Promise resolved")) // Promise resolved (0 ms)
//    console.log("End") // End

console.log("Home"); // Home (1)
setTimeout(() => console.log("setTimeout executed"), 0); // setTimeout executed (4)
Promise.resolve().then(() => console.log("Promise resolved")); // Promise resolved (3)
console.log("End"); // End (2)

// 8. Create three functions that return promises with different wait times.
//    Then use Promise.all() to run them all at the same time and display "All promises resolved" when they finish.
function funcA() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("funcA resolved");
      resolve("funcA result");
    }, 400); // 400 ms = 0.4 s
  });
}

function funcB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("funcB resolved");
      resolve("funcB result");
    }, 500); // 500 ms = 0.5 s
  });
}

function funcC() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("funcC resolved");
      resolve("funcC result");
    }, 600); // 600 ms = 0.6 s
  });
}

Promise.all([funcA(), funcB(), funcC()]).then((results) => {
  console.log("All promises resolved");
  console.log("Results:", results); // Results: [ 'funcA result', 'funcB result', 'funcC result' ]
});

// 9. Create a waitSeconds(seconds) function that uses setTimeout inside a Promise to wait the given number of seconds.
//    Then use async/await to wait 3 seconds before displaying "Timeout" in the console.
function waitSeconds(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

async function countdown() {
  console.log("Waiting 3 seconds...");
  await waitSeconds(3);
  console.log("Waiting completed");
}

countdown();

// 10. Create an ATM simulation using async.
//    - The checkBalance() function takes 1s and returns a balance of $500.
//    - The withdrawMoney(amount) function takes 2s and withdraws money if there is enough balance, or returns an error if there are no funds.
//    - Use async/await to make the user try to withdraw $300 and then $300 more.
//
//    Possible expected output:
//    Available balance: $500
//    Withdrawing $300...
//    Successful operation, remaining balance: $200
//    Withdrawing $300...
//    Error: Insufficient funds
let balance = 500;

async function checkBalance() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Available balance: $${balance}`);
      resolve();
    }, 1000); // 1000 ms = 1 s
  });
}

async function withdrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (balance - amount >= 0) {
        console.log(`Withdrawing $${amount}...`);
        balance -= amount;
        checkBalance();
        resolve();
      } else {
        console.log(`Withdrawing $${amount}...`);
        reject("Insufficient funds");
      }
    }, 2000); // 2000 ms = 2 s
  });
}

try {
  await checkBalance(); // Available balance: 500
  await withdrawMoney(200); // Withdrawing $200... + Available balance: $300
  await withdrawMoney(200); // Withdrawing $200... + Available balance: $100
  await withdrawMoney(100); // Withdrawing $100... + Available balance: $0
  await withdrawMoney(100); // Withdrawing $100... + Error: Insufficient funds
} catch (error) {
  console.log("Error:", error);
}

// Another way to solve this JavaScript exercise
let accountBalance = 500;

function checkBalance2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(accountBalance);
    }, 1000); // 1000 ms = 1 s
  });
}

function withdrawMoney2(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount <= accountBalance) {
        accountBalance -= amount;
        resolve(accountBalance);
      } else {
        reject("Insufficient funds");
      }
    }, 2000); // 2000 ms = 2 s
  });
}

async function performTransaction() {
  try {
    const initialBalance = await checkBalance2();
    console.log(`Available balance: $${initialBalance}`);

    console.log("Withdrawing $300...");
    const balanceAfterFirst = await withdrawMoney2(300);
    console.log(
      `Successful operation. Available balance: $${balanceAfterFirst}`, // Successful operation. Available balance: $200
    );

    console.log("Withdrawing $300...");
    const balanceAfterSecond = await withdrawMoney2(300);
    console.log(
      `Successful operation. Available balance: $${balanceAfterSecond}`, // Error: Insufficient funds
    );
  } catch (error) {
    console.log("Error:", error); // Error: Insufficient funds
  }
}

performTransaction();
