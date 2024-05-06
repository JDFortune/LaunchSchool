function squish(arr, direction) {
  let result = [arr];

  let proc = direction === 'left' ? Array.prototype.shift : Array.prototype.pop;
  let idx = direction === 'left' ? 0 : -1;

  while (result.slice(-1)[0].length > 1) {
    let copy = [...result.slice(-1)[0]];
    let val = proc.call(copy);
    copy.splice(idx, 1, copy.slice(idx)[0] + val);
    result.push(copy);
  }

  return result.length[0] === 1 ? result.flat() : result;
}

console.log(squish([1, 2, 3, 4, 5], "left")); // [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]]
console.log(squish([1, 2, 3, 4, 5], "right")); // [[1, 2, 3, 4, 5], [1, 2, 3, 9], [1, 2, 12], [1, 14], [15]]
console.log(squish([1, 0, 2, -3], "left")); // [[1, 0, 2, -3], [1, 2, -3], [3, -3], [0]]
console.log(squish([1, 0, 2, -3], "right")); // [[1, 0, 2, -3], [1, 0, -1], [1, -1], [0]]