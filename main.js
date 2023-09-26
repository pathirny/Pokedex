//declare the pokedex variable
let pokedex = document.getElementById("pokedex");
//function which fetches the API
async function getPokemon() {

    let pokemonArray = [];
    //loop which iterates over 150 pokemon (gen 1) from the API (this can be changed but affected the loading speed)
    for (let i = 1; i <= 150; i++) {
    //saves the api request to response
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
// handle if API request fails
        if (!response.ok) {
            console.error(`Status: ${response.status}`);
            console.error(`Text: ${await response.text()}`);
        } 
//stores the response json object in pokemonData variable
        const pokemonData = await response.json();
//pokemon object which stores the data i want to share in the pokedex
        let pokemon = {
            name: pokemonData.name,
            image: pokemonData.sprites.front_default,
            id: pokemonData.id,
            type: pokemonData.types[0].type.name
        }
        // console.log(pokemon);
// this pushes the data from the pokemon object to the pokemonArray
        pokemonArray.push(pokemon);
    }
    displayPokemon(pokemonArray)
    searchPokemon();
}

getPokemon();
//function which displays the pokemon on the webpage
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
//search function which looks for the value from the search box
 async function searchPokemon(){
    let search = document.getElementById("searchbar").value;
//search input to lowercase
    search = search.toLowerCase();
    let pokemonX = document.getElementsByClassName("card");
//loop which iterates over every pokemon on the make and chages the display if the pokemon matches the search input
    for (let i= 0; i < pokemonX.length; i++){
        if(!pokemonX[i].innerHTML.toLowerCase().includes(search)){
            pokemonX[i].style.display = "none";
        } else {
            pokemonX[i].style.display = "list-item"
        }
    }
 }