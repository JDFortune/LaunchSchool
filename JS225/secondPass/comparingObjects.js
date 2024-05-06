function isIterable(value) {
  return typeof value === 'object' && value !== null;
}

function valuesEqual(obj1, obj2) {
  return Object.keys(obj1).every(key => {
    if (!obj2.hasOwnProperty(key)) return false;
    return objectsEqual(obj1[key], obj2[key]);
  });
}

function objectsEqual(obj1, obj2) {
  if (isIterable(obj1) && isIterable(obj2)) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    return valuesEqual(obj1, obj2);
  }

  if (Number.isNaN(obj1) && Number.isNaN(obj2)) return true;
  return obj1 === obj2;
}




// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: "bar", a: 'foo'}));  // true
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
// console.log(objectsEqual({a: 'foo', b: [1, 2, ['a', 'b']]}, {a: 'foo', b: [1, 2, ['a', 'b']]}))


console.log(objectsEqual(3, '3') === false);
console.log(objectsEqual(3, 3) === true);
console.log(objectsEqual('a', 'a') === true);
console.log(objectsEqual([1, 2, 3], 3) === false);
console.log(objectsEqual([1, 2, 3], [1, 3]) === false);
console.log(objectsEqual([1, 2, 3], [1, 3, 2]) === false);
console.log(objectsEqual([1, 2, 3], [1, 2, 3]) === true);

console.log(objectsEqual([1, 2, 3], [1, , 2, 3]) === false);
console.log(objectsEqual([1, [2, 'a'], 3], [1, [2, 1], 3])=== false);
console.log(objectsEqual([1, ['a', 'd'], 3], [1, ['a', 'd'], 3]) === true);
console.log(objectsEqual([{}, 3], [{}, 3]) === true);
console.log(objectsEqual([{a: '1'}, 3], [{}, 3]) === false);
console.log(objectsEqual([{a: '1'}, 3], [{a: '2'}, 3]) === false);
console.log(objectsEqual([{a: '2'}, 3], [{a: '2'}, 3]) === true);
console.log(objectsEqual([{b: '1', a: '2'}, NaN], [{a: '2', b: '1'}, NaN]) === true); 
console.log(objectsEqual([{b: '1', a: '2'}, 3], [{a: '2', b: '1'}, 3]) === true);
console.log(objectsEqual([1, , 2], [1, 2]) === false);
console.log(objectsEqual(Infinity, -Infinity) === false);
console.log(objectsEqual(Infinity, Infinity) === true);
console.log(objectsEqual(undefined, undefined) === true);

console.log(objectsEqual(NaN, 3) === false);
console.log(objectsEqual(NaN, NaN) === true);
console.log(objectsEqual(null, null) === true);
console.log(objectsEqual(null, [1, 2]) === false);
console.log(objectsEqual(2, [1, 2]) === false);
