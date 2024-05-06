// function generatePattern(num) {
//   let count = 1;

//   do {
//     let output = [];

//     for (let i = 1; i <= count; ++i) {
//       output.push(i);
//     }

//     for (let i = count + 1; i <= num; i += 1) {
//       output.push('*');
//     }

//     console.log(output.join(''));
//     count += 1;
//   } while(count <= num);
// }

function generatePattern(nStars) {
  let lastRowString = ''

  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    lastRowString += String(lineNumber);
  }

  let width = lastRowString.length;

  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    let string = '';

    for (let digit = 1; digit <= lineNumber; digit += 1) {
      string += String(digit);
    }

    let numberOfStars = width - string.length;
    for (let star = 1; star <= numberOfStars; star += 1) {
      string += '*';
    }

    console.log(string);
  }
}
generatePattern(100);