/*
The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.

The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

    Counting from the rightmost digit and moving left, double the value of every second digit
    For any digit that thus become 10 or more, subtract 9 from the result
        1111 becomes 2121
        8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
    Add all these digits together
        1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
        8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.

Problem: Given a string of numeric values. Vrify if the number is valid per the Luhn formula.

Rules:
  - A number is valid if its sum ends with a 0.
  - Every second number is doubled
    - Doubled numbers that are greater than 10, have 9 subtracted from them.

Questions:
- Will I always be provided a string argument?
- Will I always be provided exactly one argument or could I be provided more or no arguments?
  - If no arguments, how should I handle it.
  - If multiple arguments, how should I handle additional arguments?
- Will the string always contain numbers?
- Could I receive an empty string? If so, how should I handle it?
- Will the string every contain alphabetic numbers or special characters other than spaces? Should I ignore those?
- If one of the numbers that's doubled is 0, should it just return 0?
- is a number invalid if the string digits aren't grouped in 4? we don't care

Data Structures
  - Input: string of numbers and spaces
  - Output: Boolean, if string is valid per Luhn formula.

A
  parse the string to an array of individual numbers
  is string does not contain digits, return false
  iterate through the string in reverse, doubling the odd index values (odd from reverse)
    - summing the reversed odd index values
      - if the doubled value is greater than 10, subtract 9
    - if the index from reverse is even
      - return the number
  sum the digits
  return whether last digit is 0

C

*/

function doubleOddIndexes(numbers) {
  return numbers.map((num, index) => {
    if (index % 2 === 0) {
      return num;
    } else {
      num = num * 2;
      return num >= 10 ? (num - 9) : num;
    }
  });
}

function isValidLuhn(string) {
  if (string.length === 0 || /[a-z]/i.test(string)) {
    return false;
  }
  let workingString = string;
  let numbersArr = workingString.replace(/\D/g, '');

  numbersArr = doubleOddIndexes([...numbersArr].map(Number).reverse());
  let sum = numbersArr.reduce((total, num) => total + num);
  
  return sum % 10 === 0;
}

function makeValidLuhn(string) {
  if (isValidLuhn(string)) {
    return string;
  } else {
    for (let i = 0; i < 10; i++) {
      let testString = string + String(i);
      if (isValidLuhn(testString)) {
        return testString;
      }
    }
  }
}

// 2324 = 2 6 2 8 = 2


console.log(isValidLuhn('1234')); // false
// console.log(isValidLuhn('1234 22')); // true
// console.log(isValidLuhn('1234 abc 22')); // false
// console.log(isValidLuhn('12345 678')); // false
// console.log(isValidLuhn('')); // false
console.log(isValidLuhn('2323 2005 7766 355'));

console.log(makeValidLuhn('2323 2005 7766 355'));
console.log(makeValidLuhn('1234'));