// Intermediate JavaScript Course @mouredev
// Class 74 - Debugging @jdomingu19

// 1. Create code with a logical error and use VS Code to find it
let usersInfo = {
  1: { name: "Jesús", age: 21, alias: "@jdomingu19" },
  2: { name: "Adrià", age: 27, alias: "@adriàpastor" },
  3: { name: "Robin", age: 56, alias: "@robinsharma" },
};

console.table(usersInfo);
// ┌─────────┬─────────┬─────┬────────────────┐
// │ (index) │ name    │ age │ alias          │
// ├─────────┼─────────┼─────┼────────────────┤
// │ 1       │ 'Jesús' │ 21  │ '@jdomingu19'  │
// │ 2       │ 'Adrià' │ 27  │ '@adriàpastor' │
// │ 3       │ 'Robin' │ 56  │ '@robinsharma' │
// └─────────┴─────────┴─────┴────────────────┘

console.log(usersInfo); // { '1': ..., '2': ..., '3': ...,}
console.log(typeof usersInfo); // object
console.log(usersInfo.__proto__); // [Object: null prototype] {}
console.log(usersInfo.__proto__.constructor); // [Function: Object]
console.log(usersInfo.__proto__.constructor.name); // Object

console.log(usersInfo[1]); // { name: 'Jesús', age: 21, alias: '@jdomingu19' }
console.log(usersInfo[2]); // { name: 'Adrià', age: 27, alias: '@adriàpastor' }
console.log(usersInfo[3]); // { name: 'Robin', age: 56, alias: '@robinsharma' }
console.log(usersInfo[4]); // undefined

console.log(usersInfo[1].name); // Jesús
console.log(usersInfo[1].age); // 21
console.log(usersInfo[1].alias); // @jdomingu19

console.log(usersInfo[2].name); // Adrià
console.log(usersInfo[2].age); // 27
console.log(usersInfo[2].alias); //@adriàpastor

console.log(usersInfo[3].name); // Robin
console.log(usersInfo[3].age); // 56
console.log(usersInfo[3].alias); // @robinsharma

try {
  console.log(usersInfo[4].name); // Error
  console.log(usersInfo[4].age); // Error
  console.log(usersInfo[4].alias); // Error
} catch (error) {
  console.log(error); // TypeError: Cannot read properties of undefined (reading '...')
}

for (let i = 1; i <= 4; i++) {
  try {
    console.log(usersInfo[i].name);
    console.log(usersInfo[i].age);
    console.log(usersInfo[i].alias);
  } catch (error) {
    console.log(error); // TypeError: Cannot read properties of undefined (reading '...')
  }
}

// 2. Experiment with breakpoints and see how the execution flow changes

// 2.1 Breakpoints
// - 41
// - 51

// 2.2 Caught Exceptions
// - true

// 2.3 launch.json file
//  - folder: .vscode
//  - type: node.js
//  - "program": "${workspaceFolder}\\mouredev\\intermediate\\51-debugging-exercies.js"

// 2.4 Call Stack
//  - Continue
//  - Step Over
//  - Step Into
//  - Step Out
//  - Restart
//  - Stop
