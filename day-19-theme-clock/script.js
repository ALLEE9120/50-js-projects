const darkMode = document.querySelector(".switch");
const hourEr = document.querySelector(".hour");
const minuteEr = document.querySelector(".min");
const secondEr = document.querySelector(".second");
const timeEr = document.querySelector(".time");
const dayEr = document.querySelector(".day");
const container = document.querySelector(".container");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", 'Nov', "Dec"];

darkMode.addEventListener("click", () => {
  container.classList.toggle("active");
  if (container.classList.contains("active")) {
    darkMode.innerHTML = "Light Mode";
  } else {
  darkMode.innerHTML = "Dark Mode";
  }

});
setTime()

function setTime() {
  const time = new Date();
  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const hoursForClock = hours % 12
  const minutes = time.getMinutes()
  const second = time.getSeconds()

  hourEr.style.transform = `rotate(${ scale(hoursForClock, 0, 11, 0, 360)}deg)`;
  minuteEr.style.transform = `rotate(${ scale(minutes, 0, 59, 0, 360)}deg)`;
  secondEr.style.transform = `rotate(${ second * 6 }deg)`;
  timeEr.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${hours >= 12 ? "PM" : "AM"}`;
  dayEr.innerHTML = `${days[day]}, ${months[month]} ${date}`
}

setInterval(() => {
  setTime()
}, 1000);

function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
