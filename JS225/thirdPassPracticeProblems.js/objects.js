let invoices = {
  unpaid: [],
}

invoices.add = function(client, amount) {
  this.unpaid.push({
    name: client,
    amount: amount
  });
}

invoices.totalDue = function() {
  let total = 0;

  for (let i = 0; i < this.unpaid.length; i += 1) {
    total += this.unpaid[i].amount;
  }

  return total;
}

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);

console.log(invoices.totalDue());

invoices.paid = [];

invoices.payInvoice = function(client) {
  let unpaid = [];

  for (let i = 0; i < this.unpaid.length; i += 1) {
    let invoice = this.unpaid[i];
    if (client === invoice.name) {
      this.paid.push(invoice);
    } else {
      unpaid.push(invoice);
    }
  }

  this.unpaid = unpaid;
}

invoices.totalPaid = function() {
  let total = 0;

  for (let i = 0; i < this.paid.length; i += 1) {
    total += this.paid[i].amount;
  }

  return total;
}


invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');

console.log(invoices.totalDue());
console.log(invoices.totalPaid());