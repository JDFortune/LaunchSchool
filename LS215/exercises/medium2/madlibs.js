/*
pulling a random value from an array
  generating a random index number within a range
*/

list = {
  noun: ['rabbit', 'dog', 'cat', 'man', 'groupie', 'raven', 'sparrow', 'sword'],
  adjective: ['purple', 'happy', 'sad', 'adjacent', 'lusty'],
  adverb: ['happily', 'sadly', 'gopherly', 'bingyly', 'dingyly', 'waywordly'],
  verb: ['walk', 'run', 'thrust','burst', 'pluck', 'search'],
}

function madlibs(template) {
  while (Object.keys(list).some(value => template.includes(value))) {
    Object.keys(list).forEach(value => template = template.replace(value, grabRandomValue(list[value])));
  }

  return template;
}

function grabRandomValue(array) {
  let idx = Math.floor(Math.random() * array.length);
  return array[idx];
}

console.log(madlibs('The adjective noun verbs adverb into the noun.'));

// for (let i = 0; i < 100; i++) {
//   console.log(grabRandomValue(list['adjective']));
// }