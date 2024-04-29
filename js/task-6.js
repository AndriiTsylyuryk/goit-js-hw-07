function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
buttonCreate.addEventListener("click", handleClick);
buttonDestroy.addEventListener("click", destroyBoxes);

function handleClick(event) {
  const value = input.value;
  console.log(value);
  if (value >= 1 && value <= 100) {
    createBoxes(value);
  }
}

function createBoxes(amount) {
  boxes.innerHTML = "";

  let size = 30;
  let boxesHTML = '';

  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    newBox.style.width = size + "px";
    newBox.style.height = size + "px";
    newBox.style.backgroundColor = getRandomHexColor();
    size += 10;
    boxesHTML += newBox.outerHTML;
  }
  boxes.innerHTML = boxesHTML;
}


console.log(createBoxes(2));


function destroyBoxes() {
  boxes.innerHTML = "";
}
