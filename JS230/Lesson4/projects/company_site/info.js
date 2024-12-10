document.addEventListener('DOMContentLoaded', () => {
  let background = document.querySelector('.background');
  let employeeDiv = document.querySelector('div#team ul');

  console.log(background);

  console.log(employeeDiv);

  employeeDiv.addEventListener('click', event => {
    event.preventDefault();
    let element = event.target;
    if (element.tagName === 'A') {
      element = element.querySelector('img');
    };

    if (element.tagName === 'IMG') {
      background.querySelector('img').setAttribute('src', element.getAttribute('src'));
      background.querySelector('h3').textContent = element.getAttribute('alt');
      background.querySelector('p').textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
      background.classList.toggle('hide');
      background.classList.toggle('show');
    }
  });

  background.addEventListener('click', event => {
    event.preventDefault();
    background.classList.toggle('hide');
    background.classList.toggle('show');
  });
});