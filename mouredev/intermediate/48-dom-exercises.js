// Intermediate JavaScript Course @mouredev
// Class 71 - DOM (Document Object Model) Exercises

// 1. Create an element (for example, a <h1 id="title">) and change its content to "Hello, JavaScript!" on page load
let myTitle = document.getElementById("title");
document.addEventListener("DOMContentLoaded", () => {
  myTitle.textContent = "Hello, JavaScript!";
});

// 2. Insert an image with id="myImage" and change its src attribute to another URL
let myImage = document.getElementById("myImage");
console.log(myImage.hasAttribute("src")); // true
myImage.setAttribute(
  "src",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png",
);
myImage.setAttribute("alt", "React_icon_svg");

// 3. Create a <div id="box"> without classes and add the highlight class when the page loads
let myBox = document.getElementById("box");
document.addEventListener("DOMContentLoaded", () => {
  myBox.classList.add("highlight");
});
console.log(myBox.classList); // DOMTokenList [value: ''] ...
console.log(typeof myBox.classList); // object

// 4. Create a paragraph with id="paragraph" and change its text color to gray
let myParagraph = document.getElementById("paragraph");
myParagraph.style.color = "gray";

// 5. Add a button that, when clicked, creates a new <li> element with the text "New element" and adds it to a list <ul id="list">
let listButton = document.getElementById("listButton");
let list = document.getElementById("list");

listButton.addEventListener("click", () => {
  let newListElement = document.createElement("li");
  newListElement.textContent = "New element";
  list.appendChild(newListElement);
});

// 6. Create a paragraph with id="deleteParagraph" and a button. Clicking the button removes the paragraph from the DOM
let deleteParagraph = document.getElementById("deleteParagraph");
let deleteParagraphButton = document.getElementById("deleteParagraphButton");

deleteParagraphButton.addEventListener("click", () => {
  deleteParagraph.remove();
});

// 7. Create a <div id="content"> with some text and replace its content with a <h2> with the message "New Content"
let divContent = document.getElementById("content");
divContent.innerHTML = "<h2>New Content</h2>";

// 8. Create a button with id="greetButton" and add an event that displays an alert with the message "Hello!" when clicking
let greetUserButton = document.getElementById("greetButton");
greetUserButton.addEventListener("click", () => {
  alert("Hello, @jdomingu19!");
});

// 9. Create a <input id="textInput"> and a <div id="result">. When writing to the input, the <div> should be updated showing what is typed
let textInput = document.getElementById("textInput");
let result = document.getElementById("result");

textInput.addEventListener("input", () => {
  result.innerText = textInput.value;
});

// 10. Create a button with id="backgroundButton" and when clicked, change the background color of the <body> to a different color
let backgroundButton = document.getElementById("backgroundButton");

backgroundButton.addEventListener("click", () => {
  document.body.style.background = "#191919";
  document.body.style.color = "#e8e8e8";
});
