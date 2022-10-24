// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericChar = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "@", "#", "$", "%", "*", "(", ")", "-"];
var password = "" ;
var charLength = 0;
var passwordArray = [];
var passwordBox = document.querySelector("#password");
passwordBox.textContent = password
// Write password to the #password input
function writePassword() {
  var charLength = window.prompt("How long would you like your password It must be between 8 and 128 characters.")
  var lowercase = window.confirm("Would you like lowercase letters?");
  var uppercase = window.confirm("Would you like uppercase letters?");
  var numeric = window.confirm("Would you like numbers?");
  var special = window.confirm("Would you like special letters?");
  var passwordText = document.querySelector("#password");
  var passwordString = ""
  if (!lowercase && !uppercase && !numeric && !special){
    window.alert("Please select at least one password modifier")
  }
  if (charLength <8){
    window.alert("Please select at least 8 total characters")
  }
  if (uppercase){
    passwordArray.push(uppercaseChar)  
  }
  if (lowercase){
    passwordArray.push(lowercaseChar)
  }
  if (numeric){
    passwordArray.push(numericChar)
  } 
  if (special){
    passwordArray.push(specialChar)
  }
console.log(passwordArray);
let i = 0;
while (i > charLength){
  password += passwordArray[Math.random() * passwordArray.length] ;
  i++;
  passwordBox.textContent = password;
  // console.log(charLength, lowercase, uppercase, numeric, special);
}  
}

// function generatePassword() {
//     while (lowercase == true) {
//       String.passwordString(lowercaseChar);
//     }
//     while (uppercase == true) {
//       String.passwordString(uppercaseChar);
//     }
//     while (numeric == true) {
//       String.passwordString(numericChar);
//     }
//     while (special == true) {
//       String.passwordString(specialChar);
//     }
//     return Math.random(fromCharCode) = password++;
// }
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// /*WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria */
// /*  Random char picker using math. random and an index, 
// run based on the length of password using a for loop charLength i= 0 */
