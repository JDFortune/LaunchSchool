function twoSumLessThanTarget(nums, target) {
  let sortedNums = insertionSort(nums);

  let max = -1;
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let sum = sortedNums[start] + sortedNums[end];
    if (sum < target) {
      max = Math.max(max, sum);
      start++;
    } else {
      end--;
    }
  }

  return max;
}

function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    let j = i - 1;

    while (j >= 0 && nums[j] >= current) {
      nums[j + 1] = nums[j];
      j--;
    }

    nums[j + 1] = current;
  }

  return nums;
}

console.log(twoSumLessThanTarget([3, 1, 4], 5) === 4);
console.log(twoSumLessThanTarget([8, 2, 4, 9, 5, 10, 1, 7], 16) === 15);
console.log(twoSumLessThanTarget([5, 8, 3, 2, 1], 6) === 5);
console.log(twoSumLessThanTarget([6, 8, 10, 12], 5) === -1);
console.log(twoSumLessThanTarget([1, 2, 3, 4, 5], 100) === 9);
console.log(twoSumLessThanTarget([10, 20, 30, 40, 50], 40) === 30);
console.log(twoSumLessThanTarget([7, 4, 15, 11, 21, 9], 24) === 22);
