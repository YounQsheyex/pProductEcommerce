//calling each element on the html
const form = document.querySelector("form");
const firstName = document.querySelector("#fistName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const textArea = document.querySelector("#textarea");
const button = document.querySelector("#button");

//adding an email regex
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// let passwordRegex =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

//adding an event listener so when subbmitted it doesnt load
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});
//function to check input and trim so each black space is not required
function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const textAreaValue = textArea.value.trim();
}

//condtion to check if each input is valid
if (firstNameValue === "") {
  setError(firstName, "Please fill your First name");
} else {
  setSuccess(firstName);
}
if (lastNameValue === "") {
  setError(firstName, "Please fill your Last name");
} else {
  setSuccess(lastName);
}
//email
if (emailValue === "") {
  setError(email, "email cannot be blank");
} else if (!emailRegex.test(emailValue)) {
  setError(email, "Input a valid email");
} else {
  setSuccess(email);
}
if (textAreaValue === "") {
  setError(textArea, "Please fill your Last name");
} else {
  setSuccess(textArea);
}

//function to display error when no value or less than 5
function setError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "valid error";
  const small = formControl.querySelector("small");
  small.textContent = message;
}
function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "valid success";
}

// regex- stands for regular expression
//it checks strings composition
//A-Z 0-9 a-b
