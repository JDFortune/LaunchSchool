function guessIsCorrect(number, guess) {
  return number === Number(guess);
}

function higherOrLower(number, guess) {
  if (number > guess) {
    return `Number is higher than ${guess}.`;
  } else {
    return `Number is lower than ${guess}.`;
  }
}

function validInput(input) {
  return (Number(input.toString()) === input) &&
  (input > 0 && input <= 100);
}

document.addEventListener('DOMContentLoaded', event => {
  let input = document.querySelector('#guess');
  let form = document.querySelector('form');
  let link = document.querySelector('a');
  let paragraph = document.querySelector('p');
  let answer;
  let guesses;

  let guessButton = form.firstElementChild.lastElementChild;

  function newGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    paragraph.textContent = 'Guess a number from 1 and 100';
    input.value = '';
    guessButton.disabled= false;
  }

  form.addEventListener('submit', event => {
    event.preventDefault();

    let guess = Number.parseInt(input.value, 10);
    let message;

    if (validInput(guess)) {
      guesses += 1;

      if (guessIsCorrect(answer, guess)) {
        message = `You've guessed it! It took you ${guesses} guesses.`;
        guessButton.disabled = true;
      } else {
        message = higherOrLower(answer, guess);
      }
    } else {
      message = 'Invalid input. Type a number between 1 and 100 '
    }

    paragraph.textContent = message;
  });

  link.addEventListener('click', event => {
    event.preventDefault();
    newGame();
  });

  newGame();
});