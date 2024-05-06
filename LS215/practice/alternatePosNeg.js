/*
set pos = true if first element is greater than zero of false otherwise
iterate through the array
  if pos
    if number less than 0
      return false
  else
    if number greater than zero
      return false
  pos = !pos

  return true

*/

function alternatePosNeg(arr) {
  if (arr.includes(0)) return false;
  let pos = arr[0] > 0 ? true : false;

  for (let i = 0; i < arr.length; i++) {
    if (pos) {
      if (arr[i] < 0) return false;
    } else {
      if (arr[i] > 0) return false;
    }
    pos = !pos;
  }

  return true;
}



console.log(alternatePosNeg([3, -2, 5, -5, 2, -8])); // true
console.log(alternatePosNeg([-6, 1, -1, 4, -3])); // true
console.log(alternatePosNeg([4, 4, -2, 3, -6, 10])); // false