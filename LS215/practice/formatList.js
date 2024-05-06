function format(arr) {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return arr[0];
    case 2:
      return arr.join(' & ');
    default:
      return arr.slice(0, -1).join(', ') + ' & ' + arr.at(-1);
  }
}

function list(list) {
  let names = list.map(obj => obj.name);

  return format(names);
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));
// # returns 'Bart, Lisa & Maggie'
console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]));
// # returns 'Bart & Lisa'
console.log(list([ {name: 'Bart'} ]));
console.log(list([]));