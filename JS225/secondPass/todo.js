function makeList() {
  let todos = [];

  return function(arg) {
    if (arg) {
      let idx = todos.indexOf(arg)
      if (idx !== -1) {
        todos.splice(idx, 1);
        console.log(`${arg} removed!`);
      } else {
        todos.push(arg);
        console.log(`${arg} added!`);
      }
    } else {
      if (todos.length === 0) {
        console.log('The list is empty.')
      } else {
        todos.forEach(todo => console.log(todo));
      }
    }
  }
}

let list = makeList();
list();

list('make breakfast');
list('read book');

list();

list('make breakfast');

list();

