const rlSync = require('readline-sync');

function product(num) {
  for (let n = 2; n <= num; ++n) {
    result *= n;
  }
  return `The product of the integers between 1 and ${num} is ${result}.`
}

function sum(num) {
  for (let n = 2; n <= num; ++n) {
    result += n;
  }
  return `The sum of the integers between 1 and ${num} is ${result}.`
}

let num = parseInt(rlSync.question('Please enter an integer greater than 0: '), 10);
let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
let result = 1;

switch (operation) {
  case 's':
    result = sum(num);
    break;
  case 'p':
    result = product(num);
    break;
  default:
    result = 'Invalid entry for operation.'
}

console.log(result);

let arr = rlSync.question('Please Enter one or more numbers greater than 0 and separated by commas ",": ');
arr = arr.split(',').map(strNum => parseInt(strNum, 10));

function computeProductOfArray(arr) {
  return arr.reduce((acc, num) => acc * num, 1)
}

function computeSumOfArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

console.log(computeProductOfArray(arr));
console.log(computeSumOfArray(arr));