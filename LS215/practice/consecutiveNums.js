/*
Notes:
  - Input: array of integers, integers for size of grouped chunks
  - Ouptut: Boolean whether the array can be comprised of chunks of the given size with
            each chunk being consecutive numbers

Rules:
  - we could have duplicate entries
    - in this case separate the duplicates into their own chunk. 
Algorithm:
  - guard clause: if the size of the given array is not evenly divisible by the chunk size return false
  - sort the array in ascending order
  - set chunks array [];

  - set temp to empty array [];
  - while the array is NOT empty
    - set idx to 0;
    - while index is < the array length & temp length is less than chunk size
      - else if current arr element at index is equal to last temp el
        add one to idx
      - else if current element is greater than one more than last element
        break out of iteration;
      - else
        push current element into temp and remove from array

    - push temp into chunks
    - reset temp to empty
*/    

// function consecutiveNums(arr, size) {
//   if (arr.length % size !== 0) return false;
//   arr.sort((a, b) => a - b);
//   let chunks = [];

//   let temp = [];
//   while (arr.length > 0) {
//     let idx = 0;
//     while (idx < arr.length && temp.length < size) {
//       let currentEl = arr[idx];
//       if (temp.length === 0) {
//         temp.push(arr.splice(idx, 1)[0]);
//       } else if (currentEl === temp[temp.length - 1]) {
//         idx += 1;
//       } else if (currentEl > (temp[temp.length - 1] + 1)) {
//         break;
//       } else {
//         temp.push(arr.splice(idx, 1)[0]);
//       }
//     }
  
//     chunks.push(temp);
//     temp = [];
//   }

//   return chunks.map(chunk => chunk.length === size).every(el => el === true);
// }

function consecutiveNums(arr, groupLen) {
	while (arr.length > 0) {
		if (arr.length % groupLen) return false;
		const start = Math.min(...arr);
		for (let i = start; i < start + groupLen; i++) {
			if (!arr.includes(i)) return false;
			arr.splice(arr.indexOf(i), 1);
		}
	}

	return true;
}

console.log(consecutiveNums([1, 3, 5], 1)); // true
console.log(consecutiveNums([5, 6, 3, 4], 2)); // true
console.log(consecutiveNums([1, 3, 4, 5], 2)); // false
console.log(consecutiveNums([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)); // true
console.log(consecutiveNums([1, 2, 3, 4, 5], 4)); // false