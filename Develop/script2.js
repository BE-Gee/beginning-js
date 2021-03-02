// arrays store characters to be randomly accessed

var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var number = "1234567890".split("");
var special = "!@#$%^&*()_+?~`".split("");

console.log(special);

//function prompt user for user input to get password options
function getPasswordOptions() {
  // Variable to store length of password from user input
  var length = parseInt(
    window.prompt("How many charactors would you like your password to be?")
  );

  // ​console.log(length)

  // Conditional statement to check if pw length is a number
  if (isNaN(length) === true) {
    alert("Password length must be provided as a number");
    return;
  }

  // Condtional statement to check if password length is at least 8 characters
  if (length < 8) {
    alert("Password length must be at least 8 characters");
    return;
  }
  // Condtional statement to check if password length is no more than 128 characters
  if (length > 128) {
    alert("Password maximum length no more than 128 characters");
    return;
  }
  // ​console.log(length)
  //confirm messages to prompt user
  var useSpecial = window.confirm("Would you like special characters");
  var useNumbers = window.confirm("Would you like numbers");
  var useLowercase = window.confirm("Would you like lowercase letters");
  var useUppercase = window.confirm("Would you like uppercase lettters");
  //object to store user input
  var passwordOptions = {
    length: length,
    useSpecial: useSpecial,
    useNumbers: useNumbers,
    useLowercase: useLowercase,
    useUppercase: useUppercase,
  };
  //return object
  return passwordOptions;
}
//
function getRandomElement(characterArrays) {
  var randomIndex = Math.floor(Math.random() * characterArrays.length);
  var randomElement = characterArrays[Math.floor(Math.random() * randomIndex)];
  return randomElement;
}
// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  // Array to store password as it's being concatenated
  var result = [];
  // Array to store types of characters to include in passwor
  var possibleCharacters = [];
  // Conditional statement that adds array of special characters into array of possible characters based on user input
  if (options.useSpecial) {
    possibleCharacters = possibleCharacters.concat(special);
  }
  // Conditional statement that adds array of numbers characters into array of possible characters based on user input
  if (options.useNumbers) {
    possibleCharacters = possibleCharacters.concat(number);
  }
  // // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  if (options.useLowercase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
  }
  // // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  if (options.useUppercase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
  }
  // ​// For loop to grab a random character from list of possible characters
  for (var i = 0; i < options.length; i++) {
    var possibleChar = getRandomElement(possibleCharacters);
    result.push(possibleChar);
  }
  // ​// Join the array to make it a singular string to return
  return result.join("");
}
// Get references to the #generate element

var generateBtn = document.querySelector("#btn");
function writePassword() {
  // Runs the function that will generate the password
  var password = generatePassword();
  // ​
  // Selects on the HTML where the password is shown
  var passwordText = document.querySelector("#passwordDisplay");

  console.log(password);

  // Makes the value of the element the string generated from the generatePassword function
  passwordText.value = password;
}
//add event listener to button
generateBtn.addEventListener("click", writePassword);
