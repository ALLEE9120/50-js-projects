const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('.progress')
let counter = 1;
next.addEventListener('click', () => {
  increasecounter();
  update();
}
);

prev.addEventListener('click', () => {
  decreasecounter();
  update();
}
);

function increasecounter() {
  if (counter > 3) {
    disabled = true
  } else {
    counter++;
  }
}

function decreasecounter() {
  if (counter < 2) {
    disabled = true
  } else {
    counter--;
  }
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
