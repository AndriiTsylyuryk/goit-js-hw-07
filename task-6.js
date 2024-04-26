function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const input = document.querySelector("input");
const buttonCreate = document.querySelector('#controls button[data-action="create"]');
const buttonDestroy = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", handleClick)


function handleClick(event){
  const value = input.value;
  if (value >= 1 && value <= 100 ) {
    createBoxes(value);
  }
};
 
function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++){
    const newBox = document.createElement('div');
    newBox.style.width = size + "px";
    newBox.style.height = size + "px";
    newBox.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(newBox);
    size += 10;
  };
}