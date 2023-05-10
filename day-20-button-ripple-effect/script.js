const button = document.querySelector('.btn');


button.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const buttonTop = e.target.offsetTop;
  const buttonLeft = e.target.offsetLeft;
  const trueX = x - buttonLeft;
  const trueY = y - buttonTop;

  button.innerHTML = `Click Me   <span class="circle" style="top: ${trueY}px; left: ${trueX}px;"></span>`
})
