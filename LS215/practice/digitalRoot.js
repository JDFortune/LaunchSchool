function digitalRoot(num) {
  let digits = getDigits(num);

  if (digits.length === 1) {
    return digits[0];
  } else {
    return digitalRoot(digits.reduce((total, n) => total + n));
  }
}

function getDigits(num) {
  return [...String(num)].map(Number);
}

console.log(digitalRoot(16));
console.log(digitalRoot(456));