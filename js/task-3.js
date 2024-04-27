const inputField = document.querySelector("#name-input");

const outputField = document.querySelector("#name-output");

inputField.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value.trim();
  outputField.textContent = inputValue ? inputValue : "Anonymous";
});
