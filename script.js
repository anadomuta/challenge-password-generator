// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//Variable declarations:
let passwordLength;
let passwordSpecialCharacters;
let passwordNumericCharacters;
let passwordLowerCasedCharacters;
let passwordUpperCasedCharacters;
let randomCharacterPoolArray = [];

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = prompt(
    "How many characters would you like your password to contain?"
  );

  if (passwordLength == null) return; //allows password generation exit if the user cancels the prompt

  passwordLength = parseInt(passwordLength);

  if (isNaN(passwordLength) || passwordLength == "") {
    alert("Please input a number greater than 8.");
    getPasswordOptions();
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert(
      "The password length must be a number of characters between 8 and 128."
    );
    getPasswordOptions();
  } else {
    passwordSpecialCharacters = confirm(
      "Click 'OK' to confirm including special characters."
    );
    passwordNumericCharacters = confirm(
      "Click 'OK' to confirm including numeric characters."
    );
    passwordLowerCasedCharacters = confirm(
      "Click 'OK' to confirm including lowercase characters."
    );
    passwordUpperCasedCharacters = confirm(
      "Click 'OK' to confirm including uppercase characters."
    );

    let atLeastOneCharacter =
      passwordSpecialCharacters &&
      passwordNumericCharacters &&
      passwordLowerCasedCharacters &&
      passwordUpperCasedCharacters;

    if (!atLeastOneCharacter) {
      alert("Please select at least one character type.");
      getPasswordOptions();
    }
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

  if (passwordSpecialCharacters) {
    randomCharacterPoolArray.push(...specialCharacters);
  }

  if (passwordNumericCharacters) {
    randomCharacterPoolArray.push(...numericCharacters);
  }

  if (passwordLowerCasedCharacters) {
    randomCharacterPoolArray.push(...lowerCasedCharacters);
  }

  if (passwordUpperCasedCharacters) {
    randomCharacterPoolArray.push(...upperCasedCharacters);
  }

  var finalPassword = "";

  for (let i = 0; i < passwordLength; i++) {
    finalPassword += getRandom(randomCharacterPoolArray);
  }

  return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
