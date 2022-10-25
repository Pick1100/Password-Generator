//Password characters and via the password box
var generateBtn = document.querySelector("#generate");
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericChar = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "@", "#", "$", "%", "*", "(", ")", "-"];
var charLength = 0;
var passwordBox = document.querySelector("#password");

//Write password to the #password input
function writePassword() {
  var charLength = window.prompt("How long would you like your password It must be between 8 and 128 characters.")

  //ensure the user input is numbers and =>8
  if (isNaN(charLength)){
    window.alert("Please select at 8 NUMBERS")
    return;
  }
  if (charLength <8){
    window.alert("Please select at least 8 total characters")
    return;
  }

  //Password criteria selection from user
  var lowercase = window.confirm("Would you like lowercase letters?");
  var uppercase = window.confirm("Would you like uppercase letters?");
  var numeric = window.confirm("Would you like numbers?");
  var special = window.confirm("Would you like special letters?");
  var passwordText = document.querySelector("#password");
  var passwordString = ""
  var passwordArray = [];

//ensure user selected at least one from criteria  
  if (!lowercase && !uppercase && !numeric && !special){
    window.alert("Please select at least one password modifier")
    return;
  }

 //logic to decide what is the base array to be picked from the selected criteria
  if (uppercase = true){
    passwordArray = passwordArray.concat(uppercaseChar);
  }
  if (lowercase = true){
    passwordArray = passwordArray.concat(lowercaseChar);
  }
  if (numeric = true){
    passwordArray = passwordArray.concat(numericChar);
  } 
  if (special = true){
    passwordArray = passwordArray.concat(specialChar);
  }

  //Randomizer and selector from the criteria array
let i = 0;
while (i < charLength){
  passwordString += passwordArray[Math.floor(Math.random() * passwordArray.length)];
  i++;
  passwordBox.value = passwordString;
}  
}

//Event listener for the  "Generate Password" button
generateBtn.addEventListener("click", writePassword);