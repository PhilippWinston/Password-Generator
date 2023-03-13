// Assignment code here

// Declaring global variables for character sets
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+-=[]{}|;':\",./<>?";

// Function to generate password based on user choices
function generatePassword() {
  var passwordLength = prompt(
    `Need a stong password? I've got the one for you!!
    Enter password length (between 8 and 128):`
  );

  // Check if input is a number between 8 and 128
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Oops! Please enter a valid number between 8 and 128.");
    return "";
  }

  // Get user's character preferences
  var useLowercaseChars = confirm("Include lowercase characters?");
  var useUppercaseChars = confirm("Include uppercase characters?");
  var useNumericChars = confirm("Include numeric characters?");
  var useSpecialChars = confirm("Include special characters?");

  // Create possible characters string based on user choices
  var possibleCharacters = "";
  if (useLowercaseChars) {
    possibleCharacters = possibleCharacters.concat(lowercaseChars);
  }
  if (useUppercaseChars) {
    possibleCharacters = possibleCharacters.concat(uppercaseChars);
  }
  if (useNumericChars) {
    possibleCharacters = possibleCharacters.concat(numericChars);
  }
  if (useSpecialChars) {
    possibleCharacters = possibleCharacters.concat(specialChars);
  }
  if (possibleCharacters === "") {
    alert("Oops! Please select at least one character type.");
    return "";
  }
  // Generate password using possible characters
  var finalPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var rng = Math.floor(Math.random() * possibleCharacters.length);
    finalPassword = finalPassword.concat(possibleCharacters[rng]);
  }
  return finalPassword;
}

// Function to write generated password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
