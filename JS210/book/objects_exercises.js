// let hash = {0: 'hello', 1: 'goodbye', 2: 'hello again', length: 3};

// for (let i = 0; i < hash.length; i += 1) {
//   console.log(hash[i]);
// }

// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// let arr = Object.keys(obj).map((char) => char.toUpperCase());

// console.log(obj);
// console.log(arr);

// let arr2 = [];

// for (let prop in obj) {
//   arr2.push(prop.toUpperCase());
// }

// console.log(arr2);

// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };

// let myObj = Object.create(myProtoObj);

// myobj['qux'] = 3;

// function copyObj(objToCopy, keys) {
//   let result = {};
 
//   if (!keys) {
//     return Object.assign(result, objToCopy)
//   } else {
//     keys.forEach(key => result[key] = objToCopy[key]);
//     return result;
//   }
// }

// let obj = {one: 'hello', two: 'goodbye', three: 'weeee'};

// let obj2 = copyObj(obj);
// console.log(obj2);

// let obj3 = copyObj(obj, ['one', 'three']);
// console.log(obj3);

// let objToCopy = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };

// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }

// let obj = {
//   foo: { a: "hello", b: "world" },
//   bar: ["example", "mem", null, { xyz: 6 }, 88],
//   qux: [4, 8, 12]
// };

// obj.bar[3].xyz = 606;

// console.log(obj);


// function foo(bar) {
//   console.log(bar, bar, bar);
// }

// let bar = foo;

// foo("hello"); // should print "hello hello hello"
// bar("hi");    // should print "hi hi hi"
// let arr = [[1, 2, 3], 3.1415, 'Welcome' ];

// function bar() {
//   console.log(arr.pop());
// }

// function foo(bar) {
//   console.log(bar());
// }

// foo(function () { return 'Welcome'});    // Should print 'Welcome'
// foo(function () { return Math.PI.toFixed(4)});    // Should print 3.1415
// foo(function () { return [1, 2, 3]});    // Should print [1, 2, 3]

// variables: hello, greeting, name, greeting, name, xyzzy, howdy, hello, foo, xyzzy

// object property names: 'a', 'b', 'c', 'd', 0, 1, 2

// primitive values: ' ', 'a', 1, 'b', 2, 'c', 3, 4, 5, 'd', 'Hi', 'Grace', 0, 1, 2

// objects hello(), xyzzy(), { a: 1, b: 2, c: [3, 4, 5], d: {} }, [3, 4, 5], {}

// variables: bar, arg1, arg2, foo, qux, result

// object property names: 'abc', 0, 1, 2, 3, 0, 1, 2, 'def', 'ghi', 'jkl', 'mno', 'pqr'

// primitive values: 'Hello', 'abc', 1, 2, 3, 4, 5, 6, 'def', 'ghi', 'jkl', 'mno', 'pqr', 'Victor', 'Antonina', null, NaN, 0, 1, 2, 3

// objects: bar, {
//                 abc: [1, 2, 3, [4, 5, 6]],
//                 def: null,
//                 ghi: NaN,
//                 jkl: foo,
//                 mno: arg1,
//                 pqr: arg2,
//               }, [1, 2, 3, [4, 5, 6]], [4, 5, 6]