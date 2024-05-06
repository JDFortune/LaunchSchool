let Account = (function() {
  const ERROR = 'Invalid Password'
  const Private = new WeakMap();
  
  function isValidPassword(testPassword) {
    return testPassword === Private.get(this).password;
  }

  function getRandomLetterNumber() {
    let index = Math.floor(Math.random() * 62);

    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[index];
  }

  function anonymize() {
    let result = '';

    for (let i = 0; i < 16; i++) {
      result += getRandomLetterNumber();
    }

    return result;
  }

  return {
    init(email, password, firstName, lastName) {
      Private.set(this, {
        email,
        password,
        firstName,
        lastName,
      });
      this.displayName = anonymize();
      return this;
    },

    reanonymize(pw) {
      if (isValidPassword.call(this, pw))  {
        this.displayName = anonymize();
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword(currentPassword, newPassword) {
      if (isValidPassword.call(this, currentPassword)) {
        Private.get(this).password = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    firstName(pw) {
      let obj = Private.get(this);
      return isValidPassword.call(this, pw) ?  obj.firstName : ERROR;
    },

    lastName(pw) {
      let obj = Private.get(this);
      return isValidPassword.call(this, pw) ? obj.lastName : ERROR;
    },

    email(pw) {
      let obj = Private.get(this);
      return isValidPassword.call(this, pw) ? obj.email : ERROR;
    },
  };
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('123456'));              // logs 'Invalid Password'
console.log(fooBar.email('123456'));                  // logs 'Invalid Password'