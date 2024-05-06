// function searchWord(word, text) {
//   let count = 0;
//   for (let i = 0; i < text.length; i++) {
//     if (text.substr(i, word.length).toLowerCase() === word) {
//       count += 1;
//     }
//   }

//   console.log(count);
// }

// function searchWord(word, text) {
//   let regex = new RegExp(word, 'gi');
//   let matches = text.match(regex);

//   return matches ? matches.length : 0;
// }

// function searchWord(word, text) {
//   let regex = new RegExp(`(${word})`, 'gi');
//   return text.replace(regex, `**${word.toUpperCase()}**`);
// }

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// console.log(searchWord('sed', text));      // 3

// console.log(searchWord('he', 'boobs'))


// function foo(list) {
//   return list.map(function (word) {
//       return word.match(/[aeiou]/ig) || [];
//     }).reduce(function (acc, letterList) {
//       return acc + letterList.length;
//     }, 0);
// }

// console.log(foo(['cart', 'truck', 'cart', 'train']));
// console.log(foo(['apple', 'banana', 'orange']));
// console.log(foo(['a', 'b', 'c']));
// console.log(foo(['a', 'e', 'i', 'o', 'u']));