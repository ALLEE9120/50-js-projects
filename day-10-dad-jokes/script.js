const laugh = document.querySelector('.laugh')
const joke = document.querySelector('.haha')
const reroll = document.querySelector('.reroll')

function getJoke() {
  fetch('https://icanhazdadjoke.com/', {
    headers: { accept: 'application/json' }
  })
  .then(response => response.json())
  .then(data => joke.innerHTML = data.joke)
}

function newjoke() {
  let reaction = Math.trunc(Math.random() * 100)
  laugh.innerHTML = `💀 ${reaction}`

  laugh.addEventListener('click', () => {
    reaction = reaction + 1
    laugh.innerHTML = `💀 ${reaction}`
    laugh.disabled = true
  })
}

reroll.addEventListener('click', () => {
  getJoke()


  newjoke()
  laugh.disabled = false
})

getJoke()
newjoke()
