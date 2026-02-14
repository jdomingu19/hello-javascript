// Intermediate JavaScript Course @mouredev
// Class 60 - APIs (Application Programming Interface) Exercises

// 1. Make a GET request with fetch() to JSONPlaceholder and display the list of posts in the console
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data); // [ ... ]
    console.log(typeof data); // object
  });

// 2. Modify the previous exercise so that it checks if the response is correct using response.ok. If it is not, launch and show an error
fetch("https://jsonplaceholder.typicode.com/posts-abc")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP status code: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // [ ... ]
    console.log(typeof data); // object
  })
  .catch((error) => {
    console.log(error); // Error: HTTP status code: 404
  });

// 3. Rewrite exercise 1 using async/await syntax instead of promises
async function getJSONPlaceholder() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    console.log(response); // Response { ... }
    console.log(typeof response); // object

    console.log(data); // [ ... ]
    console.log(typeof data); // object
  } catch (error) {
    console.log(error);
  }
}

getJSONPlaceholder();

// 4. Make a POST request to JSONPlaceholder to create a new post. Send an object with properties like title or body
async function postJSONPlaceholder() {
  try {
    const newPost = {
      userId: 26,
      title: "My awesome title",
      body: "My awesome body",
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    console.log(response); // Response { status: 201, statusText: 'Created', ... }
    console.log(typeof response); // object

    const data = await response.json();

    console.log(data); // { userId: ..., title: ..., body: ..., id: ...}
    console.log(typeof data); // object
  } catch (error) {
    console.log(error);
  }
}

postJSONPlaceholder();

// 5. Use the PUT method to completely update a resource (for example, modify a post) in JSONPlaceholder
async function putJSONPlaceholder() {
  try {
    const updatedPost = {
      userId: 10,
      title: "My awesome title",
      body: "My awesome body",
    };

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/10",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPost),
      },
    );
    console.log(response); // Response { status: 200, statusText: 'OK', ... }
    console.log(typeof response); // object

    const data = await response.json();

    console.log(data); // { userId: ..., title: 'My awesome title', body: 'My awesome body', id: ...}
    console.log(typeof data); // object
  } catch (error) {
    console.log(error);
  }
}

putJSONPlaceholder();

// 6. Make a PATCH request to modify only one or two fields of an existing resource
async function patchJSONPlaceholder() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/10",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: "My awesome title!" }),
      },
    );

    console.log(response); // Response { status: 200, statusText: 'OK', ... }
    console.log(typeof response); // object

    const data = await response.json();

    console.log(data); // { userId: ..., id: ..., title: 'My awesome title!', body: ..., }
    console.log(typeof data); // object
  } catch (error) {
    console.log(error);
  }
}

patchJSONPlaceholder();

// 7. Send a DELETE request to the API to delete a resource (for example, a post) and check the response
async function deleteJSONPlaceholder() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/10",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    console.log(response); // Response { status: 200, statusText: 'OK', ... }
    console.log(typeof response); // object

    const data = await response.json();

    console.log(data); // { userId: 10, id: ..., title: ..., body: ..., }
    console.log(typeof data); // object
  } catch (error) {
    console.log(error);
  }
}

deleteJSONPlaceholder();

// 8. Create a function that makes a GET request (whatever you want) to OpenWeatherMap
async function getOpenWeatherMap(city) {
  // https://openweathermap.org
  const apiKey = "YOUR_API_KEY";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(response); // Response { status-, 401, statusText: 'Unauthorized', ... }
    console.log(typeof response); // object

    console.log(data); // { cod: 401, message: 'Invalid API key. Please see https://openweathermap.org/faq#error401 for more info.' }
    console.log(typeof data); // object
  } catch (error) {
    console.log(error);
  }
}

getOpenWeatherMap("Barcelona");

// 9. Use the PokéAPI to obtain the data of a specific Pokemon, then the details of the species and, finally, the evolutionary chain from the species
async function getPokemonInfo(pokemon) {
  // https://pokeapi.co
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  try {
    const response = await fetch(url);
    const pokemonData = await response.json();

    console.log(response); // Response { status: 200, statusText: 'OK', ... }
    console.log(typeof response); // object

    console.log(pokemonData); // { ... }
    console.log(typeof pokemonData); // object

    if (!response.ok) {
      throw new Error(`Pokemon ${pokemon} not found`);
    }

    let pokemonAbilities = [];
    pokemonData.abilities.forEach((ability) => {
      pokemonAbilities.push(ability.ability.name);
    });
    console.log(`${pokemonData.name}'s abilities: ${pokemonAbilities}`); // [ 'rock-head', 'lightning-rod', 'battle-armor' ]
    console.log(`${pokemonData.name}'s height: ${pokemonData.height}`); //4
    console.log(`${pokemonData.name}'s weight: ${pokemonData.weight}`); // 65
    console.log(`${pokemonData.name}'s species: ${pokemonData.species.name}`); // cubone

    // Paso 2: Obtener los detalles de la especie
    const speciesUrl = pokemonData.species.url;
    const speciesResponse = await fetch(speciesUrl);
    const speciesData = await speciesResponse.json();

    console.log(`${pokemonData.name}'s species details`);
    const spanishDescription = speciesData.flavor_text_entries.find(
      (entry) => entry.language.name === "en",
    );
    console.log(
      `English description: ${spanishDescription ? spanishDescription.flavor_text : "Not available in English"}`,
    );

    const evolutionChainUrl = speciesData.evolution_chain.url;
    const evolutionChainResponse = await fetch(evolutionChainUrl);
    const evolutionChainData = await evolutionChainResponse.json();

    console.log(`${pokemonData.name}'s evolution chain:`);

    let evolutionChainArray = [];
    let currentEvolution = evolutionChainData.chain;

    do {
      evolutionChainArray.push({
        name: currentEvolution.species.name,
        min_level: currentEvolution.evolution_details[0]?.min_level || 1,
      });

      currentEvolution = currentEvolution.evolves_to[0];
    } while (currentEvolution && currentEvolution.hasOwnProperty("evolves_to"));

    evolutionChainArray.forEach((evo, index) => {
      if (index === 0) {
        console.log(`Basic form: ${evo.name}`);
      } else {
        console.log(`Evolves to: ${evo.name} (level ${evo.min_level || "?"})`);
      }
    });
  } catch (error) {
    console.log("Error:", error);
  }
}

getPokemonInfo("cubone");

// 10. Use a tool like Postman or Thunder Client to test different endpoints of an API
// - GET https://pokeapi.co/api/v2/pokemon/cubone/
// - GET https://pokeapi.co/api/v2/pokemon-species/104/
// - GET https://pokeapi.co/api/v2/type/5/
// - GET https://pokeapi.co/api/v2/ability/69/
