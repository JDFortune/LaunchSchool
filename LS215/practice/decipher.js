/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:
For each word:
the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces
Examples
decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go

algorithm:
split the string into words

map over the words
  split the word into an array with digit and rest of characters
  convert first element to char from charcode
  if (second element is one letter or undefined)
    - do nothing
  else
    swap the first and last letters of the second element
      split the string into array of chars
      swap the first and last indexs
      set second element of array to joined array of chars
  return the joined array.
return joined arrays with ' ' delimiter
*/

function decipherThis(str) {
  return str.split(' ').map(word => transformWord(word)).join(' ');
}

function transformWord(word) {
  let el = word.match(/\d+|\w+/g);

  el[0] = String.fromCharCode(el[0]);

  if (el[1] !== undefined && el[1].length > 1) {
    let chars = el[1].split('');
    [chars[0], chars[chars.length - 1]] = [chars.at(-1), chars[0]];
    el[1] = chars.join('');
  }
  
  return el.join('');
}

console.log(decipherThis("65 119esi 111dl 111lw 108dvei 105n 97n 111ka")); // "A wise old owl lived in an oak"
console.log(decipherThis("84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp")); // "The more he saw the less he spoke"
console.log(decipherThis("84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare")); // "The less he spoke the more he heard"
console.log(decipherThis("87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri")); // "Why can we not all be like that wise old bird"
console.log(decipherThis("84kanh 121uo 80roti 102ro 97ll 121ruo 104ple")); // "Thank you Piotr for all your help"