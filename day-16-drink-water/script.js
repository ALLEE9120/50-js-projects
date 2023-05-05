const glasss = document.querySelectorAll('.glass');
const total = document.querySelector('.total');

glasss.forEach((glass, i) => {
  glass.addEventListener('click', () => {
    highlightGlass(i)
    fullGlassFunction()
  } );
})

function highlightGlass(i) {
  glasss.forEach((glass, i2) => {{
    if (i2 <= i) {
      glass.classList.add("active")
    } else {
      glass.classList.remove('active')
    }

  }})
}

function fullGlassFunction() {
  const fullGlasses = document.querySelectorAll(".glass.active")

  if (fullGlasses.length === 0) {
    total.style.background = " linear-gradient(to top, rgb(55, 150, 233) 0%,rgb(55, 150, 233) 25%, #ffffff 25%);"
  } else {
    total.style.background = `linear-gradient(to top, rgb(55, 150, 233) 0%,rgb(55, 150, 233) ${fullGlasses.length / 8 * 100}%, #ffffff ${fullGlasses.length / 8 * 100}%)`
  }
}
