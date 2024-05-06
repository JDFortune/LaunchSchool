function sumSquareDifference(n) {
  let sums = 0;
  let squares = 0
  
  for (let i = 1; i <= n; i++) {
    sums += i;
    squares += (i ** 2);
  }

  return (sums ** 2) - squares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150