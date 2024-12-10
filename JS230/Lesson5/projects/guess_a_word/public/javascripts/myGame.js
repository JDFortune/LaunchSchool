document.addEventListener('DOMContentLoaded', e => {
  let guesses = document.querySelector('#guesses');
  let letters = document.querySelector('#spaces');
  let apples = document.querySelector('#apples');
  let replay = document.querySelector('#replay');
  let message = document.querySelector('#message');

  const randomWord = function() {
    let words = ['apple', 'orange', 'banana', 'pear', 'stipend', 'peacock', 'marmalade', 'haram', 'life', 'justice', 'love', 'happiness', 'joy'];

    return function() {
      let word = words[Math.floor(Math.random() * words.length)];
      words.splice(words.indexOf(word), 1);

      return word;
    }
  }();

  function Game() {
    this.guessedLetters = [];
    this.correct = 0;
    this.incorrect = 0;
    this.word = randomWord();

    if (!this.word) {
      this.displayMessage('Sorry! We are out of words');
      return;
    }

    this.word = this.word.split('');
    this.init();
  }

  Game.prototype = {
    guesses: 6,
    constructor: Game,
    displayMessage(text) {
      message.textContent = text;
    },

    duplicateGuess(letter) {
      let duplicate = this.guessedLetters.indexOf(letter) !== -1;

      if (!duplicate) this.guessedLetters.push(letter);

      return duplicate;
    },

    setSpaces() {
      letters.querySelectorAll('span').forEach(span => letters.removeChild(span));
      let spans = '<span></span>'.repeat(this.word.length);
      letters.insertAdjacentHTML('beforeend', spans);
      this.spans = letters.querySelectorAll('span');
    },

    processGuess(event) {
      let letter = event.key;
      if (isNotLetter(letter)) return;
      if (this.duplicateGuess(letter)) return;
      
      if (this.word.includes(letter)) {
        this.fillBlanksFor(letter);
        this.renderGuess(letter);
        
        if (this.correct === this.word.length) {
          this.win();
        }
      } else {
        this.renderIncorrectGuess(letter);
      }
      
      if (this.incorrect === this.guesses) {
        this.lose();
      }
    },
    
    fillBlanksFor(letter) {
      this.word.forEach((l, i) => {
        if (letter === l) {
          this.spans[i].textContent = letter;
          this.correct++;
        }
      });      
    },

    win() {
      this.unbindEvent();
      this.setGameStatus('win');
      this.displayMessage('You won!');
      this.showReplayLink();
    },

    lose() {
      this.unbindEvent();
      this.setGameStatus('lose');
      this.displayMessage('Sorry. You are out of guesses');
      this.showReplayLink();
    },

    renderGuess(letter) {
      let span = document.createElement('span');
      span.textContent = letter;
      console.log(span);
      guesses.appendChild(span);
    },

    renderIncorrectGuess(letter) {
      this.incorrect++;
      this.renderGuess(letter);
      this.setApples();
    },

    setApples() {
      apples.classList.remove(...apples.classList);
      apples.classList.add(`guess_${this.incorrect}`);
    },

    setGameStatus(status) {
      document.body.classList.remove('win', 'lose');
      if (status) document.body.classList.add(status);
    },

    showReplayLink() {
      replay.classList.add('visible');
    },

    hideReplayLink() {
      replay.classList.remove('visible');
    },


    bindEvent() {
      this.processGuessHandler = (e) => this.processGuess(e);
      document.addEventListener('keyup', this.processGuessHandler);
    },

    unbindEvent() {
      document.removeEventListener('keyup', this.processGuessHandler);
    },

    clearGuesses() {
      guesses.querySelectorAll('span').forEach(span => guesses.removeChild(span));
    },

    init() {
      this.bindEvent();
      this.clearGuesses();
      this.setApples();
      this.setSpaces();
      this.setGameStatus();
      this.displayMessage("");
      this.hideReplayLink();
    }
  }

  function isNotLetter(letter) {
    return letter < 'a' || letter > 'z';
  }

  new Game();

  replay.addEventListener('click', event => {
    event.preventDefault();
    new Game();
  });
});