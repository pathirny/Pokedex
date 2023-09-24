async function getPokemon() {

    let pokemonArray = [];
    for (let i = 1; i <= 150; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        
        if (!response.ok) {
            console.error(`Status: ${response.status}`);
            console.error(`Text: ${await response.text()}`);
        } 

        const pokemonData = await response.json();

        let pokemon = {
            name: pokemonData.name,
            image: pokemonData.sprites.front_default,
            id: pokemonData.id,
            type: pokemonData.type
        }
        // console.log(pokemon);
    
        pokemonArray.push(pokemon);
    }
    displayPokemon(pokemonArray)
}

getPokemon();

 async function displayPokemon (pokemonArray){
    let pokedex = document.getElementById("pokedex");

            const pokemonInfo = pokemonArray.map((pokemonArray) =>  `
            <li class="card" style="padding: 2%;margin: 2%;list-style-type: none;">
            <img class="card-image" src="${pokemonArray.image}"/>
            <h2 class="card-title"> ${pokemonArray.name}</h2>
            <p class="card-subtitle">Type: ${pokemonArray.type}</p>
        </li>
      `
            )

        pokedex.innerHTML = pokemonInfo;

 }