const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");

const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const reactjs = document.getElementById("reactjs");
const figma = document.getElementById("figma");
const github = document.getElementById("github");
const checkBoxParent = document.getElementById("checkboxFormContainer");
const techs = [html, css, js, reactjs, figma, github];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();
  let allValid = true;
  allValid = checkFirstName() && allValid;
  allValid = checkLastName() && allValid;
  allValid = checkEmail() && allValid;
  allValid = checkTechnologies() && allValid;
  if (allValid) {
    alert("form submitted");
  }
});

function checkEmptyField(field) {
  return field.value.trim() === "";
}

function checkTechnologies() {
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
