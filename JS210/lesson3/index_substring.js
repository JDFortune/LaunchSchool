// Write two functions that each take two strings as arguments.

// - The `indexOf` function searches for the first instance of a substring in `firstString` that matches the string `secondString`, and returns the index of the character where the substring begins.

// - The `lastIndexOf` function searchs for the last instance of a substring in `firstString` that matches the string `secondString`, and returns the index of the character where the substring begins.

// -- Both functions return `-1` if `firstString` does not contain the substring specified in `secondString`

// Problem
// - Write methods that return the first and last instance of a substring from a string
// Rule:
//   - return -1 if there is no instance of a substring in the string.
// Inputs:
//   - 2 strings, the original string and the test substring
// Outputs:
//   - integer for index where:
//     - `indexOf` first matching substring starts
//     - `lastIndexOf` last matching substring starts
// Algorithm:
//   1. Iterate through the length of the string.
//       If the curruent index character for the length of the substring matches the substring
//       retrun the index
//       return -1 at the end if there is no match
//   2.Set a last match value to hold the max index of a substring (set to -1)
//     Iterate through the entire stringlength
//       if a substring matches, set the new index to max index
// C

function stringMatch(string, index, substring) {
  return string.slice(index, index + substring.length) === substring
}

function findIndexes(firstString, secondString) {
  let result = [];
  for (let i = 0; i <= firstString.length - secondString.length; i += 1) {
    if (stringMatch(firstString, i, secondString)) {
      result.push(i);
    }
  }
  return result;
}

function indexOf(firstString, secondString) {
  let indexes = findIndexes(firstString, secondString);
  console.log(indexes.shift() || -1)
}

function lastIndexOf(firstString, secondString) {
  let indexes = findIndexes(firstString, secondString);
  console.log(indexes.pop() || -1)
}

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1


/* Launch School Solution
function indexOf(firstString, secondString) {
  let limit = firstString.length - secondString.length;

  for (let indexFirst = 0; indexFirst <= limit; indexFirst += 1) {
    let matchCount = 0;

    for (let indexSecond = 0; indexSecond < secondString.length; indexSecond += 1) {
      if (firstString[indexFirst + indexSecond] === secondString[indexSecond]) {
        matchCount += 1;
      } else {
        break;
      }
    }

    if (matchCount === secondString.length) {
      return indexFirst;
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  let limit = firstString.length - secondString.length;

  for (let indexFirst = limit; indexFirst >= 0; indexFirst -= 1) {
    let matchCount = 0;

    for (let indexSecond = 0; indexSecond < secondString.length; indexSecond += 1) {
      if (firstString[indexFirst + indexSecond] === secondString[indexSecond]) {
        matchCount += 1;
      } else {
        break;
      }
    }

    if (matchCount === secondString.length) {
      return indexFirst;
    }
  }

  return -1;
}
*/
