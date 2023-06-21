const button = document.querySelector("button");
const error = document.querySelectorAll(".error");
const password = document.querySelectorAll("input.error");

button.addEventListener("click", mismatch);

function mismatch() {
  error.forEach(item => console.log(item.value));
  if (error[0].value !== error[1].value) {
    password.forEach(item => (item.style.outline = "1px solid red"));
  } else {
    password.forEach(item => (item.style.outline = "none"));
  }
}
