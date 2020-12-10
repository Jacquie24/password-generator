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
    var res = passwordGeneratorValue.concat(useUpperCase);
    console.log("uppercase confirmed");
  }

  var useLowerCase = confirm("Would you like to use lower case letters");
  if (useLowerCase) {
    var res = passwordGeneratorValue.concat(useLowerCase);
    console.log("lower case confirmed");
  }

  var useNumberValues = confirm("Would you like to use numbers?");
  if (useNumberValues) {
    var res = passwordGeneratorValue.concat(useNumberValues);
    console.log("numbers confirmed");
  }

  var useSpecialValues = confirm("Woule you like to use special characters");
  if (useSpecialValues) {
    var res = passwordGeneratorValue.concat(useSpecialValues);
    console.log("special characters confirmed");
  }


  // for (var i = 0; i < lengthOfPassword; i++) {

  // }


  return "temporary password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
