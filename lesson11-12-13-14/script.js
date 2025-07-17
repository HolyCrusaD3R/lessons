const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const reactjs = document.getElementById("reactjs");
const figma = document.getElementById("figma");
const github = document.getElementById("github");
const checkBoxParent = document.getElementById("checkboxFormContainer");
const techs = [html, css, js, reactjs, figma, github];

const page1 = document.getElementById("pageOne");
const page2 = document.getElementById("pageTwo");

const numberInput = document.getElementById("numberField");
const btnGuess = document.getElementById("btnGuess");
const btnRestart = document.getElementById("btnRestart");

const playerScore = document.getElementById("playerScore");
const compScore = document.getElementById("compScore");
const history = document.getElementById("history");

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const playerOneChoice = document.getElementById("playerOneChoice");
const playerTwoChoice = document.getElementById("playerTwoChoice");

let arr = ["rock", "paper", "scissors"];
let secretNumber;
let playerScoreCurr = 0;
let compScoreCurr = 0;
playerScore.textContent = playerScoreCurr;
compScore.textContent = compScoreCurr;
startGame(); // REMOVE AFTER

btnRestart.addEventListener("click", restart);
function restart() {
  clearHistory();
  resetScores();
  deleteImages();
}
function resetScores() {
  playerScoreCurr = 0;
  compScoreCurr = 0;
  updateDisplay();
}

rockBtn.addEventListener("click", () => pick(0));
paperBtn.addEventListener("click", () => pick(1));
scissorsBtn.addEventListener("click", () => pick(2));

function showChoices(playerChoice, compChoice) {
  deleteImages();
  addImageToParent(playerOneChoice, playerChoice);
  addImageToParent(playerTwoChoice, compChoice);
}

function addImageToParent(node, choice) {
  const img = document.createElement("img");
  img.src = `./assets/${arr[choice]}.png`;
  node.append(img);
}

function deleteImages() {
  removeChildren(playerOneChoice);
  removeChildren(playerTwoChoice);
}

function removeChildren(node) {
  for (let i = node.children.length - 1; i >= 0; i--) {
    node.children[i].remove();
  }
}

function pick(index) {
  secretNumber = Math.floor(Math.random() * 3);
  console.log(index, secretNumber);
  showChoices(index, secretNumber);
  if (index === (secretNumber + 1) % 3) {
    console.log(`you chose ${arr[index]} and defeated ${arr[secretNumber]}`);
    addHistory(arr[index], arr[secretNumber], "Win");
    playerScoreCurr++;
    updateDisplay();
    return;
  }
  if ((index + 1) % 3 === secretNumber) {
    console.log(
      `you chose ${arr[index]} and were defeated by ${arr[secretNumber]}`
    );
    addHistory(arr[index], arr[secretNumber], "Lose");
    compScoreCurr++;
    updateDisplay();
    return;
  }
  if (index === secretNumber) {
    console.log(`you both chose ${arr[index]}, it is a draw`);
    addHistory(arr[index], arr[secretNumber], "Draw");
    return;
  }
}

function updateDisplay() {
  playerScore.textContent = playerScoreCurr;
  compScore.textContent = compScoreCurr;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();
  let allValid = true;
  allValid = checkFirstName() && allValid;
  allValid = checkLastName() && allValid;
  allValid = checkEmail() && allValid;
  allValid = checkPassword() && allValid;
  allValid = checkTechnologies() && allValid;
  if (allValid) {
    startGame();
  }
});

function startGame() {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
}

function checkEmptyField(field) {
  return field.value.trim() === "";
}

function checkTechnologies() {
  console.log("test");
  let chosenCount = 0;
  techs.map((el) => {
    if (el.checked) {
      chosenCount++;
    }
  });
  if (chosenCount < 3) {
    // checkBoxParent.classList.add("error");
    // because it has no border
    addErrorMessage(checkBoxParent, "You must choose 3 or more techs");
    return false;
  }
  return true;
}

function checkFirstName() {
  if (checkEmptyField(firstName)) {
    firstName.classList.add("error");
    addErrorMessage(firstName, "First name cannot be empty");
    return false;
  }
  if (firstName.value.trim().length <= 2) {
    firstName.classList.add("error");
    addErrorMessage(firstName, "First name must be more than 2 chars");
    return false;
  }
  return true;
}

function checkLastName() {
  if (checkEmptyField(lastName)) {
    lastName.classList.add("error");
    addErrorMessage(lastName, "Last name cannot be empty");
    return false;
  }
  return true;
}

function checkEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    email.classList.add("error");
    addErrorMessage(email, "Email must be in correct format");
    return false;
  }
  return true;
}

function checkPassword() {
  if (checkEmptyField(password)) {
    password.classList.add("error");
    addErrorMessage(password, "Password cannot be empty");
    return false;
  }
  if (password.value.trim().length < 8) {
    password.classList.add("error");
    addErrorMessage(password, "Password must be at least 8 characters long");
    return false;
  }
  if (!/[A-Z]/.test(password.value)) {
    password.classList.add("error");
    addErrorMessage(
      password,
      "Password must contain at least one uppercase letter"
    );
    return false;
  }
  if (!/\d/.test(password.value)) {
    password.classList.add("error");
    addErrorMessage(password, "Password must contain at least one number");
    return false;
  }
  return true;
}

function addErrorMessage(field, message) {
  const error = document.createElement("p");
  error.textContent = message;
  error.style.color = "red";
  error.style.marginTop = "10px";
  error.classList.add("errorMessage");
  field.parentNode.appendChild(error);
}

function clearErrors() {
  const error = document.querySelectorAll(".errorMessage");
  for (let i = error.length - 1; i >= 0; i--) {
    error[i].remove();
  }

  const inputsWithErrorBorder = document.querySelectorAll(".error");
  for (let i = inputsWithErrorBorder.length - 1; i >= 0; i--) {
    inputsWithErrorBorder[i].classList.remove("error");
  }
}

function addHistory(playerPick, compPick, result) {
  const historyLi = document.createElement("li");
  historyLi.innerHTML = `You picked <p style=\"color: blue;\">${playerPick}</p> vs <p style=\"color: red;\">${compPick}</p> — <b>${result}</b>`;
  historyLi.classList.add("flex", "flex-row", "gap-3", "historyListItem");
  history.prepend(historyLi);
}

function clearHistory() {
  const historyListItems = document.getElementsByClassName("historyListItem");
  for (let i = historyListItems.length - 1; i >= 0; i--) {
    historyListItems[i].remove();
  }
}
