// let firstName = 'Victor';

// let greetings = ['Good Morning, ', 'Good Afternoon, ', 'Good Evening, '];

// for (let i = 0; i < greetings.length; i++) {
//   console.log(greetings[i] + firstName + '.');
// }

function getName(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt)

  return name
}

function greet(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}!`);
}

let firstName = getName('What is your first name?\n');
let lastName = getName('What is your last name?\n');
greet(firstName, lastName);