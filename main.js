


// Create an array of words
var words = [ "javascript", "monkey", "amazing", "pancake" ];

// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];


// Set up the answer array
var answerArray = [];
for (var i = 0; i < word.length; i++ ) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;

// The game loop
while (remainingLetters > 0) {
    // show the player their progress
    alert(answerArray.join(" "));

    // get a guess from the player
    var guess = prompt("Guess a letter, or click cancle to stop playing.");
    
    if (guess === null) {
        // exit the game loop 
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    }  else { 
        // Update the game state with the guess 
        for (var j = 0; j < word.length; j++) { 
            if (word[j] === guess) { 
            answerArray[j] = guess; 
            remainingLetters--; 
        } 
    } 
}

// end of the game loop
}


alert(answerArray.join(" "));
alert("Good Job! The answer was " + word)


