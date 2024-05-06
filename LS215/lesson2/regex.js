function isUrl(str) {
  return !!str.match(/^https?:\/\/\S+$/);
}

console.log(isUrl('https://launchschool.com'));   // -> true
console.log(isUrl('http://example.com'));         // -> true
console.log(isUrl('https://example.com hello'));  // -> false
console.log(isUrl('   https://example.com'));     // -> false

function fields(str) {
  return str.split(/[ \t,]+/);
}

console.log(fields("Pete,201,Student"));    // ['Pete', '201', 'Student']
console.log(fields("Pete \t 201   ,  TA")); // ['Pete', '201', 'TA']
console.log(fields("Pete \t 201"));         // ['Pete', '201']
console.log(fields("Pete \n 201"));         // ['Pete', '\n', '201']

function mysteryMath(str) {
  return str.replace(/[+\-*\/]/g, '?');
}

console.log(mysteryMath('4 + 3 - 5 = 2'));
// '4 ? 3 - 5 = 2'

console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));
// '(4 ? 3 + 2) / 7 - 1 = 1'

function danish(str) {
  console.log(str.replace(/\b(apple|cherry|blueberry)\b/, 'danish'));
}

danish('An apple a day keeps the doctor away');
// -> 'An danish a day keeps the doctor away'

danish('My favorite is blueberry pie');
// -> 'My favorite is danish pie'

danish('The cherry of my eye');
// -> 'The danish of my eye'

danish('apple. cherry. blueberry.');
// -> 'danish. cherry. blueberry.'

danish('I love pineapple');
// -> 'I love pineapple'