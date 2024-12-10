function getNeighbors(arr, x, y) {
  let neighbors = [];

  for (let i = (x - 1); i <= (x + 1); i++) {
    if (arr[i] === undefined) continue;
    for (let j = (y - 1); j <= (y + 1); j++) {
      if (arr[i][j] === undefined) continue;
      neighbors.push(arr[i][j]);
    }
  }

  return neighbors.filter(num => num > -Infinity && num < Infinity);
}

function lowestElement(arr, x, y) {
  if (arr.length === 0 || arr[0].length === 0) return null;
  if (arr[x] === undefined || arr[x][y] === undefined) return null;
  
  let neighbors = getNeighbors(arr, x, y);
  
  return Math.min(...neighbors);
}


console.log(lowestElement([], 1, 1) === null)
console.log(lowestElement([[]], 1, 1) === null)

// Tie for lowest neighbors
console.log(lowestElement([
  [1, 2, 1],
  [4, 5, 6],
  [7, 8, 9]
], 1, 1) === 1)

// Infinity/-Infinity may be present. If present, return the next lowest value (ignore infinities)
console.log(lowestElement([
  [-Infinity, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 1, 1) === 2)


// Matrix can be of any row/column length, but always symmetrical
console.log(lowestElement([
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
], 2, 2) === 6)


// Invalid coordinate
console.log(lowestElement([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 4, 4) === null)


console.log(lowestElement([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 1, 1) === 1)



console.log(lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 0, 0) === -1)
