const bars = document.querySelector('.fa-bars');
const nav = document.querySelector('.nav');
const close = document.querySelector('.fa-close')
const two = document.querySelector('.two')
const three = document.querySelector('.three')

close.addEventListener('click', () => {

  nav.classList.remove('active')
  const newtimeout = setTimeout(() => {
    bars.classList.remove('active')
    two.classList.remove('active')
  }, 100);

  setTimeout(() => {
    three.classList.remove('active')
  }, 200);
})

bars.addEventListener('click', () =>{
  bars.classList.add('active')
  nav.classList.add('active')
  setTimeout(() => {
    two.classList.add('active')
  }, 100);
  setTimeout(() => {
    three.classList.add('active')
  }, 200);
})
