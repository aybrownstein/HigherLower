//calls the getNumber function to set a value for maxNum (and essentially starts the game ).
let maxNum = getNumber("What number would you like to be the maximum guess?")

//now we use javaScript to display a message using a variable that the user set in the prompt
// to let the user know what numbers they may enter.
let guessPrompt = document.getElementById("guessPrompt");
guessPrompt.innerHTML = `Guess a number between 1 and ${maxNum}`;

//javaScript chooses a namber between 1 and the number the user chose.
let num = Math.floor(Math.random() * maxNum) + 1;


//we initiate an empty array to store the guesses in.
let numArray = [];

let playAgainBtn = document.getElementById("playAgainBtn");