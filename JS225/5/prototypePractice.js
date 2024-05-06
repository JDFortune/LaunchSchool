// function getDefiningObject(obj, propKey) {
//   while (obj && !(obj.hasOwnProperty(propKey))){
//     obj = Object.getPrototypeOf(obj);
//   }

//   return obj;
// }

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// let baz = Object.create(bar);
// let qux = Object.create(baz);

// bar.c = 3;

// console.log(getDefiningObject(qux, 'c') === bar);     // => true
// console.log(getDefiningObject(qux, 'e'));             // => null

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// function shallowCopy(obj) {
//   let copy = Object.create(Object.getPrototypeOf(obj));

//   Object.getOwnPropertyNames(obj).forEach(key => {
//     copy[key] = obj[key];
//   });

//   return copy;
// }

// function shallowCopy(obj) {
//   return Object.setPrototypeOf({...obj}, Object.getPrototypeOf(obj));
// }

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// bar.c = 3;
// bar.say = function() {
//   console.log('c is ' + this.c);
// };

// let baz = shallowCopy(bar);
// console.log(baz.a);       // => 1
// baz.say();                // => c is 3
// console.log(baz.hasOwnProperty('a'));  // false
// console.log(baz.hasOwnProperty('b'));  // false
// console.log(baz.hasOwnProperty('c'));  // true

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

function extend(destination) {
  for (let i = 1; i < arguments.length; i++) {
    let source = arguments[i];
    Object.getOwnPropertyNames(source).forEach(prop => {
      destination[prop] = source[prop];
    });
  }

  return destination;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe
