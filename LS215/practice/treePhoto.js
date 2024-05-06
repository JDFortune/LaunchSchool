function treePhotography(arr) {
  let leftCount = treesSeen(arr);
  let rightCount = treesSeen(arr.reverse());

  return leftCount > rightCount ? 'left' : 'right';
}

function treesSeen(arr) {
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr.slice(0, i).every(tree => tree < arr[i])) {
      count += 1;
    }
  }
  
  return count;
}

console.log(treePhotography([5, 6, 5, 4])); // "right"
console.log(treePhotography([1, 2, 3, 3, 3, 3, 3])); // "left"
console.log(treePhotography([3, 1, 4, 1, 5, 9, 2, 6])); // "left"