// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

// Arrays for the generator

var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var numbArray = ["0","1","2","3","4","5","6","7","8","9"];
var specialArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

//empty generator arrays

var endArray = [];
var clientArray = [];

// Variables for prompts and booleans

var characterLength = prompt("How many characters?, at least 8 and no more than 128.")
var lowerCase = confirm("Would you like to include lowercase letters?")
var upperCase = confirm("Would you like to include uppercase letters?")
var numbers = confirm("Would you like to add numbers?")
var specialCharacter = confirm("Would you like to add special characters?")

//Conditionals for all the prompts

if (lowerCase) {
  endArray = endArray.concat(lowerCaseArray);
}

if (upperCase) {
  endArray = endArray.concat(upperCaseArray);
}

if (numbers) {
  endArray = endArray.concat(numbArray);
}

if (specialCharacter) {
  endArray = endArray.concat(specialArray);
}

}
















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

















