function expandForm(num) {
  let digits = [...String(num)].reverse();

  return digits.map((digit, idx) => String(digit) + '0'.repeat(idx))
               .filter(num => Number(num) !== 0)
               .reverse()
               .join(' + ');
}

console.log(expandForm(12)); //== '10 + 2'
console.log(expandForm(42)); //== '40 + 2'
console.log(expandForm(70304)); //== '70000 + 300 + 4'