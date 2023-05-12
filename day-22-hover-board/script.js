const boxes = document.querySelectorAll('.box');
const colors = ['#FFD1B8', '#FFECB8', '#F4FFB8', '#B8FFD8', '#B8EFFF', '#D1B8FF'];
const nobBtn = document.querySelectorAll('.n');
const boxesDiv = document.querySelector('.boxes');

function colorfr(numberForTimeout) {
  boxes.forEach(box => {
    box.addEventListener('mouseover', function() {
      box.style.backgroundColor = pickRandomColor();
      setTimeout(() => {
      box.style.backgroundColor = "rgb(108, 108, 108)";
      }, numberForTimeout);
    })
  });
}


function pickRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

nobBtn.forEach(btn => {
  btn.addEventListener('click', function(){
    nobBtn.forEach(btn => { btn.classList.remove('active')})
    btn.classList.add('active')
    const numberForTimeout = +btn.getAttribute('data-number');
    console.log(numberForTimeout)
    colorfr(numberForTimeout)
  })
})

// function createBox(numberOfBoxes) {
//   const box = document.createElement('div')
//   box.classList.add('box')
//   boxesDiv.appendChild(box)
// }

// function repeatFunctionByN(func, n) {
//   for (let i = 0; i < n; i++) {
//     func();
//   }
// }
