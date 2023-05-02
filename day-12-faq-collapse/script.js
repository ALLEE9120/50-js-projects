const btns = document.querySelectorAll('.btn');
const faClose = document.querySelectorAll('.fa-close');
const btna = document.querySelectorAll('.btna');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
  btn.parentNode.classList.add('active');
  btn.parentNode.innerHTML =   `${btn.parentNode.innerHTML} <button class="btna"><i class="fas fa-close"></i></button>`;
  btn.classList.add('after');
  })
})

btna.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentNode.classList.remove('active');
  })
})
