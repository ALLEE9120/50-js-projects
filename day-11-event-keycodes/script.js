const key = document.querySelector('#key');
const keyCode = document.querySelector('#keycode');
const code = document.querySelector('#code');

document.addEventListener('keydown', function(event) {
  key.textContent = event.key;
  keyCode.textContent = event.keyCode;
  code.textContent = event.code;
});
