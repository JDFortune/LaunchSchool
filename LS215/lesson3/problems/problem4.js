/*
You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

Your job is to return a list of complete numbers.

The possible separators are: ["-", ":", ".."]

    "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
    "1-3, 1-2" --> 1, 2, 3, 11, 12
    "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
    "104-2" --> 104, 105, ... 112
    "104-02" --> 104, 105, ... 202
    "545, 64:11" --> 545, 564, 565, .. 611

Qurestions:
  1. is the first number always going to be a whole number of the actual number value or could it be partial?
  2. Are there any different meanings to the kinds of separators used?
  3. Will we always be given just one argument? If we have more what do we do with the extras? If we have no arguments, how should we handle it?
  4. Are the elipses just for show, and we should actually provide all the values in between, or are they an actual representation?
  5. Is the expected output an array of numbers or a string of the joined numbers?
  

Rules: 
  Separators: '-' ':' '..'(any number of dots)
  if the "important number is is less than the previous number, we can assume its always going to the be next number that ends in those digits
  Dashes '-' and colons ':' mean every number in between the two numbers.
  commas ',' indicate the new starting value (but it could be a partial number if the previous number is greater).
  

Inputs: String of delimited numbers
Outputs: array of successive numbers from the first number

Alogrithm:
  parse the separate ranges by splitting string into array of groups, on commas
  set empty result array
  iterate over the groups
    parse the group into array of two string numbers.
    if the result array is empty remove the first element from the parsed array and push into the result array
      while the parsed group array is not empty
        iterate from current number in result array
          push number into result
          if the remainder of the 10 ** length of the curent element of the current last resutl element is equal to the current element
            remove it from the parse array
    else
      iterate the count from the last element until it digit(s) based on remainder of 10 ** length of current parsed element of count is equal to last element
      push count into the array and remove parsed element
      while parsed group array is not empty
        iterate count and push into array
          if last elements digit ends match the parsed current element, remove the parsed element from the parse array      
      
  return the result array

iterating a count and pushing into array
  (resultArr, count, parseIdentity)
  while end digits of count !== parse identity
  iterate count by one
  push into resultArray

*/

function significantsEqual(count, compareValue) {
  return String(count).slice(-compareValue.length) === compareValue;
}

function pushRange(result, count, values) {
  while (values.length > 0) {
    count += 1;
    result.push(count);
    if (significantsEqual(count, values.at(0))) {
      values.shift();
    }
  }
}

function completeRanges(string) {
  let ranges = string.split(",");
  let result = [];
  ranges.forEach(range => {
    let values = range.match(/\d+/g);
    let count;
    if (result.length === 0) {
      result.push(Number(values.shift()));
      count = result.at(-1);
    } else {
      count = result.at(-1);

      while (!significantsEqual(count, values.at(0))) {
        count += 1;
      }

      result.push(count);
      values.shift();
    }
    pushRange(result, count, values);
  });

  return result;
}

console.log(completeRanges("1, 3, 7, 2, 4, 1")); // [1, 3, 7, 12, 14, 21]
console.log(completeRanges("1-3, 1-2")); // [1, 2, 3, 11, 12]
console.log(completeRanges("1:5:2")); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(completeRanges("104-2")); // [104, 105, 106, 107, 108, 109, 110, 111, 112]
console.log(completeRanges("104-02")); // [104, ... 202]
console.log(completeRanges("545, 64:11")); // [545, 564, ... 611]
console.log(completeRanges('20, 030'));

