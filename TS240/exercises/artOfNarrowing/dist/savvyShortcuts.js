"use strict";
function shortcut(arg) {
    arg && console.log("Input is defined and not empty");
}
console.log(shortcut(''));
console.log(shortcut());
shortcut('hello');
