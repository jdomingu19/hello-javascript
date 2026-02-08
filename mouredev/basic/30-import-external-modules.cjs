// JavaScript Course from Scratch @mouredev
// Class 44 - Import External Modules

// .cjs - CommonJS, the classic Node.js module system

// 1. Use 'os' module with CommonJS
const os = require("os");

console.log(os.platform()); // e.g. win32
console.log(os.arch()); //  e.g. x64
console.log(os.totalmem()); //  e.g. 16893386752
console.log(os.freemem()); //  e.g. 6447136768
