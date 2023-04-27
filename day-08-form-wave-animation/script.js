const inputs = document.querySelectorAll(".input");

inputs.forEach((input) => {
  input.addEventListener("focus", function () {
    input.classList.add("active")
  });

  input.addEventListener("blur", function () {
    input.classList.remove("active")}
  );
});
