/*
Implement encoding and decoding for the rail fence cipher.

The Rail Fence cipher is a form of transposition cipher that gets its name from the way in which it's encoded. It was already used by the ancient Greeks.

In the Rail Fence cipher, the message is written downwards on successive "rails" of an imaginary fence, then moving up when we get to the bottom (like a zig-zag). Finally the message is then read off in rows.

For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:

Problem: Given a string, encode the message using a Rail Fence Cipher.

Definitions:
- Rail Fence Cipher: a cipher that writes a message in zig zag across three lines. Inserting each letter of the message on a separate line in zig zag order and then combining the characters in order for each line, back into the message.

Questions:
  - Is the cipher always on 3 lines.

Given a number of rails

create an array of arrays with `line` number of element nested arrays;

I'll iterate through the string
insert character into index remainder divied by line - 1
flaten and join the array.

if the remainder is evenly divisible by lines - 1  push element into 0 and reverse the array. continue

*/

// function railCipherEncode(string, lines) {
//   if (lines === 1) {
//     return string;
//   }
//   let rows = [];
//   let reverseCount = 0;
  
//   for (let row = 0; row < lines; row += 1) {
//     rows.push([]);
//   }

//   for (let index = 0; index < string.length; index += 1) {
//     if (index % (lines - 1) === 0) {
//       rows.reverse();
//       reverseCount += 1;
//     } 
//     let char = string[index];
//     rows[index % (lines - 1)].push(char);
//   }

//   if (reverseCount % 2 === 0) rows.reverse();

//   return rows.flat().join('');
// }

// function setRows(lines) {
//   let rows = [];
//   for (let row = 0; row < lines; row += 1) {
//     rows.push([]);
//   }
  
//   return rows;
// }

function reorderMessage(message, rows, decode) {
  let messageChars = [];

  let strIdx = 0;
  rows.forEach(row => {
    row.forEach(posIdx => {
      if (decode) {
        messageChars[posIdx] = message[strIdx];
        strIdx += 1;
      } else {
        messageChars.push(message[posIdx]);
      }
    });
  });

  return messageChars.join('');
}

function generatePattern(message, rows) {
  let reverseCount = 0;
  let lines = rows.length - 1;

  for (let index = 0; index < message.length; index += 1) {
    if (index % lines === 0) {
      rows.reverse();
      reverseCount += 1;
    }
    rows[index % lines].push(index);
  }

  if (reverseCount % 2 === 0) rows.reverse();

  return rows;
}

function railCipher(message, lines, decode = false) {
  if (lines === 1) return message;
  let rows = Array.from(Array(lines), () => []);
  let pattern = generatePattern(message, rows);
  
  return reorderMessage(message, pattern, decode)
}

console.log(railCipher('hello', 2));
console.log(railCipher('One rail, only one rail', 1));
console.log(railCipher('XOXOXOXOXOXOXOXOXO', 2));
console.log(railCipher('WEAREDISCOVEREDFLEEATONCE', 3));
console.log(railCipher('EXERCISES', 4));
console.log(railCipher('More rails than letters', 24));
console.log(railCipher('TEITELHDVLSNHDTISEIIEA', 3, true));
console.log(railCipher('WECRLTEERDSOEEFEAOCAIVDEN', 3, true));