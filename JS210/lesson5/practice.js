// function objectHasProperty(obj, str) {
//   return Object.keys(obj).includes(str);
// }

// let pets = {
//   cat: 'Simon',
//   dog: 'Dwarf',
//   mice: null,
// };

// console.log(objectHasProperty(pets, 'dog'));       // true
// console.log(objectHasProperty(pets, 'lizard'));    // false
// console.log(objectHasProperty(pets, 'mice'));      // true

// function incrementProperty(obj, str) {
//   if (obj[str]) {
//     obj[str] += 1;
//   } else {
//     obj[str] = 1;
//   }
// }

// let wins = {
//   steve: 3,
//   susie: 4,
// };

// incrementProperty(wins, 'susie');   // 5
// console.log(wins);                               // { steve: 3, susie: 5 }
// incrementProperty(wins, 'lucy');    // 1
// console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }

// function copyProperties(obj, copyObj) {
//   Object.keys(obj).forEach(key => copyObj[key] = obj[key]);
//   return Object.keys(obj).length;
// }

// let hal = {
//   model: 9000,
//   enabled: true,
// };

// let sal = {};
// console.log(copyProperties(hal, sal));  // 2
// console.log(sal);                       // { model: 9000, enabled: true }

// function wordCount(str) {
//   let counts = {};

//   str.split(' ').forEach(word => {
//     if (Object.keys(counts).includes(word)) {
//       counts[word] += 1;
//     } else {
//       counts[word] = 1;
//     }
//   });

//   return counts;
// }

// function wordCount(str) {
//   let counts = {}
//   let words = str.split(' ');

//   words.forEach(word => incrementProperty(counts, word));

//   return counts;
// }

// console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }

