let cursorInterval;

function processKey(event) {
  let removeCharKeys = ['Delete', 'Backspace'];

  if (removeCharKeys.includes(event.key)) {

  }

}

document.addEventListener("DOMContentLoaded", () => {
  let textField = document.querySelector('.text-field');
  let content = document.querySelector('.content');

  textField.addEventListener('click', event => {
    event.stopPropagation();
    event.currentTarget.classList.add('focused');
    
    cursorInterval = cursorInterval || setInterval(() => textField.classList.toggle('cursor'), 500);
  });

  document.addEventListener('click',event => {
    clearInterval(cursorInterval);
    textField.classList.remove('focused');
    textField.classList.remove('cursor');
  });

  document.addEventListener('keydown', event => {
    if (textField.classList.contains('focused')) {
      let content = textField.firstElementChild;
      if (event.key === 'Backspace') {
        content.textContent = content.textContent.slice(0, -1);
      } else if (event.key.length === 1) {
        content.textContent += event.key;
      }
    }
  });
});