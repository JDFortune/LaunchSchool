/*
get a copy of the array and sort it
get a subarray of all possible indexes where if you sort that value the value matches the sorted array
  iterate from 0 (idx) to length - 1 of array
    iterated from (idx + 1) to length of array
      create a temp array of slicing arr from 0 to idx + idx1 to idx2 + slice index from idx2 to rest of array;
      if the temp array matches the sorted array
        push it sliced array from idx1 to idx2 into subarrays
sort the subarrays by length and return the smallest arrays length;

test that the array when index part is sorted === the sorted array
  pass in the temp array and the sorted array
    iterate over index 0 to last idx of array
      if any value in temp array is not equal to sorted array value
        return false
    return true
*/

// function getSortedSubs(arr, sortedArr) {
//   let subs = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j <= arr.length; j++) {
//       let temp = [...arr.slice(0, i), ...arr.slice(i, j).sort((a, b) => a - b), ...arr.slice(j)];
//       if (testSortedArray(temp, sortedArr)) {
//         subs.push(arr.slice(i, j));
//       }
//     }
//   }
//   return subs;
// }

// function findUnsortedSubarray(arr) {
//   let sortedArr = [...arr].sort((a, b) => a - b);
//   let subs = getSortedSubs(arr, sortedArr);

//   if (testSortedArray(arr, sortedArr)) return 0;
  
//   subs.sort((a, b) => a.length - b.length);
//   return subs.length === 0 ? 0 : subs[0].length;
// }

// function testSortedArray(temp, sortedArr) {
//   for (let i = 0; i < sortedArr.length; i++) {
//     if (temp[i] !== sortedArr[i]){
//       return false;
//     }
//   }
//   return true;
// }

const findUnsortedSubarray = nums => {
	if (nums[0]== Math.min(...nums)) return findUnsortedSubarray(nums.slice(1))
	if (nums[nums.length-1]== Math.max(...nums)) return findUnsortedSubarray(nums.slice(0,-1))
	return nums.length
};


console.log(findUnsortedSubarray([1, 3, 2, 5, 8, 7, 13])); // 5
// You need to sort [3, 2, 5, 8, 7] in ascending order to make
// the whole array sorted in ascending order.
console.log(findUnsortedSubarray([10, 7, 5, 3])); // 4
console.log(findUnsortedSubarray([2, 4, 4, 4, 4, 3])); // 5

