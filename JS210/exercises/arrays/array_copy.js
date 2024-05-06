let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice();

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

let myArray = [1, 2, 3, 4];
const myOtherArray = [];

for (let i = 0; i < myArray.length; ++i) {
  myOtherArray.push(myArray[i]);
}

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);