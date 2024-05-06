function makeList() {
  let todos = [];

  return {
    add(item) {
      if (todos.includes(item)) {
        console.log(item + ' already exists!');
      } else {
        todos.push(item);
        console.log(item + ' added!');
      }
    },

    remove(item) {
      let idx = todos.indexOf(item);
      if (idx === -1) {
        console.log(item + ' does not exist!');
      } else {
        todos.splice(idx, 1);
        console.log(item + ' removed!');
      }
    },

    list() {
      if (todos.length === 0) {
        console.log('The list is empty.');
      } else {
        todos.forEach(item => console.log(item));
      }
    },

  }
}

let list = makeList();
list.add('peas');
list.list();
list.add('corn');
list.list();
list.remove('peas');
list.list();
