const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerHTML = 0;

  const updateCounter = () => {
    const number = +counter.getAttribute('data-target')
    const c = +counter.innerHTML

    const increment = number/200

    // const interval = setInterval(() => {
    //   counter.innerHTML = +counter.innerHTML + increment
    // }, 10);

    if (c < number) {
      counter.innerHTML = c + increment
      setTimeout(() => {
        updateCounter()
      }, 3);
    } else {
    }

    // setTimeout(() => {
    //   clearInterval(interval)
    // }, 1000);

  }

  updateCounter()
})
