function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
console.log(button);

button.addEventListener("click", handleClick);

const body = document.querySelector("body");
const span = document.querySelector("color");

function handleClick(event) {
  const span = document.querySelector(".color");
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
}
