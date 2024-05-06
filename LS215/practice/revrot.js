/*
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz
(ignore the last chunk if its size is less than sz).
If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise
rotate it to the left by one position. Put together these modified chunks and return the result as a string.
If
sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
revrot("123456987654", 6));// "234561876549"
revrot("123456987653", 6));// "234561356789"
revrot("66443875", 4));// "44668753"
revrot("66443875", 8));// "64438756"
revrot("664438769", 8));// "67834466"
revrot("123456779", 8));// "23456771"
revrot("", 8));// ""
revrot("123456779", 0));// ""
revrot("563000655734469485", 4));// "0365065073456944



Rule:
  - is sz is 0 or the string is empty return an empty string;
  - if chunk sum is divisible by 2, reverse
    else rotate integer 1 time

Edge Cases:
  - empty string
  - size > string length
  - size === 0

Questions:
  - Will the first argument always be a string? Will that string contain only numbers
  - Will the second argument always be a non-negative integer?
  - WIll the string length ever be a length that doesn't evenly divide by the size (when the size is not 0)?

Data
 Input: string of digits, siz (positive integer >= 0)
 Output: new string of revrot values or '' if edge cases

Algorithm
  - break the string into array of chunks
  - map over the chunks
    split chunk into array of digits
    - if the sum of digits is even
        reverse the chunk
      else
        **rotated the first digit to the end
          push into the digit array the shifted first element
  - rejoin the chunks


*/

function revrot(str, sz) {
  if (str.length === 0 || sz === 0 || sz > str.length) {
    return '';
  }

  let regex = new RegExp(`\\d{${sz}}`, 'g')
  let chunks = str.match(regex);

  chunks = chunks.map(chunk => {
    chunk = getDigits(chunk);
    if (chunk.reduce((total, num) => total + num) % 2 === 0) {
      return chunk.reverse().join('');
    } else {
      chunk.push(chunk.shift());
      return chunk.join('');
    }
  });

  return chunks.join('');
}

function getDigits(str) {
  return [...str].map(Number);
}

//empty string or sz <= 0 or sz > string length
console.log(revrot('123456', 0)); // ''
console.log(revrot('', 8)); // ''
console.log(revrot('1234', 8)); // ''

console.log(revrot("123456987654", 6));// "234561876549"
console.log(revrot("123456987653", 6));// "234561356789"
console.log(revrot("66443875", 4));// "44668753"
console.log(revrot("66443875", 8));// "64438756"
console.log(revrot("664438769", 8));// "67834466"
console.log(revrot("123456779", 8));// "23456771"
console.log(revrot("", 8));// ""
console.log(revrot("123456779", 0));// "" 
console.log(revrot("563000655734469485", 4));// "0365065073456944"
