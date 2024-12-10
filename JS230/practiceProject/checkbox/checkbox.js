document.addEventListener('DOMContentLoaded', () => {
  let inbox = document.querySelector('.inbox');
  let checkboxes = [...inbox.querySelectorAll('input')];

  let lastClicked;

  inbox.addEventListener('click', event => {
    if (event.target.tagName === 'INPUT') {
      let idx = checkboxes.indexOf(event.target);
      if (lastClicked === undefined) lastClicked = checkboxes.length - 1;

      if (event.shiftKey && event.target.checked) {
        let span = [idx, lastClicked].sort();

        checkboxes.slice(span[0], span[1] + 1).forEach(checkbox => {
          checkbox.checked = true;
        });
      }
      
      lastClicked = idx;
    }
  });
});