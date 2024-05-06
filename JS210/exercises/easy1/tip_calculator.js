let rlSync = require('readline-sync');

let bill = Number(rlSync.question('What is the bill? '));
let percent = Number(rlSync.question('What is the tip percentage? '));

let tip = bill * (percent / 100);
let total = bill + tip;

console.log(`The tip is ${tip.toFixed(2)}`);
console.log(`The total is ${total.toFixed(2)}`);