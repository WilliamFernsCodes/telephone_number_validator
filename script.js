const numberInputElement = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultContainer = document.getElementById("results-div");

const clearResultsContainer = (e) => {
  e.preventDefault()
  resultContainer.innerHTML = "";
}

const validateUserInput = (userInput) => {
  const validationRegex = /[0-9\-\s\(\)]/g
  if (!userInput) {
    alert("Please provide a phone number");
    return
  }
  else {
    const match = userInput.match(validationRegex).join("");
    if (match !== userInput) {
      displayResults(userInput, false);
      return
    } 
    return true;
  }
}

const displayResults = (input, isValid) => {
  resultContainer.textContent = `${!isValid ? "Invalid" : "Valid"} US number: ${input}`
}

const userInputValidator = (input) => {
  const regex = /1?\s?(\(\d{3}\)\s?\d{3}\-\d{4}|\d{3}[\s-]?\d{3}[\s-]?\d{4})/g
  const result = input.match(regex);
  console.log(result);
  if (result && result[0].length === input.length) {
    return regex.test(input)
  }
  return false
}

const checkUserInput = (e) => {
  e.preventDefault();
  const userInput = numberInputElement.value;
  if(!validateUserInput(userInput)) {
    return;
  }
  const isValid = userInputValidator(userInput);
  displayResults(userInput, isValid);
}

clearButton.addEventListener("click", clearResultsContainer);
checkButton.addEventListener("click", checkUserInput);
