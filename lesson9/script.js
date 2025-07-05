/*
const arr = [1, 2, 3];

const arr2 = arr.map((el) => el * 2);
const arr3 = arr.map(function multByTwo(el) {
  return el * 2;
});
console.log(arr2);
console.log(arr3);
*/

// const element = document.getElementById("title");
// console.log(element.style);

const counter = document.getElementById("title");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

let count = 0;

function reset() {
  count = 0;
  updateDisplay();
}

function updateDisplay() {
  counter.innerText = count;
  updateColor();
}

function updateColor() {
  let newColor = "black";
  if (count > 0) {
    newColor = "green";
  } else if (count < 0) {
    newColor = "red";
  }
  counter.style.color = newColor;
}

resetBtn.addEventListener("click", reset);

incrementBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

decrementBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    incrementBtn.click();
  }
  if (e.key === "ArrowDown") {
    decrementBtn.click();
  }
});

const textInput = document.getElementById("textInput");
const submitBtn = document.getElementById("submit");
const greetingP = document.getElementById("greetingParagraph");
submitBtn.addEventListener("click", () => {
  if (textInput.value === "") {
    greetingP.innerText = "Hello Stranger";
  } else {
    greetingP.innerText = "Hello " + textInput.value;
  }
});
