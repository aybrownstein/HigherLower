function getNumber(prompt) {
    let validInput = false;
    let maxNum, input;

    // uses a while loop to force the user to enter a valid number
    while (!validInput) {
        input = window.prompt(prompt);
        maxNum = Number(input);
        //if the user enters a decimal, this rounds out to a whole number
        maxNum = Math.round(maxNum);

        if (maxNum != NaN && maxNum > 0) {
            validInput = true;
        }
    }
    return maxNum;
}


function numGuess() {
    let guess = Number(document.getElementById("guess").value);
    let message = document.getElementById("message");

    //this enforces that the guess is a number.
    if (isNaN(guess)) {
        message.innerHTML = "That's not a number!"
            // we use .includes to make sure the user does not duplicate their guesses
    } else if (numArray.includes(guess)) {
        message.innerHTML = "if it wasn't correct last time you tried, why would it be correct this time?";
    } else if (guess == num) {
        numArray.push(guess);
        //if the user guesses the right answer we use .length to calculate the amount of tries and then write out the array.       
        message.innerHTML = `You Got It! it took ${numArray.length} tries, and your guess were ${numArray}.`;
        // once the game is over we "unhide" the reset button     
        playAgainBtn.classList.remove("hide");
        //if the user guesses an number below one or above their maximum nuber they get this message, and it does not count as a try.
    } else if (guess > maxNum || guess < 1) {
        message.innerHTML = "That number is out of range, please enter a valid number";
    } else if (guess > num) {
        numArray.push(guess);
        message.innerHTML = "Too High"
    } else if (guess < num) {
        numArray.push(guess);
        message.innerHTML = "Too Low"
    }
}
// when the user clicks on the play again button it reloads the page.
function playAgain() {
    window.location.reload();
}