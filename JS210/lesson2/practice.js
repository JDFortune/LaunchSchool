// var bar = 42;
// console.log(global.bar);
// bar += 1;
// console.log(global.bar);

// let foo = 86;
// console.log(global.foo);

// hey = "hi";

// console.log(global.hey);

// var bar = 'hi';
// console.log(bar);

// console.log(foo);
// let foo = 'hello';
// console.log(foo);

// function bar(foo) {
//   console.log(foo);
// }

// function foo() {
//   if (true) {
//     function bar() {
//       console.log("bar");
//     }
//   } else {
//     function qux() {
//       console.log("qux");
//     }
//   }

//   console.log(bar);
//   bar();

//   console.log(qux)
//   qux();
// }

// foo();

// bar();             // logs "world"
// var bar = 'hello';

// function bar() {
//   console.log('world');
// }

// console.log(bar);

// let bar = 'hello';
// let bar = 'goodbye';

// console.log(bar);

// hello();
// function hello() {
//   if (false) {
//     var a = 'hello';
//   }
//   console.log(a);
// }

// function hello() {
//   a = 'hello';
//   console.log(a);

//   let a = 'hello again';
// }

// hello();
// console.log(a);


// let word = 'swallow';

function speak() {
  console.log(word);
}

function say() {
  let word = 'hello';

  speak();
}

say();


