/*
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

Questions:
Will the word always be lowercase?
Will the argument always be a string?
Will the 
*/
const DIGIT_WORDS = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
}

function wordToDigit(str) {
  let strings = str.split(/(\s+|[.,?!'])/).filter(Boolean);
  let transformed = strings.map(el => Object.keys(DIGIT_WORDS).includes(el) ? DIGIT_WORDS[el] : el);
  
  return formatNumber(transformed.join(''));
}

function formatNumber(str) {
  str = str.replace(/(\d)(\s)/g, '$1');
  return str.replace(/\d+/g, (match) => `${match.slice(0, 3)}-${match.slice(3)}`);
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."