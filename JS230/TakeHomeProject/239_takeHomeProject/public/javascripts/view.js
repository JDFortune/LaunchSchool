export class View {
  constructor() {
    this.#createTemplates();
    this.init();

    this.formattedTodos = null;
    this.todos = null;
    this.pageData = null;
    this.current_active = null;
  }

  init() {
    let pageHTML = this.templates['main_template']({});
    document.body.insertAdjacentHTML('afterbegin', pageHTML);
    this.#setStaticElements();
  }

  addDataForUpdateForm(todoData) {
    let inputs = this.form.querySelectorAll('input:not([type=submit]), select, textarea');
    inputs.forEach(input => {
      input.value = todoData[input.name].trim();
    });

    this.form['day'].value = this.form['day'].value || 'Day'
    this.form['month'].value = this.form['month'].value || 'Month';
    this.form['year'].value = this.form['year'].value || 'Year';
  }

  hideModals() {
    this.modals.forEach(modal => {
      modal.classList.remove('visible');
      modal.classList.add('hidden');
    });
  }

  isCurrentTabCompleted() {
    return this.current_active.id === this.current_active.dataset.title ||
            this.current_active.dataset.title === 'Completed';
  }

  renderMain() {
    this.#clearMain();
    this.#setCurrentActivePageData();
    
    let headerHTML = this.templates['title_template'](this.pageData);
    this.mainHeader.insertAdjacentHTML('afterbegin', headerHTML);

    let todosHTML = this.templates['list_template'](this.pageData);
    this.mainTbody.insertAdjacentHTML('afterbegin', todosHTML);
  };

  renderSideBar() {
    this.#clearSideBar();
    let allTodosHTML = this.templates['all_todos_template'](this.pageData);
    this.sideAllTodos.insertAdjacentHTML('afterbegin', allTodosHTML);

    let allListsHTML = this.templates['all_list_template'](this.pageData);
    this.sideAllLists.insertAdjacentHTML('afterbegin', allListsHTML);

    let completedTodosHTML = this.templates['completed_todos_template'](this.pageData);
    this.sideCompTodos.insertAdjacentHTML('afterbegin', completedTodosHTML);

    let completedListHTML = this.templates['completed_list_template'](this.pageData);
    this.sideCompLists.insertAdjacentHTML('afterbegin', completedListHTML);

    this.sidebarTabs = {};
    this.sidebarTabs.all =
      [...document.querySelectorAll('section#all header, section#all article > *')];
    this.sidebarTabs.completed =
      [...document.querySelectorAll('section#completed_items header, section#completed_items article > *')];
  }

  resetTodos(todoData) {
    this.todos = todoData;
    this.#formatTodos();
    this.#setPageData();
    this.renderSideBar();
  }

  setActive(title, completed = false) {
    this.#clearActive();

    let tabs = !completed ? this.sidebarTabs.all : this.sidebarTabs.completed;

    let tab = tabs.find(tab => tab.dataset.title === title);
    if (tab) {
      tab.classList.add('active');
      this.current_active = tab;
    } else {
      let allTodos = this.sideAllTodos.querySelector('header');
      allTodos.classList.add('active');
      this.current_active = allTodos;
    }

    // If you want the Main Section to not reload when the last item is deleted from a Todo month/year group, replace the above else clause with this code.

    // else {
    //   this.pageData.current_section = {title, data: 0};
    //   this.pageData.selected = [];
    // }

  }

  setFormMethodAction(method, action) {
    this.form.setAttribute('method', method);
    this.form.setAttribute('action', action);
  }

  showModals() {
    this.modals.forEach(modal => {
      modal.classList.remove('hidden');
      modal.classList.add('visible');
    });
  }

  bindNewTodoForm(handler) {
    this.addNewBtn.addEventListener('click', handler);
  }

  bindSubmitForm(handler) {
    this.form.addEventListener('submit', handler);
  }

  bindClickNav(handler) {
    this.navBar.addEventListener('click', handler);
  }

  bindModalLayerClickEvent(handler) {
    this.modals[0].addEventListener('click', handler);
  }

  bindTableBodyClickEvent(handler) {
    this.mainTbody.addEventListener('click', handler);
  }

  #clearActive() {
    let active = document.querySelector('.active');
    if (active) active.classList.remove('active');
  }

  #clearMain() {
    while (this.mainHeader.lastChild) {
      this.mainHeader.removeChild(this.mainHeader.lastChild);
    }

    while (this.mainTbody.lastChild) {
      this.mainTbody.removeChild(this.mainTbody.lastChild);
    }
  }

  #clearSideBar() {
    this.sideBarElements.forEach(parent => {
      while (parent.lastChild) parent.removeChild(parent.lastChild);
    });
  }

  #createTemplates() {
    let templates = {};
    let scripts = document.querySelectorAll('[type$=handlebars]');

    scripts.forEach(script => {
      templates[script.id] = Handlebars.compile(script.innerHTML);

      if (script.dataset.type === 'partial') {
        Handlebars.registerPartial(script.id, script.innerHTML);
      }
    });

    this.templates = templates;
  }

  #filterCompletedTodos() {
    return this.formattedTodos.filter(todo => todo.completed);
  }

  #formatTodos() {
    let formatted = this.todos.map(todo => {
      let format = {};
      format.completed = todo.completed;
      format.title = todo.title;
      format.due_date = (todo.month.trim().length === 0 || todo.year.trim().length === 0) ? 'No Due Date' : `${todo.month}/${todo.year.slice(2)}`;
      format.id = todo.id;
      return format;
    });

    this.formattedTodos = this.#sortCompletedToBottom(formatted);
  }

  #getMainData() {
    switch (this.current_active.dataset.title) {
      case 'All Todos':
        this.pageData.selected = this.pageData.todos
        break;
      case 'Completed':
        this.pageData.selected = this.pageData.done;
        break;
      default:
        if (this.isCurrentTabCompleted()) {
          this.pageData.selected = this.pageData.done_todos_by_date[this.current_active.dataset.title];
          this.setActive(this.current_active.dataset.title, true);
        } else {
          this.pageData.selected = this.pageData.todos_by_date[this.current_active.dataset.title];
          this.setActive(this.current_active.dataset.title, false);
        }
    }

    this.pageData.current_section  = {
      title: this.current_active.dataset.title,
      data: this.pageData.selected.length,
    }
  }

  #groupTodosByDate(todos) {
    let group = {};

    todos.forEach(todo => {
      let date = todo.due_date;
      if (group[date]) {
        group[date].push(todo);
      } else {
        group[date] = [todo];
      }
    });

    return this.#sortGroup(group);
  }

  #setCurrentActivePageData() {
    if (!this.current_active) {
      this.current_active = this.sideAllTodos.querySelector('header');
    }
    
    this.#getMainData();
  }

  #setPageData() {
    this.pageData = {};
    this.pageData.todos = this.formattedTodos;
    this.pageData.todos_by_date = this.#groupTodosByDate(this.pageData.todos);
    this.pageData.done = this.#filterCompletedTodos();
    this.pageData.done_todos_by_date = this.#groupTodosByDate(this.pageData.done);
  }

  #setStaticElements() {
    this.navBar = document.getElementById('sidebar');
    this.sideAllTodos = document.getElementById('all_todos');
    this.sideAllLists = document.getElementById('all_lists');
    this.sideCompTodos = document.getElementById('completed_todos');
    this.sideCompLists = document.getElementById('completed_lists');
    this.sideBarElements = [
      this.sideAllTodos,
      this.sideAllLists,
      this.sideCompTodos,
      this.sideCompLists,
    ]
    
    this.mainHeader = document.querySelector('div#items header');
    this.mainTbody = document.querySelector('tbody');

    this.addNewBtn = document.querySelector('label[for=new_item]');
    this.modals = document.querySelectorAll('.modal');
    this.form = document.querySelector('form');
  }

  #sortAndGroupDates(dates) {
    let sortedGroups = {};

    dates.forEach(date => {
      let year = date.match(/\d{2}/g)[1];
      if (sortedGroups[year]) {
        sortedGroups[year].push(date);
      } else {
        sortedGroups[year] = [date];
      }
    });

    Object.values(sortedGroups).forEach(group => {
      group.sort((a, b) => Number(a.match(/\d{2}/g)[0]) - Number(b.match(/\d{2}/g)[0]));
    });

    return sortedGroups;
  }

  #sortGroup(group) {
    let dates = Object.keys(group);

    let noDueDate = dates.indexOf('No Due Date');
    if (noDueDate !== -1) {
      noDueDate = dates.splice(noDueDate, 1)[0];
    }

    let sortedGroupDates = this.#sortAndGroupDates(dates);

    let sortedDates = Object.values(sortedGroupDates).flat();
    if (noDueDate !== -1) sortedDates.unshift(noDueDate);

    return sortedDates.reduce((dateSortedTodos, date) => {
      dateSortedTodos[date] = group[date];
      return dateSortedTodos;
    }, {});
  }

  #sortCompletedToBottom(todoObject) {
    let complete = [];
    let incomplete = [];

    todoObject.forEach(todo => {
      if (todo.completed) {
        complete.push(todo);
      } else {
        incomplete.push(todo);
      }
    });

    return [...incomplete, ...complete];
  }
}
