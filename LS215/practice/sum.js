/*

flatten the array until no element in the array is an array
transform the array into only their digits
filter out any nulls
sum the numbers

*/

function sum(arr) {
  while (arr.some(el => Array.isArray(el))) {
    arr = arr.flat();
  }

  arr = arr.map(el => el.match(/-?\d+/g));
  arr = arr.filter(el => el !== null).flat().map(Number);
  return arr.length === 0 ? 0 : arr.reduce((total, num) => total + num);
}

console.log(sum(["1", "five", "2wenty", "thr33"])); // 36

console.log(sum([["1X2", "t3n"],["1024", "5", "64"]])); // 1099

console.log(sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]])); // 759