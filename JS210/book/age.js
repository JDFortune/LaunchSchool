let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you?\n'));

console.log(`You are ${age} years old.`)

for (let year = 10; year <= 40; year += 10) {
  console.log(`In ${year} years you will be ${age + year} years old.`)
}