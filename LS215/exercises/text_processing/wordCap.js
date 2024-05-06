// function wordCap(string) {
//   let words = string.split(' ');
//   return words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
// }


function wordCap(string) {
  return string.replace(/(")?(\w)(\w*)\1/gi, (_, quote, firstChar, restChars) => {
    return (quote || '') + firstChar.toUpperCase() + restChars.toLowerCase() + (quote || '');
  });
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'