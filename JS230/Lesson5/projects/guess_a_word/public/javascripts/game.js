document.addEventListener('DOMContentLoaded', () => {
  const guesses = document.querySelector('#guesses');
  const letters = document.querySelector('#spaces');
  const replay = document.querySelector('#replay');
  const message = document.querySelector('#message');
  const apples = document.querySelector('#apples');
  
  const randomWord = function() {
    const wordBank = ['apple', 'banana', 'orange', 'pear'];

    return function() {
      let idx = Math.floor(Math.random() * wordBank.length);
      return wordBank.splice(idx, 1)[0];
    }
  }();

  function Game() {
    this.incorrect = 0;
    this.lettersGuessed = [];
    this.correctSpaces = 0;
    this.word = randomWord();

    if (!this.word) {
      this.displayMessage("Sorry, I've run out of words!");
      return this;
    }

    this.word = this.word.split('');
    this.init();
  }

  Game.prototype = {
    guesses: 6,
    constructor: Game,
    createBlanks: function() {
      let spaces = (new Array(this.word.length + 1)).join("<span></span>");
      
      let spans = letters.querySelectorAll("span");
      spans.forEach(span => span.parentNode.removeChild(span));
      letters.insertAdjacentHTML('beforeend', spaces);
      this.spaces = document.querySelectorAll('#spaces span');
    },

    fillBlanksFor: function(letter) {
      this.word.forEach((l, i) => {
        if (letter === l) {
          this.spaces[i].textContent = letter;
          this.correctSpaces++;
        }
      });
    },

    emptyGuesses: function() {
      let spans = guesses.querySelectorAll('span');
      spans.forEach(span => {
        span.parentNode.removeChild(span);
      });
    },

    renderGuess: function(letter) {
      let span = document.createElement('span');
      span.textContent = letter;
      guesses.appendChild(span);
    },

    renderIncorrectGuess: function(letter) {
      this.incorrect++;
      this.renderGuess(letter);
      this.setClass();
    },

    duplicateGuess: function(letter) {
      let duplicate = this.lettersGuessed.indexOf(letter) !== -1;

      if (!duplicate) { this.lettersGuessed.push(letter) }

      return duplicate;
    },

    setClass: function() {
      apples.classList.remove(...apples.classList);
      apples.classList.add(`guess_${this.incorrect}`);
    },

    displayMessage: function(text) {
      message.textContent = text;
    },

    showReplayLink: function() {
      replay.classList.add("visible");
    },

    hideReplayLink: function() {
      replay.classList.remove("visible");
    },

    processGuess: function(e) {
      let letter = e.key;
      if (notALetter(letter)) { return; }
      if (this.duplicateGuess(letter)) { return; }

      if (this.word.includes(letter)) {
        this.fillBlanksFor(letter);
        this.renderGuess(letter);

        if (this.correctSpaces === this.word.length) {
          this.win();
        }
      } else {
        this.renderIncorrectGuess(letter);
      }
      
      if (this.incorrect === this.guesses) {
        this.lose();
      }
    },

    win: function() {
      this.unbind();
      this.displayMessage('You win!');
      this.showReplayLink();
      this.setGameStatus('win');
    },

    lose: function() {
      this.unbind();
      this.displayMessage("Sorry! You're our of guesses.");
      this.showReplayLink();
      this.setGameStatus('lose');
    },

    setGameStatus: function(status) {
      document.body.classList.remove('win', 'lost');

      if (status) document.body.classList.add(status);
    },

    bind: function() {
      this.processGuessHandler = (e) => this.processGuess(e);
      document.addEventListener('keyup', this.processGuessHandler);
    },

    unbind: function() {
      document.removeEventListener('keyup', this.processGuessHandler);
    },

    init: function() {
      this.bind();
      this.setClass();
      this.hideReplayLink();
      this.emptyGuesses();
      this.createBlanks();
      this.setGameStatus();
      this.displayMessage("");
    },
  }

  function notALetter(letter) {
    return letter < 'a' || letter > 'z';
  }

  new Game();

  replay.addEventListener('click', function(e) {
    e.preventDefault();
    new Game();
  });
});