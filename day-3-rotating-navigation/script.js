const nav = document.querySelector('#nav');
const close = document.querySelector('#close');
const container = document.querySelector('.container');
const circle = document.querySelector('.circle');

nav.addEventListener('click', () => {
  container.classList.add('show-nav');
  circle.classList.add('show-nav');
});

close.addEventListener('click', () => {
  container.classList.remove('show-nav');
  circle.classList.remove('show-nav');
});
