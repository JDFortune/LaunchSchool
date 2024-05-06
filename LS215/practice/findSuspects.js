/*
Sherlock has to find suspects on his latest case. He will use your method, dear Watson. Suspect in this case is a
person which has something not allowed in his/her pockets.
Allowed items are defined by array of numbers.
Pockets contents are defined by map entries where key is a person and value is one or few things represented by an
array of numbers (can be nil or empty array if empty), example:
pockets = {
bob: [1],
tom: [2, 5],
jane: [7]
}
Write amethod which helps Sherlock to find suspects. If no suspect is found or there are no pockets (pockets == nil), the
method should return nil

Given an object for pockets with keys as names of people and the values as arrays of numbers
Function takes the pockets obj and an array of allowed items. If a pocket for a person contains an item that is not in the allowed items array, add the name to the list of suspect. If there are no suspects, return null.

Data:
  global: obj for names and their pocket items
  inputs: pockets object and array of allowed items (integers)
  output: array of suspects (or if empty, null)

Questions:
  - Will we always be given an array as the second argument and will the first argument always be an object with names as keys and arrays of 0 or more nubmers as values
  - Will we ever be given less or no arguments or more than two arguments? WHat do we do in this case?
    - What do we do if we don't receive an array of allowed items? Default it to an empty array?
    - What do we do if a suspects pockets are empty?
  - Will the pockets array contain only whole numbers? WIll they ever be NaN of Infinity or negative or decimals? What should we do in each case?
  - WIll the arrays ever be sparse, and how should we treat them if they are?

Algorithm
  - declare a suspects array []
  - iterate through the object keys
    - if a and item in the array for the object key is not in the array of allowed items,
      push the name into the suspects array
  - if the array is empty return null, else return the array.
*/

pockets = {
  bob: [1],
  tom: [2, 5],
  jane: [7],
}

function findSuspects(pockets, allowed) {
  let suspects = [];

  for (let name in pockets) {
    if (pockets[name].some(item => !allowed.includes(item))) {
      suspects.push(name);
    }
  }

  return suspects.length === 0 ? null : suspects;
}

console.log(findSuspects(pockets, [1, 2])); // [:tom, :jane]
console.log(findSuspects(pockets, [1, 7, 5, 2])); // nil
console.log(findSuspects(pockets, [])); // [:bob, :tom, :jane]
console.log(findSuspects(pockets, [7])); // [:bob, :tom]
