/*
Given an array of coins, father needs to distribute them amongst his three children. Write a function to determine if the coins can be distributed equally or not. Return true if each son receives the same amount of money, otherwise return false.

*/

function coinsDiv(coins) {
  let divAmt = coins.reduce((total, num) => total + num) / 3;
  coins.sort((a, b) => a - b);
  let parts = Array(3).fill(divAmt);

  for (let i = 0; i < 3; i++) {
    while (parts[i]) {
      let idx = coins.findIndex(coin => coin === parts[i]);
      if (idx === -1) idx = coins.findIndex(coin => coin < parts[i]);
      if (idx === -1) return false;
      parts[i] -= coins.splice(idx, 1);
    }
  }

  return true;
}


console.log(coinsDiv([1, 2, 3, 2, 2, 2, 3])); // true
console.log(coinsDiv([5, 3, 10, 1, 2])); // false
console.log(coinsDiv([2, 4, 3, 2, 4, 9, 7, 8, 6, 9])); // true