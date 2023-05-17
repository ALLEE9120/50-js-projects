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
    startGame()
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
