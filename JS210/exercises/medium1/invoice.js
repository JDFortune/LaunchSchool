function invoiceTotal(...args) {
  return args.reduce((acc, amt) => acc + amt, 0);
}

console.log(invoiceTotal(20, 30, 40, 50));          // works as expected
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));