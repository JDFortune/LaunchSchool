// function makeAccount(number) {
//   let balance = 0;
//   let transactions = [];
//   return {
//     deposit(amount) {
//       balance += amount;
//       transactions.push({ type: 'deposit', amount: amount });
//       return amount;
//     },

//     withdraw(amount) {
//       if (balance < amount) {
//         amount = balance;
//       }

//       balance -= amount;
//       transactions.push({ type: 'withdrawal', amount: amount });
//       return amount;
//     },

//     transactions() {
//       return transactions.map(obj => {return {...obj}});
//     },

//     balance() {
//       return balance;
//     },

//     number() {
//       return number;
//     }
//   };
// }

// function makeBank() {
//   let accounts = [];
//   return {
//     openAccount() {
//       let id = this.generateId()
//       let account = makeAccount(id)
//       accounts.push(account);
//       return account;
//     },
//     generateId() {
//       let maxId = Math.max(...accounts.map(acct => acct.number()));
//       let newId = maxId === -Infinity ? 101 : maxId + 1;
//       return newId
//     },

//     transfer(source, destination, amount) {
//       return destination.deposit(source.withdraw(amount));
//     },
//   }
// }

// let bank = makeBank();
// console.log(bank.accounts);
// // undefined

