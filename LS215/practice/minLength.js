function getSubs(arr, n) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      let sub = arr.slice(i, j);
      if (sum(sub) > n) {
        result.push(sub);
      }
    }
  }

  return result;
}

function sum(arr) {
  return arr.reduce((total, num) => total + num);
}

function minLength(arr, num) {
  let subs = getSubs(arr, num);
  subs.sort((a, b) => a.length - b.length);

  return subs.length === 0 ? -1 : subs[0].length;
}

console.log(minLength([5, 8, 2, -1, 3, 4], 9)); // 2
console.log(minLength([3, -1, 4, -2, -7, 2], 4)); // 3
// Shortest subarray whose sum exceeds 4 is: [3, -1, 4]
console.log(minLength([1, 0, 0, 0, 1], 1)); // 5
console.log(minLength([0, 1, 1, 0], 2)); // -1