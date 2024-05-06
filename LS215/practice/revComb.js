/*
Your task is to Reverse and Combine Words.
Input: String containing different "words" separated by spaces
1. More than one word? Reverse each word and combine first with second, third with fourth and so on...
(odd number of words => last one stays alone, but has to be reversed too)
2. Start it again until there's only one word without spaces
3. Return your result…

split the array into an array of string elements
  reverse and combine each pair of elements (if there are two)
  if only one element reverse it but don't combine it with anything
once all of the strings are combined, return the new string

input:
  string of "words" separated by spaces
output:
  single string of the combined and reversed words

split the string into array 'words'
while the array of words length > 1
  declare an empty temp array
  while array is not empty
    splice two elements from the start of the array
    reverse the elements and join them
    push the reversed and joined element into the temp array
  
  reassign the array to the temp array

return the first element in array

*/

function revComb(string) {
  let arr = string.split(' ');

  while (arr.length > 1) {
    let temp = []
    while (arr.length > 0) {
      let twoElements = arr.splice(0, 2);
      revJoined = twoElements.map(str => str.split('').reverse().join('')).join('');
      temp.push(revJoined);
    }
    arr = temp;
  }

  return arr[0];
}



console.log(revComb("abc def")); // "cbafed"
console.log(revComb("abc def ghi jkl")); // "defabcjklghi"
console.log(revComb("dfghrtcbafed")); // "dfghrtcbafed"
console.log(revComb("234hh54 53455 sdfqwzrt rtteetrt hjhjh lllll12 44")); // "trzwqfdstrteettr45hh4325543544hjhjh21lllll"
console.log(revComb("sdfsdf wee sdffg 342234 ftt")); // "gffds432243fdsfdseewttf