function assignTreats(appetites, treats) {
  appetites.sort((a, b) => a - b);
  treats.sort((a, b) => a - b);

  let aIdx = 0;
  let tIdx = 0;
  let satisfied = 0;

  while(aIdx < appetites.length && tIdx < treats.length) {
    if (treats[tIdx] >= appetites[aIdx]) {
      aIdx++;
      satisfied++;
    }
    tIdx++;
  }

  return satisfied;
}

console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
console.log(assignTreats([1, 2, 3], [3]) === 1);
console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
console.log(assignTreats([1,2,3], [1,2,3]) === 3);
console.log(assignTreats([4, 5, 6], [1,2,3]) === 0);

// All test cases should log true.