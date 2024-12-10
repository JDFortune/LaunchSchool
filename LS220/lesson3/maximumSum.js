function maximumSum(arr, k) {
  if (arr.length < k || k < 1) return null;

  let left = 0;
  let right = k - 1;
  let current = 0;

  for (let i = 0; i <= right; i++) {
    current += arr[i];
  }
  let max = current;

  while (right < arr.length) {
    current -= arr[left];
    left++;
    right++;
    current += arr[right];

    max = Math.max(max, current);
  }
  return max;
}

let nums1 = maximumSum([3, 2, 6, 5, 1, 10, -2], k = 4);
// Output: 22

let nums2 = maximumSum([1, 2, 3], k = 4);
// Output: null

let nums3 = maximumSum([1, 2, 3], k = 0);
// Output: null

console.log(nums1);
console.log(nums2);
console.log(nums3);