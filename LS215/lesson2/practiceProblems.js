// let firstName = 'JD';
// let lastName = 'Fortune';

// let fullName = firstName + ' ' + lastName;

// // console.log(firstName.concat(' ', lastName));

// let names = fullName.split(' ');

// // console.log(names);

// let language = 'JavaScript';
// let index = language.indexOf('S');

// // console.log(index);

// let charCode = language.charCodeAt(4);
// // console.log(charCode);

// // console.log(String.fromCharCode(charCode));

// let lastIdx = language.lastIndexOf('a');

// // console.log(lastIdx);

// let a = 'a';
// let b = 'b';

// // console.log(a < b);
// b = 'B';
// // console.log(a < b);

// let partLang = language.slice(1, 4);
// let partLang2 = language.slice(2, 4);

// // console.log(partLang);
// // console.log(partLang2);

// let sub1 = language.substring(1, 4);
// let sub2 = language.substring(2, 4);

// // console.log(sub1);
// // console.log(sub2);

// partLang = language.slice(1, -1);
// partLang2 = language.slice(2, -1);

// // console.log(partLang);
// // console.log(partLang2);

// sub1 = language.substring(1, -1);
// sub2 = language.substring(2, -1);

// // console.log(sub1);
// // console.log(sub2);

// let fact1 = 'JavaScript is fun';
// let fact2 = 'Kids like it too';

// let compoundSentence = fact1 + ' and ' + fact2.toLowerCase();

// // console.log(compoundSentence);

// // console.log(fact1[0], fact2[0]);

// let pi = (22/7).toString()

// // console.log(pi.lastIndexOf('14'));

// let boxNumber = (356).toString();

// boxNumber = parseInt(boxNumber, 10);
// // console.log(typeof boxNumber);
// // console.log(boxNumber);
// boxNumber = String(boxNumber);
// // console.log(typeof boxNumber);
// // console.log(boxNumber);

function greet() {
  const rlSync = require('readline-sync');
  let name = rlSync.question('What is your name? ');

  if (name.endsWith('!')) {
    console.log(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE YOU SCREAMING?`);
  } else {
    console.log(`Hello ${name}.`);
  }
}

greet();