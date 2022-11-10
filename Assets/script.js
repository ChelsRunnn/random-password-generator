// Assignment Code
var generateBtn = document.querySelector("#generate");
// add my vars here
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["@", "$", "*", "!"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]


function generatePassword() {
  var chooseLength = window.prompt("Please enter your desired password length.");
  var chooseUpper = window.prompt("Should your password include uppercase letters?")
  if (
    chooseLength < 8 || chooseLength > 128) {
    window.alert("Please choose a length between 8 and 128 characters.");
  } 
  
  if (
    chooseUpper 
    
    }
// write my function here
// includes prompts & if statements

// FOR loop to generate requested length of pw then 
// eventually the return is that randomized output and not "password"
  return "password"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// button clickable 
// button clicks & promps pop up w critera
// criteria options:
//    8-128 char, 
//    special characters y/n
//    uppercase y/n
//    number y/n
// inputs validated & password generated following the rules
// password is displayed