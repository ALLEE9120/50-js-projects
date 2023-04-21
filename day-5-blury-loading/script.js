const page = document.querySelector('.page');
const loadingText = document.querySelector('.loading-text');

let load = 0;

let int = setInterval(blurring,20);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = 1 - load/120;
  page.style.filter = `blur(${30 - load / 3}px)`;

  if (load === 100) {
    loadingText.style.opacity = 0;
  }

  console.log(load)
}
