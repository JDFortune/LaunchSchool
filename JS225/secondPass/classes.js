function newPerson(name) {
  return Object.defineProperties( {name: name}, {
    log: {
      value: function() {
        console.log(this.name);
      },
      writable: false,
      enumerable: false,
    }
  });
}

let me = newPerson('Shane Riley');
me.log();
me.log = function() { console.log('Amanda Rose'); };
me.log();
