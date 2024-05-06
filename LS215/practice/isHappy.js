const sumSquaredDigits = (num) => {
  return [...String(num)].map(digit => Number(digit) ** 2)
                         .reduce((total, num) => total + num);
}

function isHappy(n) {
  if (n === 1 || n === 4)  return n === 1;
  return isHappy(sumSquaredDigits(n));
}

console.log(isHappy(67)); // false
console.log(isHappy(89)); // false
console.log(isHappy(139)); // true
console.log(isHappy(1327)); // false
console.log(isHappy(2871)); // false
console.log(isHappy(3970)); // true