const cards = document.querySelector(".cards")
let offset = 0
async function pokemonData() {
  const response = await
  fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=54`)
  const jsonData = await response.json();
  jsonData.results.forEach(pokemon => {
    fetch(`${pokemon.url}`)
    .then(response => response.json())
    .then(pokemonData => {

    const cards = document.querySelector(".cards")
    const card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = `
    <div class="image-container">
      <span class="circle"></span>
      <img src="${pokemonData.sprites.other['official-artwork'].front_default}" alt="" class="pokemon-img">
    </div>
    <h4 class="id">${pokemonData.id}</h4>
    <h2 class="name">${pokemonData.name}</h2>
    <p class="type">Type: ${pokemonData.types[0].type.name}</p>`
    cards.appendChild(card)
      const colors = {
        fire: "#FDDFDF",
        grass: "#DEFDE0",
        electric: "#FCF7DE",
        water: "#DEF3FD",
        ground: "#f4e7da",
        rock: "#d5d5d4",
        fairy: "#fceaff",
        poison: "#98d7a5",
        bug: "#f8d5a3",
        dragon: "#97b3e6",
        psychic: "#eaeda1",
        flying: "#F5F5F5",
        fighting: "#E6E0D4",
        normal: "#F5F5F5"
      }

      card.style.backgroundColor = colors[pokemonData.types[0].type.name]
    })
  });
}

pokemonData()

const next = document.querySelector(".next")

next.addEventListener("click", () => {
  cards.innerHTML = ""
  offset += 54
  pokemonData()
})

const previous = document.querySelector(".previous")

previous.addEventListener("click", () => {
  cards.innerHTML = ""
  offset -= 54
  pokemonData()
})
