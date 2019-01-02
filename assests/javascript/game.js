/*

!!!!! I can't figure out why the first round of the game does not work properly, but after you win or lose the first round it runs perfectly !!!

*/

//Word Generation
var words = ["snowman", "snowball", "hail", "snow", "blizzard", "frozen", "icicle", "cold", "frost"];
var randomWordNum;
var possLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var word; 
var guessedLetters = [];
var chosenWord = [];
var blanks = [];
var lives = 10;
var b; //to print out blanks without  commas
var score = 0;
randWord();
var letters = word.length;
var already = "";
chosenWord = word.split('');

function randWord() {
      randomWordNum = Math.floor(Math.random() * words.length);
      word = words[randomWordNum];
}

function blanky() {
      //displays the blanks for each letter of the word
      for (let i = 0; i < chosenWord.length; i++) {
            blanks.push("_ ");
            b = document.getElementById("word");
            b.innerHTML = blanks.join(" ");
            // document.getElementById("word").innerHTML = blanks;
      }
}

function lost() {
      if (lives == 0) {
            alert("You lose!");
            lives = 10;
            letters = word.length;
            guessedLetters = [];
            chosenWord = word.split('');
            blanks = [];
            blanky();
      }
}

function restart() {
      randWord();
      letters = word.length;
      guessedLetters = [];
      chosenWord = word.split('');
      blanks = [];
      blanky();
      console.log(blanks.length + " Blanks");
      console.log(chosenWord + " New Chosen word");
      lives = 10;
      score=0;


      b.innerHTML = blanks.join(" ");
      document.getElementById("yourGuess").innerHTML = guessedLetters;
      document.getElementById("lettersLeft").innerHTML = letters;
      document.getElementById("livesLeft").innerHTML = lives;
}

function game() {
      //takes user input and checks if letter or already guessed
      document.onkeyup = function (event) {
            var userGuess = event.key;

            if (possLetters.includes(userGuess)) {

                  for (let j = 0; j < word.length; j++) {
                        if (chosenWord[j] == userGuess) {
                              blanks[j] = userGuess;
                              console.log(blanks);
                              if (letters > 0 && !guessedLetters.includes(userGuess)) {
                                    letters--;
                              }
                        }
                  }
                  if (!word.includes(userGuess) && !guessedLetters.includes(userGuess)) {
                        lives--;
                        lost();
                  }

                  if (guessedLetters.includes(userGuess)) {
                        already = "You already tried that!"
                        document.getElementById("already").innerHTML = already;

                  } else {
                        guessedLetters.push(userGuess);
                        already = "";
                        document.getElementById("already").innerHTML = already;
                  }
            }
            if (letters == 0) {
                  score++;
                  document.getElementById("youWin").innerHTML = score;
                  console.log(score + " is current score");
                  randWord();
                  letters = word.length;
                  guessedLetters = [];
                  chosenWord = word.split('');
                  blanks = [];
                  blanky();
                  console.log(blanks .length+ " Blanks");
                  console.log(chosenWord + " is the new word");
                  lives = 10;
            }


            //Write to html
            b.innerHTML = blanks.join(" ");
            document.getElementById("yourGuess").innerHTML = guessedLetters;
            document.getElementById("lettersLeft").innerHTML = letters;
            document.getElementById("livesLeft").innerHTML = lives;
      }
}

if (letters > 0) {
      randWord();
      blanky();
      game();
      document.getElementById("youWin").innerHTML = score;

}

b.innerHTML = blanks.join(" ");
document.getElementById("yourGuess").innerHTML = guessedLetters;
document.getElementById("lettersLeft").innerHTML = letters;
document.getElementById("livesLeft").innerHTML = lives;


var x = document.getElementById("myAudio");

function playAudio() {
      x.play();
}

function pauseAudio() {
      x.pause();
}