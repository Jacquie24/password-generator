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

  // Create variables for string values to be tied to user input choices
  // Create variable to store all string values chosen by the user combined
// Prompt user to select password length from 8 to 128
// If user selects number between 8 and 128, move to next prompt
// If user selects number not between 8-128, repeat select password length
// Once length accepted, confirm user chooses upper case
// Once length accepted, confirm user chooses lower case
// Once length accepted, confirm user chooses number
// Once length accepted, confirm user chooses special characters
// Combine each true choice into one password generator var
// Use random number generator to equal length of password generator string
// Run it in loop until it generates the length equal to user's input for password length
// Display user's password

  var upperCaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseValues = "abcdefghijklmnopqrstuvwxyz";
  var numberValues = "1234567890";
  var specialValues = "!@#$%^&*()";
  var passwordGeneratorValue = "";

  
  // ask TA in office hours
    var lengthOfPassword = prompt("Enter a number between 8 and 128.");

    
    // prompt("Enter a number between 8 and 128");
    if (lengthOfPassword < 8 || lengthOfPassword > 128) {
      alert("Please choose a number between 8 and 128.")
     return generatePassword ()
  
    }
  

  
  console.log("Password length is " + lengthOfPassword);

  var useUpperCase = confirm("Would you like to use uppercase letters?");
  if (useUpperCase) {
    var passwordGeneratorValue = passwordGeneratorValue.concat(upperCaseValues);
    console.log("uppercase confirmed");
  }

  var useLowerCase = confirm("Would you like to use lowercase letters?");
  if (useLowerCase) {
    var passwordGeneratorValue = passwordGeneratorValue.concat(lowerCaseValues);
    console.log("lower case confirmed");
  }

  var useNumberValues = confirm("Would you like to use numbers?");
  if (useNumberValues) {
    var passwordGeneratorValue = passwordGeneratorValue.concat(numberValues);
    console.log("numbers confirmed");
  }

  var useSpecialValues = confirm("Would you like to use special characters?");
  if (useSpecialValues) {
    var passwordGeneratorValue = passwordGeneratorValue.concat(specialValues);
    console.log("special characters confirmed");
  }

  if (!useUpperCase && !useLowerCase && !useNumberValues && !useSpecialValues) {
    alert("Please choose at least one.");
    generatePassword ()
  }

  console.log("These values confirmed: " + passwordGeneratorValue);

  
  var password = ""

for (var i = 0; i < lengthOfPassword; i++) {
  var randomIndex = Math.floor(Math.random() * passwordGeneratorValue.length);
  var randomCharacter = passwordGeneratorValue[randomIndex];
  password = randomCharacter + password;
  console.log(password);


 }

 return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);