// Generate a random number between 1 and 100.
let randomNumber = Math.floor(Math.random() * 100) +1;
console.log("random number: " + randomNumber);

// get the elements we want to manipulate
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");

guessSubmit.addEventListener("click", checkGuess);

// Record the turn number the player is on. Start it on 1.
let guessCount = 1;
console.log("guessCount: " + guessCount);
let resetButton;

// Provide the player with a way to guess what the number is.
function checkGuess() {
    const userGuess = Number(guessField.value);
    console.log("user guess: " + userGuess)
    if(guessCount === 1){
        guesses.textContent = "Previous guesses:";
    }
    // Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    // Next, check whether it is the correct number.
    if(userGuess === randomNumber){
        // If it is correct:
        // Display congratulations message.
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent="";

        // Stop the player from being able to enter more guesses (this would mess the game up).
        setGameOver();

    // If the guess is wrong and the player has no turns left:
    } else if (guessCount === 10){
        // Tell the player the game is over.
        lastResult.textContent = "!!!GAME OVER!!! You suck at this :(";
        lowOrHi.textContent = "";

        // Stop the player from being able to enter more guesses (this would mess the game up).
        setGameOver();

    // If it is wrong and the player has turns left:
    } else{
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber){
            lowOrHi.textContent = "Last guess was too low!";
        } else if (userGuess > randomNumber){
            lowOrHi.textContent = "Last guess was too high!";
        }

    }
    // Increment the turn number by 1.
    guessCount ++;
    // Allow them to enter another guess.
    guessField.value = "";
    guessField.focus();
}


// Display control allowing the player to restart the game.
// Display control allowing the player to restart the game.
// Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.