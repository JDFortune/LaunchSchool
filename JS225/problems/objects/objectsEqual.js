function objectsEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  let keys1 = Object.keys(obj1).sort();
  let keys2 = Object.keys(obj2).sort();

  return keys1.length === keys2.length &&
         keys1.every(key => keys2.includes(key) && obj1[key] === obj2[key]);
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: "bar", a: 'foo'}));  // true
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false