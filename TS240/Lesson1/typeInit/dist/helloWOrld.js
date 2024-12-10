"use strict";
// // let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// function getProperty(obj: CustomObject, key: string) {
//   return obj[key]; // Error: No index signature with a parameter of type 'string' was found on type '{}'
// }
function getProperty(obj, key) {
    return obj[key]; // Error: No index signature with a parameter of type 'string' was found on type '{}'
}
const obj = {
    name: "JD",
    age: 34,
};
const x = getProperty(obj, 'name');
const y = getProperty(obj, 'age');
console.log(`${x} is ${y}`);
