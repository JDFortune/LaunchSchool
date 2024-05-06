/*
input; two strings (version numbers)
output:
  - 1 if versions 1 is greater than version 2
  - -1 if version1 is less than version 2
  - 0 if the versions are the same

Algorithm;
Parse the strings into an array of numbers
Compare the elements for each version array
  - if a compare returns undefined for a value, set it to 0.
*/

const digitsRegex = new RegExp('\\d+', 'g');

function fillDigitsArray(arr, length) {
  if (arr.length < length) {
    let idx = arr.length;
    while (idx < length) {
      arr[idx] = 0;
      idx += 1;
    }
  }
}

const invalidVersion = (version) => /([a-z])|(\.\.)/i.test(version);

function compareVersions(version1, version2) {
  if (invalidVersion(version1) || invalidVersion(version2)) return null;

  let v1Digits = version1.match(digitsRegex).map(Number);
  let v2Digits = version2.match(digitsRegex).map(Number);

  let longest = v1Digits.length > v2Digits.length ? v1Digits.length : v2Digits.length;

  fillDigitsArray(v1Digits, longest);
  fillDigitsArray(v2Digits, longest);

  for (let i = 0; i < longest; i++) {
    if (v1Digits[i] > v2Digits[i]) {
      return 1;
    } else if (v1Digits[i] < v2Digits[i]) {
      return -1;
    }
  }

  return 0;
}

console.log(compareVersions('2.3.4', '2.3.5'));