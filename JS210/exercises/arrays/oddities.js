function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  let array2Copy = array2.slice();
  for (let i = 0; i < array1.length; ++i) {
    let index = array2Copy.indexOf(array1[i]);
    if (index >= 0) {
      array2Copy.splice(index, 1);
    } else {
      return false;
    }
  }

  return true;
}

// function countElements(array) {
//   let elementCounts = {};

//   for (let i = 0; i < array.length; i += 1) {
//     let element = array[i];
//     if (Object.keys(elementCounts).includes(String(element))) {
//       elementCounts[element] = (elementCounts[element] + 1); 
//     } else {
//       elementCounts[element] = 1;
//     }
//   }

//   return elementCounts;
// }
console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true
console.log(areArraysEqual([1, '1'], ['1', 1]));                    // true