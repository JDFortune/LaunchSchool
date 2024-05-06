/*
Write a program that cleans up user-entered phone numbers so that they can be sentas SMS messages. Other than digits, the number may also contain special characters such as, space, dash, dot and parentheses that should be ignored.

The rules are as follows:
- If the phone number si less than 10 digits, assume that it is a bad number
- If the phone number is 10 digits assume that it is good.
- If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
- If the phoen number is 11 digits and the first number is not 1, then it is a bad number
- If the phone number is more than 11 digits assume that it is a bad number
For bad numbers, just return the string of 10 '0's

Given a string number, with potential special characters (' ', '-', '.'). We need to parse the string for digits and determine if the number is valid. If it is not, then return 10 '0's if it is, we return the string number.

Questions:
  - Could the string ever be less than 10 characters?
  - Could the string ever contain anything other than the numbers, and listed special characters.
  - Will we always be provided a string? Could there be no argument passed or an argument that is a different data type?
  - Could there be more than one argument passed, such as a series of 3 and 4 digit strings?
  -  What should we do in either of these instances?
  - Will the string ever be empty? '0000000000'

Data Types:
  Input: string of digits and special characters
  Output: string of the digits (or '0's if bad number)

Rules:
  - a valid number is 10 string digits (or 11 if the first character is '1').
  - Remove special characters.

Algorithm:
  - parse the string (remove any special characters and leave only digits)
    - create a new string containing the matched digit characters of the current
  - test for a valid string
    - test the length of the string.
      - if the string length is 10, return the valid string number
      - else if the string length is 11 and the first character is '1'
        return the string number from index 1 to the end
      - else
        return the string of '0's
*/

const BADNUMBER = '0'.repeat(10);

function parsePhoneNumber(str) {
  let numbers = str.replace(/\D/g, '');

  return validateNumber(numbers);
}

function validateNumber(number) {
  if (number.length === 10) {
    return number;
  } else if (number.length === 11 && number[0] === '1') {
    return number.slice(1);
  } else {
    return BADNUMBER;
  }
}

console.log(parsePhoneNumber('100.233_1234 ')); // '1002331234'
console.log(parsePhoneNumber('11112344567')); // '1112344567
console.log(parsePhoneNumber('1234567.8901011')); // '0000000000'
console.log(parsePhoneNumber('')); // '0000000000'
console.log(parsePhoneNumber('23abc456_-789011'));