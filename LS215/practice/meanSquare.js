function meanSquare(arr1, arr2) {
  return arr1.map((num, idx) => Math.abs(num - arr2[idx])).filter(el => el !== 0).map(el => el ** 2).reduce((total, num) => total + num) / arr1.length;
}

console.log(meanSquare([1, 2, 3], [4, 5, 6])); //== 9
console.log(meanSquare([10, 20, 10, 2], [10, 25, 5, -2])); //== 16.5
console.log(meanSquare([-1, 0], [0, -1])); //== 1