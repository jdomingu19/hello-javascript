// Intermediate JavaScript Course @mouredev
// Class 61 to 68 - DOM (Document Object Model)

// 1. DOM management
console.log(document); // window.document returns a reference to the document contained in the window.

// 2. Elements selection

// 2.1 Basic methods (HTML Selectors)
const myElementById = document.getElementById("id"); // Returns the first element within node's descendants whose ID is elementId.

const myElementsByClass = document.getElementsByClassName("class"); // Return all child elements which have all of the given class name(s).

const myElementsByTag = document.getElementsByTagName("tag"); // Returns an HTMLCollection of elements with the given tag name.

// 2.2 Modern methods (CSS Selectors)
document.querySelector(".paragraph"); // Returns the first element that is a descendant of node that matches selectors.
document.querySelectorAll(".paragraph"); // Returns all element descendants of node that match selectors.

// 3. Elements manipulation
const title = document.getElementById("title");
title.textContent = "Hello, JavaScript!";

const container = document.querySelector(".container");
container.innerHTML = "<p>This is a new paragraph</p>";

// 4. Modifying element attributes

// 4.1 Get element attribute
const link = document.querySelector("a");
const linkUrl = link.getAttribute("href");

// 4.2 Set new attribute value
link.setAttribute("href", "https://jdomingu19.dev");

// 4.3 Attribute check
const hasTarget = link.hasAttribute("target");

// 4.4 Attribute removal
link.removeAttribute("target");

// 5. Iteration with CSS classes
const box = document.querySelector(".box");
box.classList.add("selected");
box.classList.remove("selected");
box.classList.toggle("selected");

const button = document.querySelector("button");
button.style.backgroundColor = "black";
button.style.color = "white";
button.style.padding = "10px";

// 6. Creating and deleting elements

// 6.1 Create an element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph, created from JavaScript!";
newParagraph.style.padding = "8px";

const itemsList = document.querySelector("ul");
const newItem = document.createElement("li");
newItem.textContent = "New element";

// 6.2 Insert an element
container.append(newParagraph);

const secondItem = itemsList.children[1];
itemsList.insertBefore(newItem, secondItem);

itemsList.append(newItem); // Inserts nodes after the last child of node
itemsList.prepend(newItem); // Inserts nodes before the first child of node
itemsList.before(newItem); // Inserts nodes just before node
itemsList.after(newItem); // Inserts nodes just after node

// 6.3 Delete an element
newParagraph.remove();

// 6.4 Traditional element delete
const parent = newParagraph.parentElement;
parent.removeChild(newParagraph);

// 7. DOM elements

// 7.1 alert()
function showMessage() {
  alert("Hello, JavaScript! (basic function)");
}

const sendButton = document.querySelector("#send");
sendButton.addEventListener("click", showMessage);

sendButton.addEventListener("click", () => {
  alert("Hello, JavaScript! (arrow function)");
});

// 7.2 DOM common events
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is fully loaded");
});

sendButton.addEventListener("mouseenter", () => {
  sendButton.style.backgroundColor = "green";
});

sendButton.addEventListener("mouseleave", () => {
  sendButton.style.backgroundColor = "blue";
});

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  console.log("Do something", event);
});
