// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters=["!","@","#","$","%","^","&","*","~","/","<",">"];
var upperCase=["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
var lpperCase=["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
var numbers=["1","2","3","4","5","6","7","8","9","0"]

function generatePassword(){
  var generatedPassword=""
  var numberOfCharacters=prompt("How many characters you want in the password?");
  var includeSpecialCharacters=confirm("Do you want special characters in the password?")
  var includeUpperCase=confirm("Do you want upper case letters?")
  var includeLowerCase=confirm("Do you want lower case letters?")
  var includeNumbers=confirm("Do you want numbers in the password?")
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
