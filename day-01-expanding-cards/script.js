const panels = document.querySelectorAll('.panel')

panels.forEach((panel) =>{
  panel.addEventListener("click", () => {
    // if (panel.classList.contains("active") === false) {
    removeActiveClasses()
    panel.classList.add("active");
  // } else {
  //   panel.classList.remove("active");
  // }
  });
  }
)

function removeActiveClasses() {
  panels.forEach((panel) =>{
    panel.classList.remove("active")
  }
  )
}

// function checkActiveClasses() {
//   panels.forEach((panel) =>{
//     console.log()
//   }
//   )
// }
