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

  // var lengthOfPassword = prompt("Enter a number between 8 and 128");
  // if (lengthOfPassword) {

  // }
  // console.log("Password length is " + lengthOfPassword);

  var useUpperCase = confirm("Would you like to use upper case letters?");
  if (useUpperCase) {
    var passwordGeneratorValue = passwordGeneratorValue.concat(upperCaseValues);
    console.log("uppercase confirmed");
  }

  var useLowerCase = confirm("Would you like to use lower case letters");
  if (useLowerCase) {
    var passwordGeneratorValue = passwordGeneratorValue.concat(lowerCaseValues);
    console.log("lower case confirmed");
  }

  var useNumberValues = confirm("Would you like to use numbers?");
  if (useNumberValues) {
    var passwordGeneratorValue = passwordGeneratorValue.concat(numberValues);
    console.log("numbers confirmed");
  }

  var useSpecialValues = confirm("Woule you like to use special characters");
  if (useSpecialValues) {
    var passwordGeneratorValue = passwordGeneratorValue.concat(specialValues);
    console.log("special characters confirmed");
  }

  console.log("These values confirmed: " + passwordGeneratorValue);


  // for (var i = 0; i < lengthOfPassword; i++) {

  // }


  return "temporary password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
