const Game = {
  generateNumber() {
    return Math.ceil(Math.random() * 100);
  },

  render(result) {
    if (result.gameOver) {
      this.button.setAttribute('disabled', 'true');
    }

    this.message.textContent = result.message;
  },

  evaluateGuess() {
    let result;
    let inputValue = Number(this.input.value);
    this.guessAttempts++;

    if (this.number === inputValue) {
      result = {gameOver: true, message: `You guessed it! It took you ${this.guessAttempts} guesses`};
    } else {
      if (this.guessAttempts === this.guessMax) {
        result = {gameOver: true, message: `Out of guesses. The number was ${this.number}`};
      } else {
        let status = this.number > inputValue ? 'higher' : 'lower';
        result = {
                  gameOver: false,
                  message: `The number is ${status} than ${inputValue}. ${this.guessMax - this.guessAttempts} guesses remaining.`
                 };
      }
    }

    this.render(result);
  },

  validInput(event) {
    event.preventDefault();
    let pattern = new RegExp(this.input.dataset.pattern);
    if (pattern.test(event.key) && (Number(this.input.value + event.key) <= 100)) {
      this.input.value += event.key;
    }
  },

  bindEvents() {
    this.boundEvaluateGuess = this.evaluateGuess.bind(this);
    this.resetBind = this.reset.bind(this);
    this.button.addEventListener('click', this.boundEvaluateGuess);
    this.newGame.addEventListener('click', this.resetBind);
    this.input.addEventListener('keypress', this.validInput.bind(this));
  },

  reset() {
    this.button.removeEventListener('click', this.boundEvaluateGuess);
    this.newGame.removeEventListener('click', this.boundInit);
    this.init();
  },

  init() {
    this.input = document.querySelector('input');
    this.button = document.querySelector('button');
    this.newGame = document.querySelector('a');
    this.message = document.querySelector('.message');

    this.number = this.generateNumber();
    this.guessMax = 6;
    this.guessAttempts = 0;

    this.message.textContent = 'Guess a number from 1 to 100';
    this.input.value = '';
    if (this.button.hasAttribute('disabled')) this.button.removeAttribute('disabled');

    this.bindEvents();

    return this;
  },
}

document.addEventListener('DOMContentLoaded', () => {
  let game = Object.create(Game).init();
});