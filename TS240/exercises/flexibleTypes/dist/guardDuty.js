"use strict";
function printId(arg) {
    let type;
    if (typeof arg === 'string') {
        type = 'string';
    }
    else {
        type = 'number';
    }
    console.log(`Your ID is a ${type}.`);
}
printId(101);
printId('202');
