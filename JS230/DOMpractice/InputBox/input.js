document.addEventListener('DOMContentLoaded', event => {
  let textField = document.querySelector('div.text-field');
  let cursorInterval;

  textField.addEventListener('click', event => {
    event.stopPropagation();
    textField.classList.add('focused');
    cursorInterval = cursorInterval ||
                      setInterval(() => { 
                        textField.classList.toggle('cursor');
                      }, 500);
  });

  document.addEventListener('click', event=> {
    clearInterval(cursorInterval);
    cursorInterval = null;

    if (textField.classList.contains('focused')) {
      textField.classList.remove('focused');
      textField.classList.remove('cursor');
    }
  });

  document.addEventListener('keydown', event => {
    if (textField.classList.contains('focused')) {
      let content = document.querySelector('div.content');
      if (event.key === 'Backspace') {
        content.textContent = content.textContent.split('').slice(0, -1).join('');
      } else if (event.key.length === 1) {
        content.textContent += event.key;
      }
      
    }
  });
});