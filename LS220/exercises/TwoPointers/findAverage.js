// function findAverages(nums, k) {
//   let avgs = [];
//   let sum = 0;
//   let left = 0;
//   let right = k;

//   for (let i = 0; i < right; i++) {
//     sum += nums[i];
//   }

//   avgs.push(sum / k);

//   while (right < nums.length) {
//     sum -= nums[left];
//     left++;
//     sum += nums[right];
//     right++;

//     avgs.push(sum / k);
//   }

//   return avgs;
// }

function findAverages(nums, k) {
  let avgs = [];
  let windowSum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];

    if (right >= k - 1) {
      avgs.push(windowSum / k);
      windowSum -= nums[left];
      left++;
    }
  }

  return avgs;
}

console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]