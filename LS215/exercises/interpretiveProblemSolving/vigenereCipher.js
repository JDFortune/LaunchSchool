/*
The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:

plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').


Questions:
  Will there always be a keyword? What should we do if not?
  Will the keyword always be a string and contain only letters?
  We break up the string into lengths of strings based on the keyword length?
    - Do we ignore spaces? 
  We don't touch non-alphabet characters.
  Preserve the spaces from the original string?

Notes:
  track the index of the chunk of text
    track the index of the character of the chunk
    length of keyword * chunk index + char index

Algorithm:
references for alphabet length, lower letter and upper letters
create a new string from supplied string and remove spaces.
break up new string into chunks of arrays of characters, for length of keyword
create a array of shift value for the keyword
result array ([])

iterate over string chunks array. (chunkIdx)
  iterate over chars of the chunk (charIdx)
    push into result the encoded character

iterate ofther the original string (stringIdx)
  if the string is not alpha
    splice into the array the character at the index

return the joined result array.

encoded character(char, charidx, shiftVal=> value of keyword shift ad charIdx)
  if character in uppers
    find index of current character
      add shift value to character and get remainder for dividing 26
    return that character from index of uppers
  else if character in lowers
    find index of current character
        add shift value to character and get remainder for dividing 26
      return that character from index of uppers
*/

// const ALPHA_COUNT = 26;
// const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const lowers = 'abcdefghijklmnopqrstuvwxyz';

// function vigenereCipher(string, keyword) {
//   let shiftVals = [...keyword.toLowerCase()].map(char => lowers.indexOf(char));
//   let parsedStr = string.replace(/[^a-z]/gi, '');
//   let stringChunks = getStringChunks(parsedStr, keyword.length)
//   let result = [];
  
//   stringChunks.forEach((chunk, chunkIdx) => {
//     [...chunk].forEach((chr, chrIdx) => {
//       result.push(encoded(chr, chrIdx, shiftVals[chrIdx]));
//     })
//   });

//   [...string].forEach((char, idx) => {
//     if (!/[a-z]/gi.test(char)) {
//       result.splice(idx, 0, char);
//     }
//   });

//   return result.join('');
// }

// function encoded(char, chrIdx, shiftVal) {
//   if (uppers.includes(char)) {
//     let refIdx = uppers.indexOf(char);
//     refIdx = (refIdx + shiftVal) % ALPHA_COUNT;
//     return uppers[refIdx];
//   } else if (lowers.includes(char)) {
//     let refIdx = lowers.indexOf(char);
//     refIdx = (refIdx + shiftVal) % ALPHA_COUNT;
//     return lowers[refIdx];
//   }
// }

// function getStringChunks(string, length) {
//   let chunks = [];
//   let temp = [];
//   for (let i = 0; i < string.length; i++) {
//     if (temp.length < length) {
//       temp.push(string[i]);
//     } else {
//       chunks.push(temp);
//       temp = [string[i]];
//     }
//   }
//   chunks.push(temp);

//   return chunks
// }

const ALPHA_COUNT = 26;
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
/*
keys converted to their index shift value
stringchridx set to 0
iterate over String
  if character is a letter
    shift by the char by the shift value keywords based on remainder of dividing str by the keyword length. Add that value to the chracters index value in Alphabet moded by 26 to retrieve new char from Alphabet
    if character is uppercase, push uppercase string, else push lowercase string.
    push character into return string
    increment strChrIdx
  else
    push character into return string
*/

function vigenereCipher(str, keyword) {
  let shiftVals = [...keyword.toLowerCase()].map(chr => ALPHABET.indexOf(chr));
  let index = 0;
  let encoded = [];

  [...str].forEach(chr => {
    if (/[a-z]/i.test(chr)) {
      let chrIdx = ALPHABET.indexOf(chr.toLowerCase());
      chrIdx = (chrIdx + shiftVals[index % shiftVals.length]) % ALPHABET.length;
      encoded.push(/[A-Z]/.test(chr) ? ALPHABET[chrIdx].toUpperCase() : ALPHABET[chrIdx]);
      index += 1;
    } else {
      encoded.push(chr);
    }
  });

  return encoded.join('');
}

console.log(vigenereCipher('hello', 'aaaa')); // 'hello'
console.log(vigenereCipher('Pineapples don\'t go on pizzas!', 'meat')); // 'Bmnxmtpeqw dhz'x gh ar pbldal!'
console.log(vigenereCipher('hello', 'bbbb')); //'ifmmp'
console.log(vigenereCipher('Pineapples don\'t go on pizzas!', 'A'));
console.log(vigenereCipher('Pineapples don\'t go on pizzas!', 'Aa'));
console.log(vigenereCipher('Pineapples don\'t go on pizzas!', 'cab'));
console.log(vigenereCipher('Dog', 'Rabbit'));
