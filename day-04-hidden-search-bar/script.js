const button = document.querySelector('.btn-show');
const button2 = document.querySelector('.btn');
const search = document.querySelector('.search');

button.addEventListener('click', () => {
  button.classList.toggle('on');
  search.classList.toggle('on');
  search.focus();
  button2.classList.toggle('on');
});
