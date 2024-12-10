function objectsEqual(obj1, obj2) {
  const isIterable = obj => obj !== null && typeof obj === 'object';

  const valuesEqual = (a, b) => Object.keys(a).every(key => {
      if (!obj2.hasOwnProperty(key)) return false;
      return objectsEqual(a[key], b[key]);
    });

  if (isIterable(obj1) && isIterable(obj2)) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    return valuesEqual(obj1, obj2);
  }

  if (Number.isNaN(obj1) && Number.isNaN(obj2)) return true;
  return obj1 === obj2;
}

console.log('Should be: true');

// console.log(objectsEqual(NaN, NaN));                      // true
// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: NaN}, {a: 'foo', b: NaN}));  // true
console.log(objectsEqual({a: true, b: false}, {a: true, b: false}));  // true
console.log(objectsEqual({a: true, b: false}, {b: false, a: true}));  // true
// console.log(objectsEqual({a: 'foo', b: { this: 'that'}}, {a: 'foo', b: { this: 'that'}}));  // true
// console.log(objectsEqual({a: 'foo', b: ['this', 'that']}, {a: 'foo', b: ['this', 'that']}));  // true
// console.log(objectsEqual({a: 'foo', b: { this: 'that', other: { one: 'one'}}},
//                          {a: 'foo', b: { this: 'that', other: { one: 'one'}}}));  // true

console.log('Should be: false');

console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({a: 'foo', c: '1'}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({a: 'foo', b: { this: 'that'}}, {a: 'foo', b: { this: 'other'}}));  // false
console.log(objectsEqual({a: 'foo', b: ['this']}, {a: 'foo', b: ['this', 'that']}));  // false
console.log(objectsEqual({a: 'foo', b: { this: 'that', other: { one: 'one'}}}, 
                        {a: 'foo', b: { this: 'that', other: { one: 'two'}}}));  // false

                         