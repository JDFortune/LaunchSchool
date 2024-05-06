/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!
Here's the deal:
It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

splitting words on spaces
filter out empty strings
return false if array of words is empty or string is greater than or equal to 140 characters
capitalizing each word
prepending with a #
*/

function generateHashtag(str) {
  let words = str.split(/\s+/).filter(word => word.length !== 0);
  if (words.length === 0 || words.join('').length >= 140) return false;

  words = capitalizeWords(words);
  return '#' + words.join('');
}

function capitalizeWords(arr) {
  return arr.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
}

console.log(generateHashtag("")); //== false
console.log(generateHashtag(" ".repeat(200))); //== false
console.log(generateHashtag("Do We have A Hashtag")); //== "#DoWeHaveAHashtag"
console.log(generateHashtag("Codewars")); //== "#Codewars"
console.log(generateHashtag("Codewars Is Nice")); //== "#CodewarsIsNice"
console.log(generateHashtag("Codewars is nice")); //== "#CodewarsIsNice"
console.log(generateHashtag("code" + " ".repeat(140) + "wars")); //== "#CodeWars"
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")); //== false
console.log(generateHashtag("a".repeat(139))); //== "#A" + "a" * 138
console.log(generateHashtag("a".repeat(140))); //== false