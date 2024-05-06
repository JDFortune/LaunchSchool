
// function doubleConsonants(str) {
//   return [...str].map(char => {
//     return char.match(/[b-df-hj-np-tv-z]/i) ? char.repeat(2) : char
//   }).join('');
// }

function doubleConsonants(string) {
  return string.replace(/([b-df-hj-np-tv-z])/gi, '$1$1');
}

// console.log(repeater('Hello'));        // "HHeelllloo"
// console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
// console.log(repeater(''));             // ""

console.log(doubleConsonants('String') === "SSttrrinngg");
console.log(doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!");
console.log(doubleConsonants('July 4th') === "JJullyy 4tthh");
console.log(doubleConsonants('') === "");