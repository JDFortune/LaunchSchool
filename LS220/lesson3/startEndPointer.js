function findTwoNumbers(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let sum = nums[start] + nums[end];
    if (sum < target) {
      start++;
    } else if (sum > target) {
      end--;
    } else {
      return [nums[start], nums[end]];
    }
  }

  return null;
}

const nums = [1, 3, 6, 7, 8, 12];
const target = 14;
console.log(findTwoNumbers(nums, target)); // Output: [6, 8]