function isSquareInteger(num) {
  let left = 1;
  let right = num;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (mid ** 2 === num) {
      return true;
    } else if (mid ** 2 < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

console.log(isSquareInteger(1) === true);
console.log(isSquareInteger(4) === true);
console.log(isSquareInteger(16) === true);
console.log(isSquareInteger(14) === false);
console.log(isSquareInteger(25) === true);
console.log(isSquareInteger(26) === false);

// All test cases should log true.