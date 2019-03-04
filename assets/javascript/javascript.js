//Grab reference to DOM Elements
var $newGameButton = document.getElementById('new-game-button');
var $placeholders = document.getElementById('placeholders');
var $guessedLetters = document.getElementById('guessed-letters');
var $guessesLeft = document.getElementById('guesses-left');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');

var game = {
   wordBank: ["blackhole","planet","earth","space","vacuum","celestial","gravity"],
   wins: 0,
   losses: 0,
   guessesLeft: 8,
   gameRunning: false,
   pickedWord: '',
   pickedWordPlaceholderArray: [],
   guessedLetterBank: [],
   incorrectLetterBank: [],
   newGame: function() {
     //Reset game info
     this.gameRunning = true;
     this.guessesLeft = 8;
     this.guessedLetterBank = [];
     this.incorrectLetterBank = [];
     this.pickedWordPlaceholderArray = [];

     //Pick a new Word 
     this.pickedWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
     console.log(this.pickedWord);
     for (var i = 0; i < this.pickedWord.length; i++) {
       if (this.pickedWord[i] === ' ') {
         this.pickedWordPlaceholderArray.push(' ');
       }else{ 
         this.pickedWordPlaceholderArray.push('_');
       }
       }
       //Write game info to DOM
       $guessesLeft.textContent = this.guessesLeft;
       $placeholders.textContent = this.pickedWordPlaceholderArray.join('');
       $guessedLetters.textContent = this.incorrectLetterBank;
     },
     letterGuess: function(letter) {
       //run game logic
      if (this.gameRunning === true && this.guessedLetterBank.indexOf(letter) === -1) {
         this.guessedLetterBank.push(letter);

       //Check if guessed letter is in my picked word
       for (i = 0; i < this.pickedWord.length; i++) {
         if (this.pickedWord[i].toLowerCase() === letter.toLowerCase()) {
        //If the letter matches, swap out underscore with letter
        this.pickedWordPlaceholderArray[i] = this.pickedWord[i];
         }
       }
       $placeholders.textContent = this.pickedWordPlaceholderArray.join('');
       this.checkIncorrect(letter);
      }else{ 
        if (!this.gameRunning) {
        alert("the game isnt running, click new game"); 
      }else {
        alert("you've already guessed this letter!");
      
      }
       }
     },
     checkIncorrect: function(letter) {
       if(this.pickedWordPlaceholderArray.indexOf(letter.toLowerCase()) === -1 && this.pickedWordPlaceholderArray.indexOf(letter.toUpperCase()) === -1) {
         this.guessesLeft--;
         this.incorrectLetterBank.push(letter);
         $guessedLetters.textContent = this.incorrectLetterBank.join('');
         $guessesLeft.textContent = this.guessesLeft;
       }
       this.checkLoss();
     },



       checkLoss: function() {
       //Check if you lose
       if (this.guessesLeft === 0) {
         this.losses++;
         //game over
         this.gameRunning = false;
         $losses.textContent = this.losses;
         $placeholders.textContent = this.pickedWord;
       } 
       this.checkWin();
     },
     checkWin: function() {
       if (this.pickedWord.toLowerCase() === this.pickedWordPlaceholderArray.join('')
       .toLowerCase()) {
         this.wins++;
         //end game
         this.gameRunning = false;
         $wins.textContent = this.wins;
       }
     }
   };









//Add event listener for new game button 
$newGameButton.addEventListener('click', function() {
  game.newGame();
});

//Add onkeyup event to trigger letterGuess
document.onkeyup = function(event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    game.letterGuess(event.key);
  }
}
