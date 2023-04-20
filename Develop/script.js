// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "/", "<", ">"];
var upperCase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
var lowerCase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var getRandomValue = specialCharacters.concat(upperCase, lowerCase, numbers)
console.log(getRandomValue)

function generatePassword() {
  var generatedPassword = ""
  var numberOfCharacters = prompt("How many characters you want in the password?");
  console.log(numberOfCharacters)
  if (numberOfCharacters < 8) {
    alert("The number of characters has to be greater than 8")
    return "please try again"
  }
  if (numberOfCharacters > 64) {
    alert("The number of characters has to be lower than 64")
    return "please try again"
  }
  
  var includeSpecialCharacters = confirm("Do you want special characters in the password?")
  console.log(includeSpecialCharacters);
  if (includeSpecialCharacters) {
    password += (specialCharacters)
  }
  var includeUpperCase = confirm("Do you want upper case letters?")
  console.log(includeUpperCase)
  if (includeUpperCase) {
    password += (upperCase)
  }
  var includeLowerCase = confirm("Do you want lower case letters?")
  console.log(includeLowerCase)
  if (includeLowerCase) {
    password += (lowerCase)
  }

  var includeNumbers = confirm("Do you want numbers in the password?")
  console.log(includeNumbers)
  if (includeNumbers) {
    password += (numbers)
  }

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
