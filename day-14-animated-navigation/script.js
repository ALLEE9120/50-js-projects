const close = document.querySelector('.close');

close.addEventListener('click', function() {
  close.parentElement.classList.toggle('active');
});
