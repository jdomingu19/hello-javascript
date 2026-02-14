// Intermediate JavaScript Course @mouredev
// Class 46 to 59 - APIs (Application Programming Interface)

// 1. REST APIs
// - API: interface that allows software systems to communicate
// - REST: architectural style for stateless client-server communication
// - HTTP: protocol used to transfer requests and responses
// - URLs: unique identifiers to locate resources on the web
// - JSON: lightweight format for structured data exchange

// 2. HTTP Methods
// - GET: request data from a resource
// - POST: send data to create a new resource
// - PUT: update or replace an existing resource
// - DELETE: remove a resource from the server

// 3. HTTP Response Codes
// - 200: OK, request succeeded
// - 201: Created, resource successfully created
// - 400: Bad Request, invalid client input
// - 404: Not Found, resource does not exist
// - 500: Internal Server Error, server failed to process request

// 4. Consume an API (https://jsonplaceholder.typicode.com)

// 4.1 GET with `.then()` and `.catch()`
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    // Transform response to JSON
    console.log(response); // Response { ... }
    console.log(typeof response); // object
    console.log(response.__proto__); // Object [Response] { ... }
    console.log(response.__proto__.constructor); // [class Response] { error: ..., json: ..., redirect: ... }
    console.log(response.__proto__.constructor.name); // Response
    return response.json();
  })
  .then((data) => {
    // Process data
    console.log(data); // { ... }
    console.log(typeof data); // object
    console.log(data.__proto__); // Object(0) []
    console.log(data.__proto__.constructor); // [Function: Array]
    console.log(data.__proto__.constructor.name); // Array
  })
  .catch((error) => {
    // Catch errors
    console.log("Error:", error);
  });

// 4.2 GET with async/await
async function getAPIPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    console.log(response); // Response { ... }
    console.log(typeof response); // object
    console.log(response.__proto__); // Object [Response] { ... }
    console.log(response.__proto__.constructor); // [class Response] { error: ..., json: ..., redirect: ... }
    console.log(response.__proto__.constructor.name); // Response

    console.log(data); // { ... }
    console.log(typeof data); // object
    console.log(data.__proto__); // Object(0) []
    console.log(data.__proto__.constructor); // [Function: Array]
    console.log(data.__proto__.constructor.name); // Array
  } catch (error) {
    console.log("Error:", error);
  }
}

getAPIPosts();

// 4.4 POST with async/await
async function createAPIPost() {
  try {
    const newPost = {
      userId: 1,
      title: "This is some awesome title",
      body: "This is some awesome body",
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    const data = await response.json();

    console.log(response); // Response { ... }
    console.log(typeof response); // object
    console.log(response.__proto__); // Object [Response] { ... }
    console.log(response.__proto__.constructor); // [class Response] { error: ..., json: ..., redirect: ... }
    console.log(response.__proto__.constructor.name); // Response

    console.log(data); // { ... }
    console.log(typeof data); // object
    console.log(data.__proto__); // Object(0) []
    console.log(data.__proto__.constructor); // [Function: Array]
    console.log(data.__proto__.constructor.name); // Array
  } catch (error) {
    console.log("Error:", error);
  }
}

createAPIPost();

// 4.5 Tools to make HTTP requests
// - https://postman.com
// - https://apidog.com
// - https://thunderclient.com

// 4.6 Error handling
fetch("https://jsonplaceholder.typicode.com/jdomingu19")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Status HTTP: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    console.log(error); // Error: Status HTTP: 404
  });

// 4.7 Additional HTTP Methods
// - PATCH: apply partial modifications to an existing resource
// - OPTIONS: request information about the communication options
//            available for a resource (e.g., supported methods, CORS)

// 4.8 PATCH with async/await
async function partialPostUpdate() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/10",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: "This a new title" }),
      },
    );

    const data = await response.json();

    console.log(response); // Response { ... }
    console.log(typeof response); // object
    console.log(response.__proto__); // Object [Response] { ... }
    console.log(response.__proto__.constructor); // [class Response] { error: ..., json: ..., redirect: ... }
    console.log(response.__proto__.constructor.name); // Response

    console.log(data); // { ... }
    console.log(typeof data); // object
    console.log(data.__proto__); // Object(0) []
    console.log(data.__proto__.constructor); // [Function: Array]
    console.log(data.__proto__.constructor.name); // Array
  } catch (error) {
    console.log("Error:", error);
  }
}

partialPostUpdate();

// 4.9 Authentication via API Key
async function getWeather(city) {
  // https://openweathermap.org
  const apiKey = "YOUR_API_KEY";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(response); // Response { ... }
    console.log(typeof response); // object
    console.log(response.__proto__); // Object [Response] { ... }
    console.log(response.__proto__.constructor); // [class Response] { error: ..., json: ..., redirect: ... }
    console.log(response.__proto__.constructor.name); // Response

    console.log(data); // { ... }
    console.log(typeof data); // object
    console.log(data.__proto__); // [Object: null prototype] {}
    console.log(data.__proto__.constructor); // [Function: Object]
    console.log(data.__proto__.constructor.name); // Object
  } catch (error) {
    console.log("Error:", error);
  }
}

getWeather("Barcelona");

// 4.10 Other Authentication and Authorization Methods
// - Bearer Tokens: access tokens sent in the HTTP Authorization header
//                  to authenticate requests; usually short-lived.
// - JWT: JSON Web Token, a compact and self-contained format that
//        securely transmits claims between client and server; often
//        used for stateless authentication.

// 4.11 API versioning
// - https://api.example.com/v1/resources
// - https://api.example.com/v2/resources

// 4.12 Using a PokeApi
async function getPokemon(pokemon) {
  // https://pokeapi.co
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(`${data.name}'s abilities`);
    data.abilities.forEach((ability) => {
      console.log(ability.ability.name);
    });
  } catch (error) {
    console.log("Error:", error);
  }
}

getPokemon("cubone"); // rock-head, lightning-rod, battle-armor
