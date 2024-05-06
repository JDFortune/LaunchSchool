function makeBank() {
  let accounts = [];

  function makeAccount(number) {
    let balance = 0;
    let transactions = [];
  
    return {
      deposit(amt) {
        balance += amt;
        transactions.push({ type: 'deposit', amount: amt });
        return amt;
      },
    
      withdraw(amt) {
        if (balance < amt) amt = balance;
    
        balance -= amt;
        transactions.push({ type: 'withdraw', amount: amt });
        return amt;
      },
  
      balance() {
        return balance;
      },
  
      number() {
        return number;
      },
  
      transactions() {
        return transactions.map(tran => { return {...tran} });
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
let account = bank.openAccount();
console.log(account.balance());
// 0
console.log(account.number());
// 101
console.log(account.deposit(17));
// 17
let secondAccount = bank.openAccount();
console.log(secondAccount.number());
// 102
console.log(account.transactions());
// [{...}]