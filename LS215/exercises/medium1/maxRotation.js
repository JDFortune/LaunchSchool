/*
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

P: Iterating through the index positions of a number, rotating the current index postion number to the end of the number for each iteration, returning the final number

Data:
  Input: Whole number
  Ouput: max rotated number

Algorithm:
get the lenght of the number (num of digits)
iterate from length - 1 - idx (iterating from idx 0 to last index of length)
  rotate the number from the given shift idx
return the new number

*/

function maxRotation(num) {
  let length = String(num).length;
  for (let i = 0; i < length; i++) {
    num = rotateRightmostDigits(num, length - i );
  }

  return num;
}

function rotateRightmostDigits(num, shiftPos) {
  let strDigits = [...String(num)];
  let rotatedArray = strDigits.slice(0, -shiftPos).concat(rotateArray(strDigits.slice(-shiftPos)));
  return Number(rotatedArray.join(''));
}

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).concat(arr[0]);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845