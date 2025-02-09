// const pokemonList = document.querySelector(".pokemon__list")

// function fetchPromise(URL) {
//   return new Promise(
//     function(resolve) {
//       fetch(URL)
//       .then (
//         function(reponse) {
//           const promises = reponse.json()
//           resolve(promises)
//         }
//       )
//       .catch(function(error) {
//         console.log(error)
//         pokemonList.innerHTML = "wrong!!!"
//       })
//     }
//   )
// }

// let offset = 0
// const limit = 5
// let pokemons = []
// fetchPromise('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898')
// .then(
//   function(value) {
//     pokemonList.innerHTML = ''
//     pokemons = value.results
//     render()
//   }
// )

// function render() {
//   const renderLimit = offset + limit
//   for( ; offset < renderLimit ; offset++){
//     const pokemon = pokemons[offset]
//     const div = document.createElement('div')
//     div.innerText = pokemon.name
//     pokemonList.appendChild(div)
//   }
// }

// const button = document.querySelector(".btn")
// button.addEventListener('click', render)

// function renderImages(){
//   let Imgs = ""
//   for(let i = 0; i  < dataPokemon.results.length ; i++){
//     Imgs += ` 
//     <div class="pokemon">
//       <div class="id" > #${i+1} </div>
//       <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png">
//       <div class="name" > ${dataPokemon.results[i].name}</div>
//     </div> `
//   }
//   pokemonList.innerHTML = Imgs
// }


const app = document.querySelector('#app')
const button = document.querySelector('button')
const input = document.querySelector('input')

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
const limit = 5
let pokemons = JSON.parse(localStorage.getItem('pokemonsData'))
let filteredPokemon = pokemons
let pokemonType = []

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
        const pokemon = filteredPokemon[offset]
        if (!pokemon) {
            button.style.display = 'none'
            break
        } else {
            button.style.display = 'block'
        }
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