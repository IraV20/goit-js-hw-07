const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector(" [data-destroy]");
const boxes = document.querySelector("#boxes");
const userInput = document.querySelector("input");
const div = document.querySelector("#controls");

btnCreate.addEventListener("click", () => {
  const amount = Number(userInput.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    userInput.value = "";
  }
});

function createBoxes(amount) {
  boxes.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
  }
}

btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

div.classList.add("div-controls");
userInput.setAttribute("placeholder", "1");
