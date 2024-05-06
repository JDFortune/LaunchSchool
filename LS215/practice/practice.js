let arr = [1, 2,, 3, 4, 5];

console.log(arr);

let arr2 = arr.map(el => el +'hi');

console.log(arr2);

let arr3 = arr.filter(el => el);

console.log(arr3);


let arr4 = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === undefined) {
    continue;
  } else {
    arr4[i] = arr[i];
  }
}

console.log(arr4);