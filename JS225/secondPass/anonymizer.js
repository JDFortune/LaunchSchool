let Account = function() {
  const Private = new WeakMap();
  const ERR = 'Invalid Password';

  function anonymize() {
    let result = '';

    for (let i = 0; i < 16; i++) {
      result += generateRandomChar();
    }

    return result;
  }

  function generateRandomChar() {
    const reference = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let randomIndex = Math.floor(Math.random() * 62);

    return reference[randomIndex];
  }

  function isValidPassword(pw, obj) {
    return pw === obj.password;
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
      const pvtObj = Private.get(this);
      if (isValidPassword(pw, pvtObj)) {
        this.displayName = anonymize();
        return true;
      }
      
      return ERR;
    },

    resetPassword(pw, newPassword) {
      const pvtObj = Private.get(this);
      if (isValidPassword(pw, pvtObj)) {
        pvtObj.password = newPassword;
        return true;
      } else {
        return ERR;
      }
    },

    firstName(pw) {
      const pvtObj = Private.get(this);
      if (isValidPassword(pw, pvtObj)) {
        return pvtObj.firstName;
      }
      
      return ERR;
    },

    lastName(pw) {
      const pvtObj = Private.get(this);
      if (isValidPassword(pw, pvtObj)) {
        return pvtObj.lastName;
      }
      
      return ERR;
    },

    email(pw) {
      const pvtObj = Private.get(this);
      if (isValidPassword(pw, pvtObj)) {
        return pvtObj.email;
      }
      
      return ERR;
    },
  }
}();

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
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'