/*
Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

Quesitons:
1. Will both arguments always be whole numbers? If not what should we do?
2. Will first argument allways be mutliple digits?
3. Will the second argument allways be less than the number of digits (and will it be an integer number)?
4. Will we ever receive less arguments than 2? What should we do in this case?
5. WIll we ever receive more than 2 arguments? What should we in this case?
6. Will the shift argument always be a positive number less than or equal to the total number of digits in the first argument?

Data:
  Inputs: number of multiple digits, number for index from right to be shifted
  Output: new number with the nth digit (2nd arg) rotated to the end of the number

Algorithm:
  convert the number to a array of string num characters.

  split the array into two arrays at the index position from right, sepecified by the shift index argument
  rotate the 2nd array of string numbers.
  join the arrays into a string and convert to a number
  return the number

*/
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

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917