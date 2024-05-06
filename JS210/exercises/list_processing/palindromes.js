// function isPalindrome(str) {
//   return str === [...str].reverse().join('');
// }

// function twoCharMinimumSubstrings(str) {
//   let result = [];

//   for (let i = 0; i < str.length - 1; i += 1) {
//     for (let j = i + 2; j <= str.length ; j += 1) {
//       result.push(str.slice(i, j));
//     }
//   }

//   return result;
// }

// function palindromes(str) {
//   let result = twoCharMinimumSubstrings(str);
//   result = result.filter(string => isPalindrome(string));
//   console.log(result);
//   return result;
// }

function palindromes(str) {
  let result = [];

  for (let idx1 = 0; idx1 < str.length - 1; idx1 += 1) {
    for (let idx2 = idx1 + 2; idx2 <= str.length; idx2 += 1) {
      let substr = str.slice(idx1, idx2);
      if (substr === [...substr].reverse().join('')) result.push(substr);
    }
  }

  console.log(result);
  return result;
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');

palindromes('knitting cassettes');


console.log(console);