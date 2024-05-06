function persistence(num) {
  let digits = [...String(num)];
  let count = 0;
  while (digits.length > 1) {
    let current = digits.map(Number).reduce((total, n) => total * n);
    count += 1;
    digits = [...String(current)];
  }

  return count;
}

console.log(persistence(39)); //== 3
console.log(persistence(4)); //== 0
console.log(persistence(25)); //== 2
console.log(persistence(999)); //== 4