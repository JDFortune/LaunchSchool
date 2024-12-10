function findLeftMost(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let currLeftMost;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) {
      currLeftMost = mid;
    } 
    
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return currLeftMost;
}

function findRightMost(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let currRightMost;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) {
      currRightMost = mid;
    }
    
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return currRightMost;
}

function isTargetFrequent(nums, target) {
  return  findRightMost(nums, target) - findLeftMost(nums, target)  >= 3;
}


console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 3) === true);
console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 1) === true);
console.log(isTargetFrequent([1, 2, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([1, 1, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([2, 2, 2, 3, 3, 3, 4], 3) === false);
console.log(isTargetFrequent([4, 4, 4, 4, 4, 4, 4], 4) === true);

// All test cases should log true.