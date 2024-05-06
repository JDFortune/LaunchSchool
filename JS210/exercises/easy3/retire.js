function retireDate() {
  const rlSync = require('readline-sync');

  let age = parseInt(rlSync.question('What is your age? '), 10);
  let retireAge = parseInt(rlSync.question('At what age would you like to retire? '), 10);
  let yearsToRetirement = retireAge - age;

  const thisYear = new Date().getFullYear();

  const retirementYear = thisYear + yearsToRetirement;

  console.log(`It's ${thisYear}. You will retire in ${retirementYear}.`);
  console.log(`You only have ${yearsToRetirement} years of work to go!`);
}

retireDate();