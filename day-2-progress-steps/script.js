const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('.progress')
let counter = 1;
next.addEventListener('click', () => {
  counter++;
  update();
  increasecounter();

}
);

prev.addEventListener('click', () => {
  counter--;
  update();
  decreasecounter();
}
);

function increasecounter() {
  if (counter > 3) {
    next.disabled = true
  }
  prev.disabled = false
}

function decreasecounter() {
  if (counter < 2) {
    prev.disabled = true
  }
  next.disabled = false
}

function update() {
  circles.forEach((circle, idx) => {
    if (idx < counter) {
      circle.classList.add('active');

    } else {
      circle.classList.remove('active');
    }
  });
  const actives = document.querySelectorAll('.active');

  progress.style.width = ((actives.length / circles.length) - 0.15) * 100 + "%"

}
