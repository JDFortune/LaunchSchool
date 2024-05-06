/*
Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

Problem:
Write a method that takes a string and performs a simple shift of the chracters based on a given integer value. The shifts can wrap around to the beginning of the alphabet if the letter + shift exceeds the end of the alphabet.

Questions:
  Will we always be given string characters? No. You may have special characters. Don't shift these.
  Will we always be given a single string and positive integer value? yes
  Will we ever be given an empty string? Should we just return an empty string?
  If we're not given an integer, should we set a default shift?

Rules:
  - don't shift numbers or special characters
  - return empty string if given empty string

Data Structures:
  Inputs: string, shift value integer
  Output: shifted string

  Algorithm:
  I'll use a charto track uppercase and lowercase strings
  create a result string
  iterate over the string
    declare a variabel to hold current character
    if the char is contained in one of the arrays
      use the remiander of dividing the current index + shift value by 26 to find the new shifted index
      push into the string the letter at the index from that array
    else
      push the character into the string.

*/
const ALPHABET_SIZE = 26;
const UPPERS =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERS = 'abcdefghijklmnopqrstuvwxyz';

function caesarEncrypt(str, shiftVal) {
  let result = ''

  for (let i = 0; i < str.length; i++) {
    let  char = str[i];
    if (UPPERS.includes(char)) {
      result += encrypt(char, UPPERS, shiftVal);
    } else if (LOWERS.includes(char)) {
      result += encrypt(char, LOWERS, shiftVal)
    } else {
      result += char;
    }
  }

  return result;
}

function encrypt(char, reference, shiftVal) {
  let newIdx = (reference.indexOf(char) + shiftVal) % ALPHABET_SIZE;
  return reference[newIdx];
}

console.log(caesarEncrypt('9999', 1)); // '9999'

console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"