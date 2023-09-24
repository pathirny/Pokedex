let pokedex = document.getElementById("pokedex");

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
            type: pokemonData.types[0].type.name
        }
        // console.log(pokemon);
    
        pokemonArray.push(pokemon);
    }
    displayPokemon(pokemonArray)
    searchPokemon();
}

getPokemon();

 async function displayPokemon (pokemonArray){


            const pokemonInfo = pokemonArray.map((pokemonArray) =>  `
            <li class="card" style="padding: 2%;margin: 2%;list-style-type: none;">
            <img class="card-image" src="${pokemonArray.image}"/>
            <h2 class="card-title"> ${pokemonArray.name.charAt(0).toUpperCase() + pokemonArray.name.slice(1)}</h2>
            <p class="card-subtitle">Type: ${pokemonArray.type.charAt(0).toUpperCase() + pokemonArray.type.slice(1)}</p>
        </li>
      `
            ).join(' ')

        pokedex.innerHTML = pokemonInfo;
 }

 async function searchPokemon(){
    let search = document.getElementById("searchbar").value;
    search = search.toLowerCase();
    let pokemonX = document.getElementsByClassName("card");

    for (let i= 0; i < pokemonX.length; i++){
        if(!pokemonX[i].innerHTML.toLowerCase().includes(search)){
            pokemonX[i].style.display = "none";
        } else {
            pokemonX[i].style.display = "list-item"
        }
    }
 }