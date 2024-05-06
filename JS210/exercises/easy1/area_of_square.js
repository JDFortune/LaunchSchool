let readlineSync = require('readline-sync');

const METERS_TO_FEET = 3.28084;

let length = Number(readlineSync.question('Enter the length of the room in meters.\n'));
let width = Number(readlineSync.question('Enter the width of the room in meters.\n'));

let metersArea =(length * width).toFixed(2);
let feetArea = ((length * METERS_TO_FEET) * (width * METERS_TO_FEET)).toFixed(2);

console.log(`The aread of the room is ${metersArea} meters (${feetArea} square feet).`);