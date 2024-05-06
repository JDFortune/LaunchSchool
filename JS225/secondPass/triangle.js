// let shape = {
//   getType() {
//     return this.type;
//   },
// }

// function Triangle(a, b, c) {
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   this.type = 'triangle'
// }

// Triangle.prototype = shape;
// Triangle.prototype.constructor = Triangle;

// Triangle.prototype.getPerimeter = function() {
//   return this.a + this.b + this.c;
// };

// let t = new Triangle(3, 4, 5)

// console.log(t.constructor);
// console.log(shape.isPrototypeOf(t));
// console.log(t.getPerimeter());
// console.log(t.getType());

console.log("Hello".constructor.name);
console.log([1, 2, 3].constructor.name);
console.log({ name: 'Srdjan' }.constructor.name);