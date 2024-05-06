/*
Give n and p
dtermin k by dividing the sum of each digit in n to the power of p, incrementing p by 1 each digit

*/

function digPow(n, p) {
  let digits = [...String(n)].map(Number);

  let powers = digits.map((digit, idx) => digit ** (p + idx));
  let sum = powers.reduce((total, num) => total + num);

  let k = sum / n;
  if (k === Math.floor(k)) {
    return k;
  } else {
    return -1;
  }
}

console.log(digPow(89, 1)); // 1
console.log(digPow(92, 1)); // -1
console.log(digPow(46288, 3)); // 51
console.log(digPow(695, 2)); // 2