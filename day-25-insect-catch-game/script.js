const play = document.querySelector('.play');
const page1 = document.querySelector('.page1');

play.addEventListener('click', () => {
  page1.classList.add('next')
  page2.classList.add('active')
})

const page2 = document.querySelector('.page2');
const rappers = document.querySelectorAll('.rapper');

rappers.forEach(rapper => {
  rapper.addEventListener('click', () => {
    page2.classList.add('next');
    rapper.classList.add('active');
    page3.classList.add('active');
    const img = rapper.querySelector('img')
    const src = img.getAttribute('src')
    const alt = img.getAttribute('alt')
    const selected_rapper = {src, alt}
    console.log()
    startGame()
    setTimeout(() => {
      createRapper(selected_rapper)
    }, 1000);
  })
})

const page3 = document.querySelector('.page3');
const score = document.querySelector('.score');
const timer = document.querySelector('.timer');
let timerS = 0
let timerM = 0

function startGame() {
  const newinterval = setInterval(() => {
    timerS += 1
    if (timerS > 59) {
      timerS = 0
      timerM += 1
    }
    timer.innerHTML = `<h1>Time: <span class="timerNum">${(timerS > 9) ? '0' + timerM + ':' + timerS : '0' + timerM + ':' + '0' + timerS}s</span></h1>`
  }, 1000);
}

let scoreS = 0

function createRapper(selected_rapper) {
  const rapper = document.createElement('div')
  rapper.classList.add('item')
  const img = document.createElement('img')
  img.setAttribute('src', `${selected_rapper.src}`)
  rapper.appendChild(img)
  const game = document.querySelector('.game')
  const {x, y} = getRandomLocation()
  img.style.top = `${y}px`
  img.style.left = `${x}px`
  img.style.transform = `rotateZ(${Math.random() * 360}deg)`
  rapper.addEventListener('click', () => {
    for (let i = 0; i < (1 + scoreS) + 1; i++) {
      createRapper(selected_rapper);
    }
    scoreS += 1
    const score = document.querySelector('.score')
    score.innerHTML = `<h1>Score: <span class="scoreNum">${scoreS}</span></h1>`
    rapper.style.display = 'none'
  })
  game.appendChild(rapper)
}

function getRandomLocation() {
  const width = window.innerWidth
  const height = window.innerHeight
  const x = Math.random() * (width) + 1
  const y = Math.random() * (height) + 1
  return {x, y}
}
