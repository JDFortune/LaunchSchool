let main = document.querySelector('main');
let section = document.getElementById('sub');

main.addEventListener('contextmenu', event => {
  event.preventDefault();
  alert(event.currentTarget.tagName);
});

section.addEventListener('contextmenu', event => {
  event.preventDefault();
  event.stopPropagation();
  alert(event.currentTarget.tagName);
});