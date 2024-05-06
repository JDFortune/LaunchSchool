function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(num) {
  let sum = 0;

  for (let n = 3; n <= num; ++n) {
    if (isMultiple(n, 3) || isMultiple(n, 5)) sum += n;
  }

  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168