function typoglycemia(string) {
  if (string.length <= 3) {
    return string;
  }

  let strings = string.split(' ');
  let cleanStrings = scrubStrings(strings);

  let scrambled = cleanStrings.map((str, idx) => {
    return str.length <= 3 ? str : addPunctuation(strings[idx], str);
  });

  return scrambled.join(' ');
}

function addPunctuation(originalStr, cleanedStr) {
  cleanedStr = [...scrambleWord(cleanedStr)];
  let puncuation = getPunctuations(originalStr);
  if (puncuation !== null) {
    puncuation.forEach(punc => {
      let puncIdx = originalStr.indexOf(punc);
      cleanedStr.splice(puncIdx, 0, punc);
    });
  }

  return cleanedStr.join('');
}

function scrambleWord(str) {
  return str[0] + [...str.slice(1, -1)].sort().join('') + str.at(-1);
}


function scrubStrings(arr) {
  return arr.map(str => str.replace(/[-.'!]/g, ''));
}

function getPunctuations(str) {
  return str.match(/[-.'!]/g);
}

// console.log(scrambleWord('professionals'));

console.log(typoglycemia('professionals'));// == 'paefilnoorsss');
console.log(typoglycemia('i'));// == 'i');
console.log(typoglycemia(''));// == '');
console.log(typoglycemia('me'));// == 'me');
console.log(typoglycemia('you'));// == 'you');
console.log(typoglycemia('card-carrying'));// == 'caac-dinrrryg');
console.log(typoglycemia("shan't"));// == "sahn't");
console.log(typoglycemia('-dcba'));// == '-dbca');
console.log(typoglycemia('dcba.'));// == 'dbca.');
console.log(typoglycemia('Hello, sir! Howdy-doody to your mother!'))