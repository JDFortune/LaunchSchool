function mineLocation(arr) {
  for (let i = 0; i < arr.length; i++) {
    let row = arr[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === 1) {
        return [i, j];
      }
    }
  }
}

console.log(mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] )); //== [0, 0]
console.log(mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] )); //== [1, 1]
console.log(mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] )); //== [2, 1]
console.log(mineLocation([ [1, 0], [0, 0] ])); //== [0, 0]
console.log(mineLocation([ [1, 0, 0], [0, 0, 0], [0, 0, 0] ])); //== [0, 0]
console.log(mineLocation([ [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0] ])); //== [2, 2]