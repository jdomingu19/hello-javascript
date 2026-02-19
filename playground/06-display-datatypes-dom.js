// Hello, JavaScript! @jdomingu19
// Playground: Display datatypes in the DOM

// 1. Declare variables with primitive values

// 1.1 String literal
let myString = "Hello, JavaScript!";

// 1.2 Numeric literals
let myNumber1 = 19;
let myNumber2 = 19.26;

// 1.3 BigInt literals
let myBigInt1 = 1231234567890123456789012345n;
let myBigInt2 = BigInt(1231234567890123456789012345n);

// 1.4 Boolean values
let myBoolean1 = true;
let myBoolean2 = false;

// 1.5 Object literal
let myObject = {
  name: "Jesús",
  age: 21,
  alias: "@jdomingu19",
};

// 1.6 Undefined variable
let myUndefined;

// 1.7 Symbol instance
let mySymbol = Symbol("Symbol123");

// 1.8 Null value
let myNull = null;

// 2. Render datatypes in the DOM

// 2.1 Build an array of objects with variable metadata
let variablesArray = [
  { name: "myString", value: myString },
  { name: "myNumber1", value: myNumber1 },
  { name: "myNumber2", value: myNumber2 },
  { name: "myBigInt1", value: myBigInt1 },
  { name: "myBigInt2", value: myBigInt2 },
  { name: "myBoolean1", value: myBoolean1 },
  { name: "myBoolean2", value: myBoolean2 },
  { name: "myObject", value: myObject },
  { name: "myUndefined", value: myUndefined },
  { name: "mySymbol", value: mySymbol },
  { name: "myNull", value: myNull },
];

// 2.2 Reference table element from DOM
let myTable = document.getElementById("myTable");

// 2.3 Function to append variable info as a table row
function addVariableInfoToTable(table, variableName, variableValue) {
  // 2.4 Collect variable metadata into an object
  variableInfoObject = {
    variable: variableName,
    value: variableValue !== null ? variableValue : "null",
    typeOf: typeof variableValue,
    constructorName:
      typeof variableValue !== "undefined" && variableValue !== null
        ? variableValue.__proto__.constructor.name
        : "?",
  };

  // 2.5 Create table row element
  variableTableRow = document.createElement("tr");

  // 2.6 Iterate over metadata object values
  for (const element of Object.values(variableInfoObject)) {
    // 2.7 Create and append table cell
    temporalNode = document.createElement("td");
    temporalNode.innerHTML =
      typeof element !== "symbol" ? element : element.toString();
    variableTableRow.appendChild(temporalNode);
  }

  // 2.8 Append row to table
  table.appendChild(variableTableRow);
}

// 2.9 Iterate variables array and render each entry
for (const variableObject of variablesArray) {
  addVariableInfoToTable(myTable, variableObject.name, variableObject.value);
}
