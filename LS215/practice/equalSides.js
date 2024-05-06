function equalSides(arr) {
  for (let i = 0; i < arr.length; i++) {
    let first = arr.slice(0, i);
    let second = arr.slice(i + 1);

    if (sum(first) === sum(second)) {
      return i;
    }
  }

  return -1;
}

function sum(arr) {
  arr = arr.length === 0 ? [0] : arr;
  return arr.reduce((total, num) => total + num);
}

console.log(equalSides([1,2,3,4,3,2,1])); // 3
console.log(equalSides([1,100,50,-51,1,1])); // 1
console.log(equalSides([1,2,3,4,5,6])); // -1
console.log(equalSides([20,10,30,10,10,15,35])); // 3
console.log(equalSides([20,10,-80,10,10,15,35])); // 0
console.log(equalSides([10,-80,10,10,15,35,20])); // 6
console.log(equalSides([0,0,0,0,0])); // 0
console.log(equalSides([-1,-2,-3,-4,-3,-2,-1])); // 3