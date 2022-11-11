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

  var uppercaseConfirm = confirm("Should your password contain uppercase letters?");
  var lowercaseConfirm = confirm("Should your password contain lowercase letters?");
  var specialConfirm = confirm("Should your password contain special characters?");
  var numberConfirm = confirm("Should your password contain numbers?");

 if (!uppercase && !lowercase && !special && !number){
  alert("At least one type of character must be selected. Please try again");
 }

 var options = []

 if (uppercaseConfirm == true) {  
  options = options.concat(uppercase) 
 }

 if (lowercaseConfirm == true) {
  options = options.concat(lowercase)
 }

 if (specialConfirm == true) {
  options = options.concat(special)
 }

 if (numberConfirm == true) {
  options = options.concat(number)
 }
 
 console.log(options)

 var generatedPW = []

 for (var i = 0; i < chooseLengthNumber; i++) {
  x = Math.floor(Math.random() * options.length);
  // options[x]
  generatedPW = generatedPW + options[x]
 }
 console.log(generatedPW)
 return generatedPW;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password)

  passwordText.value = password;
console.log(passwordText)
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
