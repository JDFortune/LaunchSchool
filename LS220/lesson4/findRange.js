function findLeftMost(nums, target, end) {
  let currLeftMost = end;
  let left = 0;

  while (left <= end) {
    let mid = Math.floor((left + end) / 2);
    if (nums[mid] === target) {
      currLeftMost = mid;
      end = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }

  return currLeftMost;
}

function findRightMost(nums, target, begin) {
  let currRightMost = begin;
  let right = nums.length - 1;

  while (begin <= right) {
    let mid = Math.floor((begin + right) / 2);
    if (nums[mid] === target) {
      currRightMost = mid;
      begin = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }

  return currRightMost;
}

function findRange(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      let begin = findLeftMost(nums, target, mid);
      let end = findRightMost(nums, target, mid);
      return [begin, end];
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return [-1, -1];
}


console.log(findRange([1, 2, 3, 3, 3, 3, 3, 4, 5], 3));
console.log(findRange([1, 2, 3, 3, 3, 5, 6], 4));