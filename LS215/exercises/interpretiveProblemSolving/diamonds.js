/*
Write a function that takes an argument (n) as an odd positive integer. Return a 4 pointed diamond of n x n rows and columns.

Rules:
  The first and last line are a single star
  Every row from the outer row inwards increases stars count by 2 and reduces spaces by 1 on each side
  The middle row is the only row with (n) number of stars

Inputs:
  - odd integer (number of rows)
Outputs:
  - (n) rows of stars to form diamond;

Algorithm:
  start with an empty array
  iterate with decrementing the value of n by 2, pushing n stars wraped by x spaces;
  x starts at 0 and is increased by 1 for each decrementing row.
  When n is less than 0 concat an array made of a copy of the results array (from index 1 to the end) to the results array

  join the array elements with a new line delimiter and log to the output

*/

function diamond(n) {
  let spaces = 0;
  let result = [];
  
  while (n >  0) {
    result.push(' '.repeat(spaces) + '*'.repeat(n));
    spaces += 1;
    n -= 2;
  }

  result = result.slice(1).reverse().concat(result).join('\n');

  console.log(result);
}

diamond(1);
console.log('');
diamond(3);
console.log('');
diamond(9);