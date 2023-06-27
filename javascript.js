const button = document.querySelector("button");
const error = document.querySelectorAll(".error");
const password = document.querySelectorAll("input.error");
const selectMismatch = document.querySelector(".select-mismatch");

button.addEventListener("click", mismatch);

function mismatch() {
  error.forEach(item => console.log(item.value));
  if (error[0].value !== error[1].value) {
    password.forEach(item => (item.style.outline = "1px solid red"));
    const mismatch = document.createElement("div");
    mismatch.textContent = "*Passwords do not match";
    mismatch.style.fontSize = "small";
    mismatch.style.color = "red";
    selectMismatch.appendChild(mismatch);
  } else {
    password.forEach(item => (item.style.outline = "none"));
  }
}

//TODO: Space form elements
