// let invoices = {
//   unpaid: [],
//   paid: [],

//   add(name, amount) {
//     this.unpaid.push({ name, amount })
//   },

//   payInvoice(name) {
//     for (let i = 0; i < this.unpaid.length; i++) {
//       if (this.unpaid[i].name === name) {
//         this.paid.push(this.unpaid.splice(i, 1)[0]);
//       }
//     }
//   },

//   total(paid) {
//     let val = paid ? this.paid : this.unpaid;
//     return val.reduce((total, invoice) => total + invoice.amount, 0);
//   },

// }

// invoices.add('Due North Development', 250);
// invoices.add('Moonbeam Interactice', 187.50);
// invoices.add('Slough Digital', 300);

// console.log(invoices.unpaid);
// console.log(invoices.total(false));

// invoices.payInvoice('Slough Digital');
// invoices.payInvoice('Due North Development');
// console.log(invoices.unpaid);
// console.log(invoices.paid);
// console.log(invoices.total(true));
// console.log(invoices.total());

function cashOnHand(cash) {
  let total = 0;

  total += cash.ones;
  total += cash.fives * 5;
  total += cash.tens * 10;
  total += cash.twenties * 20;
  total += cash.hundreds * 100;

  return total;
}

cash = {ones: 12, fives: 2, tens: 0, twenties: 2, hundreds: 0};

console.log(cashOnHand(cash));