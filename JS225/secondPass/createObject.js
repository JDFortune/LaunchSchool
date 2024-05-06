// function createObject(obj) {
//   function temp() {}
//   temp.prototype = obj;
//   return new temp();
// }

// let foo = {
//   a: 1,
// };

// let bar = createObject(foo);
// console.log(foo.isPrototypeOf(bar));

Object.prototype.begetObject = function() {
  function F() {}
  F.prototype = this;
  return new F;
}

let foo = {
  a: 1,
};

let bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));