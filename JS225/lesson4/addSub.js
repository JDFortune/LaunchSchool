function makeAddSub() {
  let num = 0;

  function add(n) {
    num += n;
    console.log(num);
  }

  function subtract(n) {
    num -= n;
    console.log(num);
  }

  return [add, subtract];
}

let [add, subtract] = makeAddSub();

add(1);

add(42);

subtract(39);

add(6);