/*
  The alphabetized kata
Re-order the characters of a string, so that they are concatenated into a new string in
"case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!
The input is restricted to contain no numerals and only words containing the english alphabet letters

Rules:
- remove whiteSpaces
- sort the string by alphabetical order in order of appearance (in terms of case)

Algorithm
create an array with 26 nested arrays
push teh characters into the array by its associated index in an alphabet reference
flatten and join the array.
*/

function alphabetized(str) {
  const ref = 'abcdefghijklmnopqrstuvwxyz';
  str = str.replace(/\s+/g, '');
  let result = Array.from(Array(26), () => []);

  for (let i = 0; i < str.length; i++) {
    char = str[i];
    let index = ref.indexOf(char.toLowerCase());
    result[index].push(char);
  }

  return result.flat().join('');
}

console.log(alphabetized("The Holy Bible")); // "BbeehHilloTy"
console.log(alphabetized("")); // ""
console.log(alphabetized(" ")); // ""
console.log(alphabetized(" a")); // "a"
console.log(alphabetized("a ")); // "a"
console.log(alphabetized(" a ")); // "a"
console.log(alphabetized("A b B a")); // "AabB"
console.log(alphabetized(" a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z")); // "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"