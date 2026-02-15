// Intermediate JavaScript Course @mouredev
// Class 70 - DOM (Document Object Model)

// 1. Select DOM elements by ID
const text = document.getElementById("text");
const button = document.getElementById("button");
const todoList = document.getElementById("todoList");

function addToDo() {
  // 2. Validate input is not empty
  if (text.value === "") return;

  // 3. Create a new list item element
  const newElement = document.createElement("li");

  // 4. Assign user input as text content
  newElement.textContent = text.value;

  // 5. Add click event to remove the item
  newElement.addEventListener("click", () => {
    newElement.remove();
  });

  // 6. Append the new item to the list
  todoList.appendChild(newElement);

  // 7. Clear the input field after adding
  text.value = "";
}

// 8. Add click event to button to trigger addToDo
button.addEventListener("click", addToDo);

// 9. Add keypress event to input to trigger addToDo on Enter
text.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addToDo();
  }
});
