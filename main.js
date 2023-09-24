async function getPokemon() {
    for (let i = 1; i <= 20; i++) {
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
            type: pokemonData.types
        }
        console.log(pokemon);
    }



    // displayPokemon()
}

getPokemon();

// async function displayPokemon (){
//     pokemonData.forEach (pokemonData)
//         console.log(pokemonData.name)

// }