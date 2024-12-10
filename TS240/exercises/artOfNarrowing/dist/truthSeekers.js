"use strict";
function isStringArray(arg) {
    return arg.every(el => typeof el === 'string');
}
console.log(isStringArray([1, 2, 3]));
console.log(isStringArray(["test", "string"]));
