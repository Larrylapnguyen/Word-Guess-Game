//Word Generation
var words = ["dog", "rhinoceros", "gorrilla", "chimpanzee", "lion", "cat", "dolphin"];
var randomWord = Math.floor(Math.random()*words.length);
var answer = words[randomWord];
var wordLength = answer.length;
var display = [wordLength];
var winner = wordLength;
var letters = answer.split(' ');
var outty = " ";

//Counters
var score = 0;
var losses = 0;
var guessesLeft = 10;


for (let i = 0; i < answer.length; i++) {
   display[i] = "_ ";
    outty = outty + display[i];
}
document.getElementById("spots").innerHTML = outty;
output = "";

console.log(answer);

//Input
document.onkeypress=function(event){
    var userGuess = event.key;
    console.log(userGuess);
    if (userGuess == ) {
    
    }
};


