
function getNumber(prompt) {
  let rlSync = require('readline-sync');
  let num = Number(rlSync.question(prompt));

  return num;
}

function multiply(num1, num2) {
  return num1 * num2;
}

let num1 = getNumber('Enter the first number: ');
let num2 = getNumber('Enter the second number: ');

console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);