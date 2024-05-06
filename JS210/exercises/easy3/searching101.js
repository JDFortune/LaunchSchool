function searching() {
  const readLineSync = require('readline-sync');
  let promptNums = ['1st', '2nd', '3rd', '4th', '5th', 'last'];
  let arr = [];

  for (let i = 0; i < 6; ++i) {
    arr.push(readLineSync.question(`Enter the ${promptNums[i]} number: `));
  }

  let searchValue = arr[arr.length - 1];
  arr = arr.splice(0, arr.length - 1);

  let appears = arr.includes(searchValue);

  let message;
  if (appears) {
    message = `The number ${searchValue} appears in [${arr.join(', ')}].`;
  } else {
    message = `The number ${searchValue} does not appear in [${arr.join(', ')}].`;
  }

  console.log(message);
}

searching();

