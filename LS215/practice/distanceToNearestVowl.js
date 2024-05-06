// const isVowel = (chr) => /[aeiou]/.test(chr) && chr !== undefined;

// function distanceToNearestVowel(str) {
//   if (!isVowel(str)) return [];
//   let chars = [...str];

//   let positions = chars.map((chr, idx) => {
//     if (isVowel(chr)) {
//       return 0;
//     } else {
//       let [left, right] = [1, 1];
//       let vowelFound = false;

//       while (!vowelFound) {
//         if (isVowel(chars[idx - left])) {
//           return left;
//         } else if (isVowel(chars[idx + right])) {
//           return right;
//         }
//         [++left, ++right];
//       }
//     }
//   });

//   return positions
// }

function distanceToNearestVowel(str) {
	let vowels = [...str].map((v,i) => /[aeiou]/.test(v) ? i : -1).filter(v => v >= 0);
  console.log(vowels);
	return [...str].map((_,i) => Math.min(...vowels.map(v => Math.abs(i - v))));
}

console.log(distanceToNearestVowel("aaaaa")); // [0, 0, 0, 0, 0]

console.log(distanceToNearestVowel("babbb")); // [1, 0, 1, 2, 3]

console.log(distanceToNearestVowel("abcdabcd")); // [0, 1, 2, 1, 0, 1, 2, 3]

console.log(distanceToNearestVowel("shopper")); // [2, 1, 0, 1, 1, 0, 1]