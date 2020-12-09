// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

  // ALL THE LOGIC GOES IN HERE
  // temporary password is a filler2""!
  lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

  var lengthOfPassword = prompt("How long would you like your password to be, choose between 8 and 128");

  for (var i = 0; i < lengthOfPassword; i++) {
    
  }


  return "temporary password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
