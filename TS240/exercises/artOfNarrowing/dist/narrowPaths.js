"use strict";
function printLength(arg) {
    if (typeof arg === 'string') {
        console.log(`String length: ${arg.length}.`);
    }
    else {
        console.log(`Array count: ${arg.length}.`);
    }
}
