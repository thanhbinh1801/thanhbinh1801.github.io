(
  async function(){
    const app = document.querySelector(".pokemon__list")
    const button = document.querySelector("button")
    const input = document.querySelector("input")
    let offset = 0
    let limit = 36
    let filteredPokemon = []

    function createPokemonType(types){
      return types.map( function(poke) {
        return  ` <div class="${poke.type.name}"> ${poke.type.name} </div> `
      }).join('')
    }

    function createPokemonElement(pokemon){
      const pokemonElement = document.createElement('div')
      pokemonElement.classList.add('pokemon')

      pokemonElement.innerHTML =`
        <div class="id">#${pokemon.id}</div>
        <img src ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.id}">
        <div class="name">${pokemon.name}</div>
        <div class="type">
          ${createPokemonType(pokemon.types)}</div>
      `
      return pokemonElement
    }
    async function cFetch(URL){
      try{
        const promise = await fetch(URL)
        const result = await promise.json()
        return result
        console.log("fetch")
      }
      catch (error) {
        console.log("error")
      }
    }

    function createPokemonList() {
      const pokemonPromise = []
      for( ;offset < limit ; offset++){
        const pokemon = filteredPokemon[offset]
        if(!pokemon){
          button.style.display ="none"
          break
        }
        const promise = cFetch(pokemon.url)
        pokemonPromise.push(promise)
      }
      return pokemonPromise
    }
    
   const { results: pokemons } = await cFetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898");
   console.log("fetch")
   filteredPokemon = pokemons

    async function render(){
      button.style.display = "block"
      const pokeData =  await Promise.all(createPokemonList())
      pokeData.forEach( pokemon => {
        const element = createPokemonElement(pokemon)
        app.appendChild(element)
      })
      limit +=36
    }

      app.innerHTML =''
      render()

      button.addEventListener('click', render)
      input .addEventListener('input', function() {
        const searchText = input.value.toLowerCase()
        filteredPokemon = pokemons.filter(function(pokemon) {
          return pokemon.name.includes(searchText)
        })
        if(filteredPokemon.length == 0){
          button.style.display ="none"
          app.innerHTML="No pokemon matched with " + "`" + input.value + "`";
          return
        }
        app.innerHTML=''
        console.log(filteredPokemon)
        offset = 0
        limit = 36
        render()
      })
  }
)()