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
  var upperCaseValues = "abcdefghijklmnopqrstuvwxyz";
  var lowerCaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberValues = "1234567890";
  var specialValues = "!@#$%^&*()";
  var passwordGeneratorValue = "";

  var lengthOfPassword = prompt("Enter a number between 8 and 128");
  if (lengthOfPassword) {

  }

  var useUpperCase = prompt("Would you like to use upper case letters?");
  if (useUpperCase) {
    var res = passwordGeneratorValue.concat(useUpperCase);
  }

  var useLowerCase = prompt("Would you like to use lower case letters");
  if (useLowerCase) {
    var res = passwordGeneratorValue.concat(useLowerCase);
  }

  var useNumberValues = prompt("Would you like to use numbers?");
  if (useNumberValues) {
    var res = passwordGeneratorValue.concat(useNumberValues);
  }

  var useSpecialValues = prompt("Woule you like to use special characters");
  if (useSpecialValues) {
    var res = passwordGeneratorValue.concat(useSpecialValues);
  }


  for (var i = 0; i < lengthOfPassword; i++) {

  }


  return "temporary password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
