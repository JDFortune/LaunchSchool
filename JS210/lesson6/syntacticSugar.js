// function foo(bar, qux, baz) {
//   return {
//     bar: bar,
//     qux: qux,
//     baz: baz,
//   }
// }

// function foo() {
//   return {
//     bar: function() {
//       console.log("bar");
//     },
//     qux: function(arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz: function(arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let value = foo(1, 2, 3);
// let bar = value.bar;
// let baz = value.baz;
// let qux = value.qux;

// function foo(arr) {
//   return [
//     arr[2],
//     5,
//     arr[0],
//   ];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// let bar = result[0];
// let qux = result[1];
// let bax = result[2];

// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(array[0], array[1], array[2]);

// let result = product.apply(null, array);

// function product() {
//   let args = Array.from(arguments);

//   return args.reduce((total, number) => total * number);
// }

// console.log(product(1, 2, 3));

// const {foo, ...rest} = { foo: 42, bar: 3.1415, qux: "abc" };
// console.log(foo);         // 42
// console.log(rest);        // { bar: 3.1415, qux: 'abc' }

// const obj = {
//   first: "I am the first",
//   second: "I am the second",
//   third: [1, 2, 3],
//   rest: { a: 'a', b: 'b' },
// };

// const { first, second, ...rest } = obj;

// const first = obj.first;
// const second = obj.second;
// const rest = { third: obj.third, rest: obj.rest };

// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];

//   return {
//     type: animalType,
//     age,
//     colors,
//   }
// }

// let { type, age, colors } = qux();
// console.log(type);    // cat
// console.log(age);     // 9
// console.log(colors);  // [ 'black', 'white' ]

function take5(one, two, three, four, five) {
  return {
    first: one,
    last: five,
    middle: [two, three, four].sort(),
  }
}

let arr = ['hello', 'how', 'are', 'you', 'today']

let {first, last, middle} = take5(...arr);

console.log(first);
console.log(last);
console.log(middle);
