/*
Write a function that takes in an array of integers and returns the integers that are either palindromes or almost-palindromes. An almost-palindrome is any integer that can be rearranged to form a palindrome.

For example, the numbers 677 and 338 are both almost-palindromes, since they can be rearranged to form 767 and 383, respectively.

Notes:
  - return palindomes or numbers that can be rearanged to make a palindrome
    - a number is true if it has all even numbers of digits and digit with an odd count of digits.
    - Single digit numbers are automatically palindroms

- Create a helper function to determine palindroms
  - if numbers digit length is odd, there can be only one digit with odd counts of occurence
  - if numbers digti length is even, all digit occurences must be even

Data
Input: array of whole numbers
Output: filtered array of only palindrom numbers and almost-palindrome numbers

Algorithm:
filter the array
  - check if digits in number qualify them as a palidrome

Is palindrome
  - set an odd count to 0;
  - count occurences of digits, assign to object with digits as keys and counts as their value
  if the digit length is even and all digit count values are even
    - return true
  else
  - iterate through the keys of the object
    - if the digit value is odd
      - increment odd count by 1
  - if odd count is equal to 1, return true; else return false
*/

function getDigitCounts(digits) {
  let counts = {}

  digits.forEach(digit => {
    if (counts[digit]) {
      counts[digit] += 1;
    } else {
      counts[digit] = 1;
    }
  });

  return counts;
}

function isPalindrome(num) {
  let digits = [...String(num)];
  let oddCount = 0;
  let digitsCount = getDigitCounts(digits);
  
  
  if (digits.length % 2 === 0) {
    if (Object.values(digitsCount).every(count => count % 2 === 0)) {
      return true;
    } else {
      return false;
    }
  } else {
    Object.values(digitsCount).forEach(count => {
      if (count % 2 === 1) {
        oddCount += 1;
      }
    });
  }

  return oddCount === 1;
}

function palindromeSieve(arr) {
  return arr.filter(num => isPalindrome(num));
}

palindromeSieve([443, 12, 639, 121, 3232]) // [443, 121, 3232]
// Since 443 => 434; 121 is a palindrome; 3232 => 2332 or 3223

palindromeSieve([5, 55, 6655, 8787]) // [5, 55, 6655, 8787]
// Single-digit numbers are automatically palindromes.

palindromeSieve([897, 89, 23, 54, 6197, 53342]) // []