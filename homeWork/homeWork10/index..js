const app = document.querySelector('.poke__list')
const button = document.querySelector('.btn')
const input = document.querySelector('.search')

function fetchPromise(URL) {
    return new Promise(
        function(resolve) {
            fetch(URL)
            .then(
                function(response) {
                    const promise = response.json()
                    resolve(promise)
                }
            )
            .catch(function(error) {
                console.log(error)
                app.innerHTML = 'Oh no! Some thing went wrong.'
            })
        }
    )
}

let offset = 0
const limit = 36
let pokemons = JSON.parse(localStorage.getItem('pokemonsData'))
let filteredPokemon = pokemons
let pokemonType = []

const getIdPokemon = (arr) => {
    const result = arr.find(item => item !== '' && !isNaN(Number(item)));
    return result ? Number(result) : null;
  };

if (pokemons && Array.isArray(pokemons) && pokemons.length) {
    render()
} else {
    fetchPromise('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898')
        .then(
            function(value) {
                app.innerHTML = ''
                pokemons = value.results
                filteredPokemon = value.results

                localStorage.setItem('pokemonsData', JSON.stringify(pokemons))

                return Promise.all(pokemonType)
            }
        )
        .then(results => {
            // DO SOMETHING TO RESULT

            render()
        })
}

function render() {
    const renderLimit = offset + limit
    for (; offset < renderLimit; offset++) {
        const pokemon = data[offset];
        const urlSplit = pokemon.url.split('/');
        const pokemonId = getIdPokemon(urlSplit);
        const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
        const pokeImg = document.createElement("img");
        pokeImg.src = imgSrc;
        const pokeItem = document.createElement("div");
        pokeItem.classList.add("poke__item");
        const pokeId = document.createElement("div");
        pokeId.innerHTML = `${pokemonId}`;
        const pokeName = document.createElement("div");
        pokeName.innerHTML = `${pokemon.name}`;
        pokeItem.appendChild(pokeId);
        pokeItem.appendChild(pokeImg);
        pokeItem.appendChild(pokeName);
        pokemonType.push(
            fetchPromise(pokemon.url)
        )


        const div = document.createElement('div')
        div.innerText = pokemon.name
        app.appendChild(div)
    }
}

button.addEventListener('click', render)


input.addEventListener('input', function() {
    offset = 0
    app.innerHTML = ''
    filteredPokemon = pokemons.filter(
        function(pokemon) {
            return pokemon.name.includes(input.value)
        }
    )
    render()
})

Promise.all(pokemonType)
.then(results => {
    console.log(results)
    results.forEach(pokemon => {
        console.log(pokemon.types)
    })
})