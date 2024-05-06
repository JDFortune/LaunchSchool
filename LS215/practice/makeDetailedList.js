/*
The police call. They need a more detailed list of the stolen goods.

You are given an array with nested arrays that represent each room in your mansion where the goods were stolen. Each room will have two sub-arrays, one for the stolen items and the other for its values. They always match, the stolen item at index 0 is worth the value at index 0 of the values array, the stolen item at index 1 is worth the value at index 1, and so forth. Look at the example for a clearer picture.

Return an object that represents where the goods were stolen from and which goods were stolen from each room and their value.

Algorithm:
set result object {}
iterate over the array
  room, itemsArr, valuesArr
  set the object key as room to an object result[kitche] = {}
  for each index in items array
    set the obj's room's item by index to the items value by index
      result[kitchen][piano] = 1000;
      result[kitchen][tv] = 50;
return result object
      */

function makeDetailedList(arr) {
  let listDetails = {};
  arr.forEach(([room, items, values]) => {
    listDetails[room] = {};
    for (let i = 0; i < items.length; i++) {
      listDetails[room][items[i]] = values[i];
    }
  });

  return listDetails;
}

console.log(makeDetailedList([["kitchen", ["piano", "tv"], [1000, 50]]]));
/*{ kitchen: { piano: 1000, tv: 50 } }*/


console.log(makeDetailedList([
  ["basement", ["baseball bat"], [500] ],
  ["garage", ["horses", "cadillac", "flowers"], [110, 2000, 30]]
])); /*{
  basement: {
    "baseball bat": 500
  },
  garage: {
    horses : 110,
    cadillac: 2000,
    flowers: 30
  }
}
*/
console.log(makeDetailedList([['bedroom', ['tv', 'xbox'], [300, 500]]]));
// {bedroom: {tv: 300, xbox: 500}}
