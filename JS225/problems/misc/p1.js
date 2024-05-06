let invoices = {
  unpaid: [],
  paid: [],

  add(name, amount) {
    this.unpaid.push({
      name,
      amount,
    });
  },

  totalDue() {
    return this.unpaid.map(inv => inv.amount)
                      .reduce((total, num) => total + num);
  },

  totalPaid() {
    return this.paid.map(inv => inv.amount)
                    .reduce((total, num) => total + num);
  },

  payInvoice(name) {
    let unpaid = [];

    this.unpaid.forEach(invoice => {
      if (invoice.name === name) {
        this.paid.push(invoice);
      } else {
        unpaid.push(invoice);
      }
    });

    this.unpaid = unpaid;
  },

};

invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);
console.log(invoices);

console.log(invoices.totalDue());
invoices.payInvoice("Due North Development");
invoices.payInvoice("Slough Digital");
invoices.payInvoice("Slough Digital");
console.log(invoices);
console.log(invoices.totalDue());
console.log(invoices.totalPaid());