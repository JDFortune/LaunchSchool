// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// let baz = Object.create(bar);
// let qux = Object.create(baz);

// console.log(Object.getPrototypeOf(qux) === baz);       // true
// console.log(Object.getPrototypeOf(baz) === bar);       // true
// console.log(Object.getPrototypeOf(bar) === foo);       // true

// console.log(Object.getPrototypeOf(qux));


// console.log(foo.isPrototypeOf(qux));                   // true - because foo is on qux's prototype chain
class Person {
  constructor(name) {
    this.name = name;
  }

  toString() {
    return '[object Person]';
  }
}

console.log(Person.name);

let john = new Person('John');

console.log(john.toString());