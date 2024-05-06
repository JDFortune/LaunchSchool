// let shape = {
//   getType() {
//     return this.type;
//   }
// }

// function Triangle(a, b, c) {
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   this.type = 'triangle';
// }

// Triangle.prototype = shape;
// Triangle.prototype.getPerimeter = function() {
//   return this.a + this.b + this.c;
// }
// Triangle.prototype.constructor = Triangle;

// let t = new Triangle(3, 4, 5);
// console.log(t.constructor); // Triangle(a, b, c)
// console.log(shape.isPrototypeOf(t));     // true
// console.log(t.getPerimeter());           // 12
// console.log(t.getType());                // 'triangle'

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// console.log("Hello".constructor.name);
// console.log([1,2,3].constructor.name);
// console.log({name: 'Srdjan'}.constructor.name);

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// function User(first, last) {
//   if (!(this instanceof User)) {
//     return new User(first, last);
//   }

//   this.name = first + ' ' + last;

//   return this;
// }

// let name = 'Jane Doe';
// let user1 = new User('John', 'Doe');
// let user2 = User('John', 'Doe');

// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// function createObject(obj) {
//   function F() {}
//   F.prototype = obj;
//   return new F();
// }

// let foo = {
//   a: 1
// };

// let bar = createObject(foo);
// console.log(bar.a);
// console.log(foo.isPrototypeOf(bar));         // true

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

let foo = {
  a: 1,
};

Object.prototype.begetObject = function () {
  function F() {}
  F.prototype = this;
  return new F();
}

let bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));         // true

console.log(Object.getPrototypeOf(bar) === foo);

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// function neww(constructor, args) {
//   let object = Object.create(constructor.prototype);
//   let result = constructor.apply(object, args);
//   return typeof result === 'object' ? result : object;
// }

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.greeting = function() {
//   console.log('Hello, ' + this.firstName + ' ' + this.lastName);
// };

// let john = neww(Person, ['John', 'Doe']);
// console.log(john)

// john.greeting();          // => Hello, John Doe
// console.log(john.constructor);         // Person(firstName, lastName) {...}