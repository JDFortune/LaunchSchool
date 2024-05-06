function makeList() {
  let items = [];

  return {
    add(item) {
      let idx = items.indexOf(item);
      if (idx !== -1) {
        console.log('list already contains ' + item);
      } else {
        items.push(item);
        console.log(item + ' added!');
      }
    },

    remove(item) {
      let idx = items.indexOf(item);
      if (idx !== -1) {
        items.splice(idx, 1);
        console.log(item + ' removed!');
      } else {
        console.log('list does not contain ' + item);
      }
    },

    list() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(item => console.log(item));
      }
    },

    clear() {
      items = [];
      console.log('all items deleted');
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
list.clear();
list.list();