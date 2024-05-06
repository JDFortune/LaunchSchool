/*
  Given a string of words, return the word with the highest score, by adding their values, based on index position in the alphabet

  Questions?
    1. Will we always be given a string of words?
    2. Will we ever be given no arguments or more than one argument? WHat do we do in this case?
    3. Are the strings case-sensitive? Does case matter?
    4. Could two words have the same total value? What do we do in this case?

  Data
   input: string of words separated by spaces
   output: string word with highest value

  Algorithm:
  - create a reference to grab the value of the index position of each character in the word
  - declare an empty obj
  - split the string into an array of words
    iterate over the words array
      assign word as key to value of word index values summed
  - return the word with the highest value
    - find the max value
    - return the word with the associated value
*/

function high(str) {
  let words = str.split(' ');
  let values = {};

  words.forEach(word => {
    values[word] = wordValue(word);
  });

  let max = Math.max(...Object.values(values));

  for (let word in values) {
    if (values[word] === max) {
      return word;
    }
  }
}

function wordValue(str) {
  const ref = 'abcdefghijklmnopqrstuvwxyz';
  str = str.toLowerCase();
  let value = 0;

  [...str].forEach(chr => {
    value += ref.indexOf(chr) + 1;
  });

  return value;
}


function alphabetPosition(str) {
  const ref = 'abcdefghijklmnopqrstuvwxyz';
  str = str.toLowerCase();
  let values = [];

  [...str].forEach(chr => {
    if (/[a-z]/.test(chr)){
      values.push(ref.indexOf(chr) + 1);
    }
  });

  return values.join(' ');
}
// console.log(high('aaa bb')); 'bb'
// console.log(high('aca bb')); 'aca'
// console.log(high('aca BB')); 'aca'
// console.log(high('AAAAA bb')); 'AAAA'

// console.log(high('man i need a taxi up to ubud')); // 'taxi'
// console.log(high('what time are we climbing up the volcano')); // 'volcano'
// console.log(high('take me to semynak')); // 'semynak'
// console.log(high('aaa b')); // 'aaa'

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("-.-'"));