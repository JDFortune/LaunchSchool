function test(arr) {
  let counts = {even: [], odd: []}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      counts.even.push(arr[i]);
    } else {
      counts.odd.push(arr[i]);
    }
  }
  
  return Object.values(counts).filter(group => group.length === 1)[0][0];
}

console.log(test([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(test([160, 3, 1719, 19, 11, 13, -21]));