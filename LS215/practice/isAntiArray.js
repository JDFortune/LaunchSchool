/*
get the two values of array one
map over array one
  if swap the value for each index

iterate over the new transformed array
for each index if transformed[index] is not equal to array2[index]
  return false

return ture;
*/

function isAntiArray(arr1, arr2) {
  let arr1Elements = getElements(arr1);
  let transformed = arr1.map(el => el === arr1[0] ? arr1[1] : arr1[0]);

  for (let i = 0; i < transformed.length; i++) {
    if (transformed[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

function getElements(arr) {
  let elements = [];
  arr.forEach(el => {
    if (!elements.includes(el)) elements.push(el);
  });

  return elements;
}

console.log(isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"])); // ➞ true
console.log(isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"])); // ➞ true
console.log(isAntiArray([3.14, true, 3.14], [3.14, false, 3.14])); // ➞ false