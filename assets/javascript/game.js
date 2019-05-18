var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 11;
var guessedLetters = [];
var letterToGuess = undefined;

var newGuessesLeft = function () {
    document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guessesLeft;
};

var newLetterToGuess = function () {
    letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

var newGuessesSoFar = function () {
    document.querySelector('#userGuess').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

var reset = function () {
    guessesLeft = 9;
    guessedLetters = [];

    newLetterToGuess();
    newGuessesLeft();
    newGuessesSoFar();
}

document.onkeyup = function (event) {
    guessesLeft--;

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guessedLetters.push(userGuess);
    newGuessesLeft();
    newGuessesSoFar();

    if (guessesLeft > 0) {
        if (userGuess == letterToGuess) {
            wins++;
            document.querySelector('#win').innerHTML = "Wins: " + wins;
            alert("PSYCHI!!!! Try another!");
            reset();
        }
    } else if (guessesLeft == 0) {
        losses++;
        document.querySelector('#loss').innerHTML = "Losses: " + losses;
        alert("Better luck next time try again!");

        reset();
    }
};
