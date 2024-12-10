document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');

  const Calculate = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => num1 / num2,
    '%': (num1, num2) => num1 % num2,
  }

  form.addEventListener('submit', event => {
    event.preventDefault();

    let num1 = +form['num1'].value;
    let num2 = +form['num2'].value;
    let op = form['operation'].value;

    let answer = Calculate[op](num1, num2);
    document.querySelector('.value').textContent = String(answer);
  });
});