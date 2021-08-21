// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerString = "abcdefghijklmnopqrstuvwxyz";
var numberString = "0123456789";
var symbolString = "~!@#$%^&*()<>";

var userInput = [];

var password = "";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var lengthEl = 0;
  while ((lengthEl < 8 || lengthEl > 128) || Number.isInteger(lengthEl) === false) {
    lengthEl = parseInt(prompt("Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128."))
  }

  var upperEl = false;
  var lowerEl = false;
  var numberEl = false;
  var symbolEl = false;

  while (!upperEl && !lowerEl && !numberEl && !symbolEl) {
    upperEl = confirm("Click OK to confirm you'd like uppercase characters in your password.");
    lowerEl = confirm("Click OK to confirm you'd like lowercase characters in your password.");
    numberEl = confirm("Click OK to confirm you'd like numbers in your password.");
    symbolEl = confirm("Click OK to confirm you'd like symbols in your password.");
  }

  if (upperEl === true) {
    userInput.push(upperString)
  }
  if (lowerEl === true) {
    userInput.push(lowerString)
  }
  if (numberEl === true) {
    userInput.push(numberString)
  }
  if (symbolEl === true) {
    userInput.push(symbolString)
  }

  var password = "";

  userInput = userInput.join("").split("");

  for (var i = 0; i < lengthEl; i++) {
    var index = (Math.floor(Math.random() * userInput.length));
    password += userInput[index]
  }

  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
