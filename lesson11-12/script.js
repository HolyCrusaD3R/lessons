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

const scoreEl = document.getElementById("score");
const attemptsEl = document.getElementById("attempts");
const history = document.getElementById("history");

let secretNumber;
let score = 0;
let attempts = 0;
scoreEl.textContent = score;
attemptsEl.textContent = attempts;
startGame(); // REMOVE AFTER
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
  updateSecretNumber();
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

const feedbackEl = document.createElement("div");
feedbackEl.id = "guessFeedback";
feedbackEl.style.marginTop = "16px";
feedbackEl.style.fontWeight = "bold";
feedbackEl.textContent = "ცარიელი";
feedbackEl.style.opacity = "0";
numberInput.parentNode.insertBefore(feedbackEl, numberInput.nextSibling);

function showGuessError(message) {
  numberInput.classList.add("error");
  feedbackEl.textContent = message;
  feedbackEl.style.color = "red";
  feedbackEl.style.opacity = "1";
}

function showGuessFeedback(message, color = "black") {
  numberInput.classList.remove("error");
  feedbackEl.textContent = message;
  feedbackEl.style.color = color;
  feedbackEl.style.opacity = "1";
}

function clearGuessError() {
  numberInput.classList.remove("error");
  feedbackEl.textContent = "ცარიელი";
  feedbackEl.style.opacity = "0";
}

function guessNumber() {
  clearGuessError();
  const val = numberInput.value.trim();
  if (!/^[0-9]+$/.test(val)) {
    showGuessError("შეიყვანე მხოლოდ რიცხვი");
    return;
  }
  const currGuess = parseInt(val);
  if (currGuess > 100 || currGuess <= 0) {
    showGuessError("რიცხვი უნდა იყოს 1-დან 100-მდე");
    return;
  }
  attempts++;
  updateDisplay();
  if (currGuess === secretNumber) {
    score++;
    showGuessFeedback("გილოცავ, გამოიცანი!", "green");
    addHistory(0, currGuess);
    attempts = 0;
    updateSecretNumber();
    updateDisplay();
    return;
  }
  if (checkAttempts()) return;
  if (currGuess > secretNumber) {
    showGuessFeedback("მეტია", "blue");
    addHistory(1, currGuess);
    return;
  }
  if (currGuess < secretNumber) {
    showGuessFeedback("ნაკლებია", "orange");
    addHistory(-1, currGuess);
    return;
  }
}

function addHistory(diviation, guess) {
  const historyLi = document.createElement("li");
  historyLi.innerHTML = `You guessed <p style="color: blue;">${guess}</p> which is ${
    diviation === 0 ? "correct" : diviation === 1 ? "too high" : "too low"
  }`;
  historyLi.classList.add("flex", "flex-row", "gap-3", "historyListItem");
  history.prepend(historyLi);
}

function updateDisplay() {
  scoreEl.textContent = score;
  attemptsEl.textContent = attempts;
}

function updateSecretNumber() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
}

function checkAttempts() {
  if (attempts === 10) {
    btnGuess.disabled = true;
    return true;
  }
  return false;
}

function restart() {
  btnGuess.disabled = false;
  score = 0;
  attempts = 0;
  updateDisplay();
  updateSecretNumber();
  clearGuessError();
  clearHistory();
}

function clearHistory() {
  const historyListItems = document.getElementsByClassName("historyListItem");
  for (let i = historyListItems.length - 1; i >= 0; i--) {
    historyListItems[i].remove();
  }
}

btnRestart.addEventListener("click", restart);
btnGuess.addEventListener("click", guessNumber);
numberInput.addEventListener("input", clearGuessError);
