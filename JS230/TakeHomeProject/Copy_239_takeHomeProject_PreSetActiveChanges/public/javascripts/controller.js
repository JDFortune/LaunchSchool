import { View } from './view.js';
import { Model } from './model.js';

class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.init();
  }

  async init() {
    let todos = await this.model.getTodos();
    this.view.resetTodos(todos);
    this.view.renderSideBar();
    this.view.setActive('All Todos', false);
    this.view.renderMain();

    this.view.bindNewTodoForm(this.addTodoClickHandler.bind(this));
    this.view.bindSubmitForm(this.submitFormHandler.bind(this));

    this.view.bindClickLoadAllTodos(this.clickAllTodosHandler.bind(this));
    this.view.bindClickGroupTodos(this.clickGroupTodosHandler.bind(this));
    this.view.bindClickCompleteTodos(this.clickAllCompletedHandler.bind(this));
    this.view.bindClickCompleteGroupTodos(this.clickCompleteGroupHandler.bind(this));

    this.view.bindModalLayerClickEvent(this.clickHideModalLayerHandler.bind(this));

    this.view.bindTableBodyClickEvent(this.clickTableBodyHandler.bind(this));
  }

  async submitForm(e) {
    let form = e.target;
    let formData = new FormData(form);
    let json = this.#formDataToJson(formData);

    if (json.title.length < 3) {
      alert('Title must be at least 3 characters');
      return;
    }

    let data = JSON.stringify(json);
    let url = form.getAttribute('action');
    let method = form.getAttribute('method');

    try {
      await this.model.sendData(method, url, data);
      let todos = await this.model.getTodos();

      this.view.resetTodos(todos);

      if (method === 'POST') {
        this.view.setActive('All Todos', false);
      } else {
        let title = this.view.current_active.dataset.title;
        let completed = this.view.isCurrentTabCompleted();
        this.view.setActive(title, completed);
      }

      this.view.hideModals();
      this.view.renderMain();
      this.view.form.reset();
    } catch (err) {
      console.error('Hello! here is your error', err);
    }
  }

  async markComplete(e) {
    if (e.target.getAttribute('method') === 'POST') {
      alert('Unable to mark a todo complete before it is created');
    } else {
      let url = e.target.getAttribute('action');
      let method = e.target.getAttribute('method');

      await this.model.sendData(method, url, {completed: true});

      this.#resetPage();
      this.view.form.reset();
      this.view.hideModals();
    }
  }

  // Event Handlers
  addTodoClickHandler(e) {
    e.stopPropagation();

    this.view.setFormMethodAction('POST', '/api/todos');
    this.view.showModals();
  }

  submitFormHandler(e) {
    e.preventDefault();

    if (e.submitter.tagName === 'INPUT') {
      this.submitForm(e);
    } else {
      this.markComplete(e);
    }
  }

  clickAllTodosHandler(e) {
    let current = e.target;
    if (current.tagName !== 'HEADER') {
      current = current.closest('header');
    }

    this.view.setActive('All Todos', false);
    this.view.renderMain();

  }

  clickGroupTodosHandler(e) {
    let current = e.target;
    if (current.tagName !== 'dl') {
      current = current.closest('dl')
    }

    this.view.setActive(current.dataset.title, false);
    this.view.renderMain();
  }

  clickAllCompletedHandler(e) {
    let current = e.target;
    if (current.tagName !== 'HEADER') {
      current = current.closest('header');
    }

    this.view.setActive(current.dataset.title, true);
    this.view.renderMain();
  }

  clickCompleteGroupHandler(e) {
    let current = e.target;
    if (current.tagName !== 'dl') {
      current = current.closest('dl');
    }

    this.view.setActive(current.dataset.title, true);
    this.view.renderMain();
  }

  clickHideModalLayerHandler(e) {
    this.view.hideModals();
    setTimeout(() => this.view.form.reset(), 500);
  }

  async clickTableBodyHandler(e) {
    e.preventDefault();
    e.stopPropagation();

    let id = e.target.closest('tr').dataset.id;
    let url = `/api/todos/${id}`

    if (e.target.tagName === 'LABEL') {
      this.view.setFormMethodAction('PUT', url);
      let todoData = await this.model.getData(url);
      this.view.addFormDataForUpdate(todoData);
      this.view.showModals();

    } else if (e.target.closest('td').classList.contains('delete')) {
      await this.model.sendData('DELETE', url);
      this.#resetPage();
    } else {
      let todo = await this.model.getData(url);
      todo.completed = !todo.completed;
      let json = JSON.stringify(todo);
      await this.model.sendData('PUT', url, json);

      this.#resetPage();
    }

  }

  async #resetPage() {
    let currentTitle = this.view.current_active.dataset.title;
    let isCompletedTab = this.view.isCurrentTabCompleted();
    let todos = await this.model.getTodos();
    
    this.view.resetTodos(todos);
    this.view.setActive(currentTitle, isCompletedTab);
    this.view.renderMain();
  }

  #formDataToJson(formData) {
    let json = {};

    for (let pair of formData.entries()) {
      json[pair[0]] = pair[1];
    }

    json.day = json.day === 'Day' ? "  " : json.day;
    json.month = json.month === 'Month' ? "  " : json.month;
    json.year = json.year === 'Year' ? "    " : json.year;
    json.description = json.description === '' ? " " : json.description;

    return json;
  }

}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new Controller();
});