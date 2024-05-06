/*
get two arrays;
  northSouth the max heights of each columns (view of columns (iterated from rows))
  eastWest the max heights for each rows (view of rows (iterated by columns))

iterate from 0 to outer array length (row)
  iterate from 0 to inner array length (col)
    set the current index element to the minimum value of the element at northSouth[col] and eastWest[row]


*/

// function keepSkyline(arr) {
//   let eastToWest = arr.map(row => Math.max(...row));
//   let northToSouth = arr[0].map((_, idx) => Math.max(...arr.map(row => row[idx])));

//   console.log(eastToWest, northToSouth)
//   for (let i = 0; i < arr.length; i++) {
//     let row = arr[i];
//     for (let j = 0; j < row.length; j++) {
//       let min = Math.min(eastToWest[i], northToSouth[j])
//       row[j] = row[j] === 0 ? 0 : min; 
//     }
//   }

//   return arr;
// }

function keepSkyline(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      r_max = Math.max(...arr[i]);
      c_max = Math.max(...arr.map(row => row[j]));
      arr[i][j] = arr[i][j] === 0 ? 0 : Math.min(r_max, c_max);
    }
  }

  return arr;
}

console.log(keepSkyline([
  [3, 0, 8, 4],
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0]
]));


console.log(keepSkyline([[11, 19, 5, 13, 6], [11, 21, 5, 13, 6], [11, 11, 0, 11, 6]]));