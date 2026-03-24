# Hello, JavaScript! 👋🏻

![Static Badge](https://img.shields.io/badge/javascript-ES6+-1C2024?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/node.js-20+-1C2024?style=for-the-badge&logo=node.js&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/HTML-HTML5+-1C2024?style=for-the-badge&logo=html5&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/css-css3+-1C2024?style=for-the-badge&logo=css&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/bash-5.2.37+-1C2024?style=for-the-badge&logo=gnubash&logoColor=white&labelColor=101010)

**Learning JavaScript from Scratch!** This repository is a structured path to explore JavaScript fundamentals, intermediate concepts, and practical exercises. Each section is designed to reinforce learning through clear examples and reproducible code.

![header_hello_javascript](https://github.com/user-attachments/assets/6af5ca5d-721c-46fc-8857-05bcbb2a8ba9)

## ❔ What's JavaScript

> [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is a flexible programming language that brings interactivity to the web. It lets developers update content dynamically, respond to user actions, and connect with external services, making websites more engaging. As one of the three core web technologies, alongside HTML and CSS, JavaScript runs directly in the browser and works consistently across platforms.
> 
> JavaScript also extends beyond the browser with environments like Node.js, enabling developers to build backend systems and full-stack applications. Its ecosystem includes frameworks such as React, Angular, and Vue, which simplify development and improve productivity. With strong community support and continuous evolution, JavaScript remains a key tool for creating everything from small interactive features to large-scale applications.

## 🔤 JavaScript Code Example

```javascript
/**
 * Logs a message to the console with formatted output.
 * @param {Message} msg - The message object to log.
 */
function showMessage(msg) {
  console.log(`[${msg.timestamp.toISOString()}] ${msg.author}: ${msg.text}`);
}

/**
 * Represents a message object.
 * @typedef {Object} Message
 * @property {number} id - Unique identifier for the message.
 * @property {string} text - The content of the message.
 * @property {string} author - The author of the message.
 * @property {Date} timestamp - The time when the message was created.
 */
const greeting = {
  id: 1,
  text: "Hello, JavaScript!",
  author: "Jesús",
  timestamp: new Date(),
};

// Call function with message object
showMessage(greeting);
```

## 📖 JavaScript Technical Vocabulary

?

## 📁 Repository Content

### → [`w3schools/`](./w3schools/)

Introductory `HTML`, `CSS`, and `JavaScript` demos inspired by W3Schools tutorials.

Simple examples to practice `DOM manipulation` and `inline scripting`.

Foundation exercises to connect JavaScript with web standards.

### → [`mouredev/`](./mouredev/)

Comprehensive JavaScript fundamentals and intermediate exercises following Mouredev’s course material.

Covers a wide range of topics: `variables`, `datatypes`, `operators`, `strings`, `conditionals`, `arrays`, `sets`, `maps`, `loops`, `functions`, `objects`, `classes`, `modules`, `error handling`, `DOM`, `debugging`, `regex`, `testing`, and `asynchronous programming`.

Organized step‑by‑step with progressive examples, structured practice files, and documented exercises for consistent learning.

### → [`playground/`](./playground/)

Experimental space for exploring advanced JavaScript concepts.

Includes `prototype chains`, `class inheritance`, `operator behavior`, and `DOM manipulation`.

## 🎯 Repository Goals

Build a strong foundation by exploring syntax, core concepts, and practical exercises to fully understand the language.

Maintain a structured, reproducible workflow with clear documentation, commit discipline, and accessible examples.

Use this repository as a stepping stone to transition into `TypeScript`, `Node.js`, `React`, `React Native`, and `Expo`, aiming to create apps for `iOS`, `Android` and `Web`.

## 📝 License

This repository is licensed under the terms of the [Apache License 2.0](LICENSE). The license grants permission to use, modify, and distribute the code with proper attribution, while ensuring that improvements and extensions remain open and accessible to the community.

> Built with '\u{2665}' (♥) by Jesús Domínguez [@jdomingu19](https://github.com/jdomingu19/)
