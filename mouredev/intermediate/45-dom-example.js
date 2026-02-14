// Intermediate JavaScript Course @mouredev
// Class 69 - DOM (Document Object Model)

// 1. Modify page title
const myH1 = document.querySelector("h1");
myH1.textContent = "Hello, JavaScript!";

// 2. Create a paragraph
const newParagraph = document.createElement("p");

newParagraph.textContent = "This is a new paragraph.";
newParagraph.style.padding = "8px";

document.body.appendChild(newParagraph);
