"use strict";
function filterByType(arr, type) {
    return arr.filter(el => typeof el === type);
}
console.log(filterByType(["hello", "world", 42, true], "string"));
