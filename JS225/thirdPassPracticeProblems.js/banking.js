function makeBank() {
  let accounts = [];

  function makeAccount(number) {
      let balance = 0;
      let transactions = [];

    return {
      deposit(amt) {
        balance += amt;
        transactions.push({ type: 'deposit', amount: amt});
        return amt;
      },

      withdraw(amt) {
        if (balance < amt) {
          amt = balance;
        }
    
        balance -= amt;
        transactions.push({ type: 'withdraw', amount: amt});
        return amt;
      },

      balance() {
        return balance;
      },

      transactions() {
        return transactions.map(trans => { return {...trans} });
      },

      number() {
        return number;
      },
    };
  }

  return {
    openAccount() {
      let number = accounts.length + 101;
      let account = makeAccount(number);
      accounts.push(account);
      return account;
    },

    transfer(source, destination, amt) {
      return destination.deposit(source.withdraw(amt));
    },
  };
}

let bank = makeBank();
console.log(bank.accounts);
// undefined