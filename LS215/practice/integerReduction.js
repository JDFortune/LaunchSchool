function solve(integer, k) {
  digits = [...String(integer)].map(Number);

  for (let i = 0; i < k; i++) {
    removeDigit(digits);
  }

  return digits.join('');
}

function removeDigit(digits) {
  let removed = false;

  for (let i = 0; i < digits.length - 1; i++) {
    if (digits[i] > digits[i + 1]) {
      digits.splice(i, 1);
      removed = true;
      break;
    }
  }

  if (!removed) digits.pop();
}

console.log(solve(123056, 4));
console.log(solve(972, 2));