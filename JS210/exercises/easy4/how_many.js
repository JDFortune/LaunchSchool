const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

function countOccurrences(arr) {
  let counts = arr.reduce((obj, vehicle) => ({ ...obj, [vehicle]: (obj[vehicle] || 0) + 1}), {});

  for (let v in counts) {
    console.log(`${v} => ${counts[v]}`);
  }
}

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1