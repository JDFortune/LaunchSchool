// declare a process based on string argument
//   returning either shift or pop and storing to a variable

// declare a conditional function for accessing the first or last Element, depending on string argument.Element

// declare a result array that initially contains a copy of the first array

// while the last element is longer than length 1
//   set a temp array to a copy of the last element in the result array
//   set a number to the return of the conditionl pop or shift ofr the temp array
//   add it to the conditional element location to reset the first or last value of the temp array
//   push the temp array into the result array


// return the result array
// const squishElement = (arr, direction) => {
//   if (direction === 'left') {
//     let num = arr.shift();
//     arr[0] += num;
//   } else {
//     let num = arr.pop();
//     arr[arr.length - 1] += num;
//   }
// }

function squish(arr, direction) {
  let result = [arr];
  let removeElement = direction === 'left' ? Array.prototype.shift :
                                             Array.prototype.pop;
  let index = direction === 'left' ? 0 : -1;

  while (result.at(-1).length > 1) {
    let tempArr = [...result.at(-1)];
    let num = removeElement.call(tempArr);
    tempArr.splice(index, 1, num + tempArr.at(index));
    result.push(tempArr);
  }

  return result;
}

console.log(squish([1, 2, 3, 4, 5], "left"));
// [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]]

console.log(squish([1, 2, 3, 4, 5], "right"));
// [[1, 2, 3, 4, 5], [1, 2, 3, 9], [1, 2, 12], [1, 14], [15]]

console.log(squish([3, 2, 3, 4], "left"));
// [[3, 2, 3, 4], [5, 3, 4], [8, 4], [12]]