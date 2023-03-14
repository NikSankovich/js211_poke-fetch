window.onload = function () {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
        .then(response => response.json())
        .then(response => console.log(response))
}
const button = document.getElementById('button')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('fight-button')
const container = document.getElementById('container')
const pokemon1 = { name: null, power: null }
const pokemon2 = { name: null, power: null }


button.addEventListener('click', () => {
    // textOutput.innerText = numOfRampsBelow(userInput.value)
    firstPokemon()
})
button2.addEventListener('click', () => {
    // textOutput.innerText = numOfRampsBelow(userInput.value)
    secondPokemon()
})

button3.addEventListener('click', () => {
    let pokemonWinner = pokeBattle(pokemon1, pokemon2)
    let winner = document.getElementById('winner')
    let winnerDiv = document.getElementById('winner-div')
    winner.innerHTML = `${pokemonWinner.name}`
    winnerDiv.style.display = "block"
})


const firstPokemon = () => {
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            let content = document.createElement("div")
            content.innerHTML = `
            <h2>${response.name}</h2>
            <img src="${response.sprites.front_default}"/>
            <h3>Type: ${response.types[0].type.name}</h3>
            <h3>Attack: ${response.stats[1].base_stat}</h3>
            <h3>Defense: ${response.stats[2].base_stat}</h3>
            <h3>Ability: ${response.abilities[0].ability.name}</h3>

            `
            pokemon1.name = response.name
            pokemon1.power = response.stats[1].base_stat

            container.appendChild(content)
        })
        .catch(err => console.error(err))
}

const secondPokemon = () => {
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            let content = document.createElement("div")
            content.innerHTML = `
            <h2>${response.name}</h2>
            <img src="${response.sprites.front_default}"/>
            <h3>Type: ${response.types[0].type.name}</h3>
            <h3>Attack: ${response.stats[1].base_stat}</h3>
            <h3>Defense: ${response.stats[2].base_stat}</h3>
            <h3>Ability: ${response.abilities[0].ability.name}</h3>

            `

            pokemon2.name = response.name
            pokemon2.power = response.stats[1].base_stat

            container.appendChild(content)
        })
        .catch(err => console.error(err))
}

const pokeBattle = (pokemon1, pokemon2) => {
    if (pokemon1.power > pokemon2.power) {
        return pokemon1
    } else {
        return pokemon2
    }


}