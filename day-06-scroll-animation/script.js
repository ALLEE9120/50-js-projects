const words = document.querySelectorAll('.words');
const body = document.getElementsByTagName('body');

window.addEventListener('scroll', checkwords );

function checkwords() {
  const trigger = window.innerHeight /10 * 7.8;
  words.forEach(word => {
    const wordTop = word.getBoundingClientRect().top
    if (wordTop < trigger) {
      word.classList.add("show")
    } else if (wordTop > trigger) {
      word.classList.remove("show")
    }
  })
}
