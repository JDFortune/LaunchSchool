const PASSWORD = 'gooftroop';
let failedAttempts = 0;

function enterPassword() {
  let readlineSync = require('readline-sync');

  while (failedAttempts < 3) {
    let pw = readlineSync.question('What is the password: ');
    
    if (pw === PASSWORD) {
      console.log('You have successfully logged in.');
      break;
    }
  
    failedAttempts += 1;
  }

  if (failedAttempts === 3){
    console.log('You have been denied access.');
  }
}

enterPassword();