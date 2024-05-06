let studentGrade = function() {
  let readlineSync = require('readline-sync');
  let grades = [];

  let enterAnother;
  do {
    grades.push(Number(readlineSync.question(`Enter score ${grades.length + 1}: `)));
    enterAnother = readlineSync.question('Enter another grade? (y/n)');
  } while (enterAnother === 'y');

  let avgGrade = getAverageGrade(grades);

  let message = "Based on the average of your scores, your letter grade is ";
  let letterGrade;

  if (avgGrade >= 90) {
    letterGrade = 'A';
  } else if (avgGrade >= 70) {
    letterGrade = 'B';
  } else if (avgGrade >= 50) {
    letterGrade = 'C';
  } else {
    letterGrade = 'F'
  }

  console.log(`${message}"${letterGrade}".`);
};

function getAverageGrade(grades) {
  return grades.reduce((total, grade) => total + grade, 0) / grades.length
}

studentGrade();