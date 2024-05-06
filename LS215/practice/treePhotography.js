/*
  we'll set the base line from left most tree and baseline from right most tree, then count the number of trees that are taller than the left most;

  return left is the left tree sees more trees return right if the right tree returns more trees

*/

function treePhotography(arr) {
  let leftBase = arr[0];
  let rightBase = arr.at(-1);

  let leftCount = arr.slice(1).reduce((count, treeHeight) => { 
    return treeHeight > leftBase ? count + 1 : count;
  }, 1);

  let rightCount = arr.reverse().slice(1).reduce((count, treeHeight) => {
    return treeHeight > rightBase ? count + 1 : count;
  }, 1);

  return leftCount > rightCount ? 'left' : 'right';
}

console.log(treePhotography([5, 6, 5, 4])); // "right"
console.log(treePhotography([1, 2, 3, 3, 3, 3, 3])); // "left"

console.log(treePhotography([3, 1, 4, 1, 5, 9, 2, 6])); // "left"