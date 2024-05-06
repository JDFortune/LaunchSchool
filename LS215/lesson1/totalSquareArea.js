function totalArea(arr) {
  return arr.map(([height, width]) => width * height).reduce((total, area) => total + area);
}

// let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// console.log(totalArea(rectangles));    // 141

function totalSquareArea(arr) {
  let squares = arr.filter(([height, width]) => height === width)
  return totalArea(squares);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121