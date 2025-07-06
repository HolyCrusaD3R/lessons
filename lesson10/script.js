/* Calculator App
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const btnMult = document.getElementById("btnMult");
const btnDiv = document.getElementById("btnDiv");
const btnClear = document.getElementById("btnClear");
const btnEquals = document.getElementById("btnEquals");
const inputField = document.getElementById("calcInput");

let input = "";

function appendField(char) {
  input += char;
  inputField.value = input;
}

function clearField() {
  inputField.value = "";
}

function calculate() {
  try {
    input = eval(input).toString();
    inputField.value = input;
  } catch (e) {
    inputField.value = input === "" ? "" : "Error";
    input = "";
  }
}

btn0.addEventListener("click", () => appendField("0"));
btn1.addEventListener("click", () => appendField("1"));
btn2.addEventListener("click", () => appendField("2"));
btn3.addEventListener("click", () => appendField("3"));
btn4.addEventListener("click", () => appendField("4"));
btn5.addEventListener("click", () => appendField("5"));
btn6.addEventListener("click", () => appendField("6"));
btn7.addEventListener("click", () => appendField("7"));
btn8.addEventListener("click", () => appendField("8"));
btn9.addEventListener("click", () => appendField("9"));

btnPlus.addEventListener("click", () => appendField("+"));
btnMinus.addEventListener("click", () => appendField("-"));
btnMult.addEventListener("click", () => appendField("*"));
btnDiv.addEventListener("click", () => appendField("/"));

btnClear.addEventListener("click", clearField);
btnEquals.addEventListener("click", calculate);
*/

// Todo App
const inputField = document.getElementById("inputField");
const btnAddTask = document.getElementById("btnAddTask");
const ul = document.getElementById("unorderedList");

function addTask() {
  const taskText = inputField.value.trim();
  inputField.value = "";
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(delBtn);
  ul.appendChild(li);
}

btnAddTask.addEventListener("click", addTask);
