document.addEventListener('DOMContentLoaded', event => {
  let addButton = document.getElementById('add');
  let output = document.getElementById('output');
  let count = 0;

  addButton.addEventListener('click', event => {
  count += 1;
  output.textContent = String(count);  
  });
});