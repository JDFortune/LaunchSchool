let rlSync = require('readline-sync');
let num1 = Number(rlSync.question('Enter the first number: '));
let num2 = Number(rlSync.question('Enter the second number: '));

let sum = num1 + num2;

console.log(`The sum of ${num1} and ${num2} is ${sum}`);