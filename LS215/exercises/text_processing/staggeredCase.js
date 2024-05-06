// function staggeredCase(string) {
//   return [...string].map((chr, index) => index % 2 === 0 ? chr.toUpperCase() : chr.toLowerCase()).join('');
// }

// function staggeredCase(string, [a, b = ''] = string ) {
//   return string && a.toUpperCase() + b.toLowerCase() + staggeredCase(string.slice(2));
// }

// console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
// console.log(staggeredCase(''));

function staggeredCase(string) {
  let upper = true;

  return [...string].map((chr, index) => {
    if (/[^a-z]/i.test(chr)) {
      return chr;
    } else {
      upper = !upper
      return !upper ? chr.toUpperCase() : chr.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"