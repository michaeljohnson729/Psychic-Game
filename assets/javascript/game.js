var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];


document.onkeyup = function (event) {
    var userGuess = event.key;
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        guessedLetters.push(userGuess);
        document.getElementById("guesses").innerHTML = guessedLetters
        var randomLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(randomLetter);
        if (userGuess === randomLetter) {
            wins++;
            document.getElementById("wins").innerHTML = wins;
            alert("YOU WON!!!!");
        }
        else {
            guessesLeft--;
            document.getElementById("guesses-left").innerHTML = guessesLeft;
        }
        if (guessesLeft === 0) {
            losses++;
            document.getElementById("losses").innerHTML = losses;
            guessesLeft = 9;
            guessedLetters = [];

        }
    }
}

