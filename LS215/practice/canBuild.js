/*

implicit;
  if second arg array is empty return true;

rules:
  the numbers in the array translate to how many the number of index digits are in the array
    create a new array and iterate through the first array arg adding all of the elements to this array.
      iterate over the first arg
        set count to the value of arg index locaions
        while count is greater than zero
          push index into our num array
          decrement count

  using this array
    iterate through the second arg
      convert the number to an array of digits
        for each digit
          if the number exists in our built array
            remove the element
          else
            return false
  return true
*/
function expandCounts(numCounts) {
  return numCounts.flatMap((count, idx) => Array(count).fill(idx));
}

function getDigits(num) {
  return [...String(num)].map(Number);
}

function canBuild(numCounts, nums) {
  let expCountArr = expandCounts(numCounts);
  
  nums = nums.flatMap(num => getDigits(num));
  for(let i = 0; i < nums.length; i++) {
    let digit = nums[i];
    let idx = expCountArr.indexOf(digit);
    if (idx === -1 ) return false;
    expCountArr.splice(idx, 1);
  }

  return true;
}

console.log(canBuild([0, 1, 2, 2, 3, 0, 0, 0, 1, 1], [123, 444, 92])); // true
// You have: one 1, two 2s, two 3s, three 4s, one 8 and one 9
// Using only these digits, you can build 123, 444, and 92
console.log(canBuild([10, 2, 3, 8, 5, 8, 5, 5, 3, 1], [11, 2, 22, 49, 444, 998, 87, 44])); // false
console.log(canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [])); // true
console.log(canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3])); // false