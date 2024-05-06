/*
get an array of all strings variances by swapping two letters.
map over the array of words and return true for each iteration where any of the swapped words is equal to the test word

*/

// function getSwaps(word) {
//   let letters = [...word];
//   let swaps = [word];

//   for (let i = 0; i < letters.length - 1; i++) {
//     for (let j = i + 1; j < letters.length; j++) {
//       let copy = [...letters];
//       [copy[i], copy[j]] = [copy[j], copy[i]];
//       swaps.push(copy.join(''));
//     }
//   }

//   return swaps;
// }

// function validateSwaps(strings, test) {
//   let swapStrings = strings.map(str => getSwaps(str));

//   return strings.map((_, idx) => swapStrings[idx].some(swap => swap === test));
// }


function validateSwaps(strings, test) {
  return strings.map(str => {
    for (let i = 0; i < str.length - 1; i++) {
      for (let j = i + 1; j < str.length; j++) {
        let letters = [...str];
        [letters[i], letters[j]] = [letters[j], letters[i]];
        letters = letters.join('');
        if (letters === test) return true;
      }
    }
    return false;
  });
} 
console.log(validateSwaps(["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE")); //[true, true, false, false]
console.log(validateSwaps(["32145", "12354", "15342", "12543"], "12345")); //[true, true, true, true]
console.log(validateSwaps(["9786", "9788", "97865", "7689"], "9768")); //[true, false, false, false]