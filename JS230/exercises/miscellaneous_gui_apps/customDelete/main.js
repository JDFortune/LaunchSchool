todo_items = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];

let templates = {};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[type$="handlebars"]').forEach(tmpl => {
    let html = tmpl.innerHTML;
    templates[tmpl.id] = Handlebars.compile(html);
    
    if (tmpl.classList.contains('partial')) {
      let partialName = tmpl.getAttribute('data-name');
      Handlebars.registerPartial(partialName, html);
    }
  });
  
  const list = document.querySelector('ul');
  const context = document.querySelector(".context_menu");
  const deleteBtn = context.querySelector('.remove');
  const confirmPrompt = document.querySelector('.confirm_prompt');
  const overlay = document.querySelector('.overlay');
  
  let todoListHTML = templates['todoListTmpl']({todos: todo_items});
  list.insertAdjacentHTML('beforeend', todoListHTML);

  list.addEventListener('contextmenu', event => {
    event.preventDefault();
  
    context.style.display = 'block';
    context.style.position = 'absolute';
    context.style.left = String(event.clientX) + 'px';
    context.style.top = String(event.clientY) + 'px';

    deleteBtn.setAttribute('data-id', event.target.dataset.id);
  });
  

  deleteBtn.addEventListener('click', event => {
    event.stopPropagation();
    confirmPrompt.style.display = 'block';
    overlay.style.display = 'block';

    context.style.display = 'none';
  });
  
  confirmPrompt.addEventListener('click', event => {
    event.stopPropagation();
    if (event.target.tagName === 'A') {
      event.preventDefault();
    
      if (event.target.textContent === 'Yes') {
        let listItem = document.querySelector(`#todos li[data-id="${deleteBtn.dataset.id}"]`);
        listItem.parentNode.removeChild(listItem); 
      } else if (event.target.textContent === 'No') {
        overlay.style.display = 'none';
      }

      confirmPrompt.style.display = 'none';
      overlay.style.display = 'none';
    } 
  });

    document.addEventListener('click', () => {
      context.style.display = 'none';
      confirmPrompt.style.display = 'none';
      overlay.style.display = 'none';
    });
});