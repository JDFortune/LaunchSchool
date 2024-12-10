function nodesToArr(arr = null) {
  arr = arr || [document.body.tagName, [...document.body.children]];
  
  for (let i = 0; i < arr[1].length; i++) {
    arr[1][i] = [arr[1][i].tagName, [...arr[1][i].children]];
    nodesToArr(arr[1][i]);
  }

  return arr
}

document.addEventListener('DOMContentLoaded', () => {

  let arr = nodesToArr();
  console.log(arr);
});
