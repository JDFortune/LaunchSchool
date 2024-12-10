document.addEventListener('DOMContentLoaded', event => {
  function newHighlight(targetNode) {
    let currentHighlight = document.querySelector('.highlight');
    if (currentHighlight) currentHighlight.classList.remove('highlight');

    targetNode.classList.add('highlight');
  }

  let navigation = document.querySelector('ul');
  let main = document.querySelector('main');

  navigation.addEventListener('click', event => {
    event.stopPropagation();
    let listItem = event.target;
    let articleId = listItem.getAttribute('href');
    let article = document.querySelector(articleId);
    
    newHighlight(article);
  });

  main.addEventListener('click', event => {
    event.stopPropagation();
    
    let current = event.target;
    while (current && !(current.nodeName == 'ARTICLE' || current.nodeName == 'MAIN')) {
      current = current.parentNode;
    }

    newHighlight(current);
  });

  document.addEventListener('click', event => newHighlight(main));
});