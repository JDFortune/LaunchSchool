

function treePhotography(trees) {
  if (trees.length === 0) return null;
  
  let treeIsSeen = (tree, idx) => idx === 0 || Math.max(...trees.slice(0, idx)) < tree;

  let left = trees.filter(treeIsSeen).length;
  let right = trees.reverse().filter(treeIsSeen).length;

  if (left === right) return 'either';
  return left > right ? 'left' : 'right';
}

// function treePhotography(trees) {
//   let i = 0;
//   let j = trees.length - 1;
//   let left = 1;
//   let right = 1;
// }

// empty array
console.log(treePhotography([])); // null 

// length of 1
console.log(treePhotography([1])); // 'either'
// check for either
console.log(treePhotography([2, 2, 2])); // 'either'
// check for either
console.log(treePhotography([2, 1, 2])); // 'either'
// zeroes
console.log(treePhotography([5, 6, 5, 4, 0])); // "right"
// zeroes
console.log(treePhotography([0, 1, 2, 5, 6, 5, 4])); // "left"

console.log(treePhotography([5, 6, 5, 4])); // "right"

console.log(treePhotography([1, 2, 3, 3, 3, 3, 3])); // "left"

console.log(treePhotography([3, 1, 4, 1, 5, 9, 2, 6])); // "left"