// Assignment Code
var generateBtn = document.querySelector("#generate");
// add my vars here
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["@", "$", "*", "!"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]


function generatePassword() {
  var chooseLength = prompt("Please enter your desired password length.");
  var chooseLengthNumber = parseInt(chooseLength);

  if (chooseLengthNumber < 8 || chooseLengthNumber > 128) {
    alert("Please choose a length between 8 and 128 characters.");
  } 
  console.log(chooseLength);

  uppercase = confirm("Should your password contain uppercase letters?");
  console.log(uppercase);
  lowercase = confirm("Should your password contain lowercase letters?");
  console.log(lowercase);
  special = confirm("Should your password contain special characters?");
  console.log(special);
  number = confirm("Should your password contain numbers?");
  console.log(number);

 if (!uppercase && !lowercase && !special && !number){
  alert("At least one type of character must be selected. Please try again");
 }

 var options = []

 if (uppercase == true) {  
  options.push(uppercase) 
  console.log("hit")
 }

 if (lowercase == true) {
  options.push(lowercase)
 }

 if (special == true) {
  options.push(special)
 }

 if (number == true) {
  options.push(number)
 }
 
 console.log(options)

 var generatedPW = ""

 for (var i = 0; i < chooseLengthNumber; i++) {

 }

//  if uppercase === true, those array values are added to the random mix
// if (uppercase === true) {

}


// FOR loop to generate requested length of pw then 
// eventually the return is that randomized output and not "password"
  // return "password";


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