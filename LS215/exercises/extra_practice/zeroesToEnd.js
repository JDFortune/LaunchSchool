/*
Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.

P Write a function that mutates an array, moving zeroes to the end.

Data
Input - Array that may contain zeroes
Output - same array with zeroes pushed to the end.

Will it always have a zero? no.
Will they always be numbers yes
Could the elements be decimal or always whole? whole
Will the input always be an array? yes
will the array ever be sparse or empty? could be empty


Algorithm:
return the array if empty or if it doesn't contain zeroes

iterate through the indexes of the array
  if the current element is zero
    if the array from current element on are all zeroes
      break out of the loop
    remove the element at current index
    push it to the end of the array
    
  else
    increment index by 1

return the array
  
*/

function zeroesToEnd(arr) {
  if (arr.length === 0 || !arr.includes(0)) return arr;

  let index = 0;
  while (index < arr.length) {
    if (arr.slice(index).every(el => el === 0)) break;
    if (arr[index] === 0) {
      arr.splice(index, 1);
      arr.push(0);
    } else {
      index += 1;
    }
  }

  return arr;
}

console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5])); // [1, 2, 4, 5, 0, 0, 0]

console.log(zeroesToEnd([0, 0, 2, 0, 5])); // [2, 5, 0, 0, 0]

console.log(zeroesToEnd([4, 4, 5])); // [4, 4, 5]

console.log(zeroesToEnd([0, 0])); // [0, 0]

console.log(zeroesToEnd([])); // []