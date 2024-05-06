// let alphabeticNumberSort= function(arr) {
//   const numberWords = [
//       'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
//       'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
//       'eighteen', 'nineteen',
//       ];

//   let result = [...arr];

//   let sorted = false;
  
//   while (!sorted) {
//     sorted = true;
//     for (let i = 0; i < result.length - 1; i += 1) {
//       if (numberWords[result[i]] > numberWords[result[i + 1]]) {
//         [result[i], result[i + 1]] = [result[i + 1], result[i]];
//         sorted = false;
//       }
//     }
//   }
//   return result;
// }

let alphabeticNumberSort = function(arr) {
  const numberWords = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
    'eighteen', 'nineteen',
    ];

  return [...arr].map(idx => numberWords[idx]).sort().map(word => numberWords.indexOf(word));
}



console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));