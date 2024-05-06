function deleteDigit(num) {
  let digits = [...String(num)]

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] < digits[i + 1]) {
      digits.splice(i, 1);
      return parseInt(digits.join(''), 10);
    }
  }

  return num / 10;
}

console.log(deleteDigit(152)); //== 52
console.log(deleteDigit(1001)); //== 101
console.log(deleteDigit(10)); //== 1