const {Todo, todoList, todoManager} = require('./todoApp.js');
const todoSet = require('./appData.js');

describe('TodoApp Test Suite', () => {
  afterEach(() => {
    let ids = todoList.todos().map(({id}) => id);
    ids.forEach(id => todoList.delete(id));
  });

  test('Todo Constructor is defined', () => {
    expect(typeof Todo).toBe('function');
  });

  test('Todo constructor creates a new todo Object', () => {
    let id = 3;

    let todoData = {
      title: 'Buy Milk',
      month: '1',
      year: '2017',
      description: 'Milk for baby',
    };

    let todo = new Todo(todoData);

    expect(typeof todo).toBe('object');
    expect(todo instanceof Todo).toBe(true);
  });

  test('todoList can add a single new todo item', () => {
    let todoData = {
      title: 'Buy Milk',
      month: '1',
      year: '2017',
      description: 'Milk for baby',
    };

    todoList.add(todoData);

    expect(todoList.todos().length).toBe(1);
  });

  test('todoList can add multiple todos as a set', () => {
    todoList.add(todoSet);
    console.log(todoList.todos().length);
    expect(todoList.todos().length).toBe(4);
  });

  test('todoList cannot access todos directly', () => {
    let todos = todoList.todos;

    expect(!Array.isArray(todos));
  });

  test('todoManager returns a new copy of todo List', () => {
    todoList.add(todoSet);

    let todos1 = todoManager.allTodos();
    let todos2 = todoManager.allTodos();

    expect(todos1).not.toBe(todos2);
  });

  test('todoManager.todosForDate returns only todos for the supplied date', () => {
    todoList.add(todoSet);

    let filteredTodos = todoManager.todosForDate('1', '2017');
    expect(filteredTodos.length).toBe(1);
  });

  test('todoManager.todosForDate can return todos for months only', () => {
    todoList.add(todoSet);

    let filteredTodos = todoManager.todosForDate('1');
    expect(filteredTodos.length).toBe(2);
  });

  test('todoManger.todosForDate can return todos for year only (with false value for month)', () => {
    todoList.add(todoSet);

    let filteredTodos = todoManager.todosForDate(null, '2017');
    expect(filteredTodos.length).toBe(2);
  });

  test('todoManager.completedTodos returns only completedTodos', () => {
    todoList.add(todoSet);
    todoList.update(1, {completed: true});
    todoList.update(2, {completed: true});
    todoList.update(4, {completed: true});

    let completed = todoManager.completedTodos();

    expect(completed.length).toBe(3);
  });

  test('todoManager.completedTodosForDate only returns completed Todos of a specified date', () => {
    todoList.add(todoSet);
    todoList.update(1, {completed: true});
    todoList.update(2, {completed: true});
    todoList.update(4, {completed: true});

    let filteredCompleted = todoManager.completedTodosForDate('1', '2017');

    expect(filteredCompleted.length).toBe(1);
  });

  test('cannot add invalid todo', () => {
    todoList.add({title: ''});
    todoList.add({title: 'Laundry', month: 9, year: 2017, description: ''});

    expect(todoManager.allTodos().length).toBe(0);
  });

  test('only unique todos can be added', () => {
    todoList.add({title: 'Run', month: '2', year: '2017', description: 'go running'});
    todoList.add({title: 'Run', month: '2', year: '2017', description: 'go running'});
    todoList.add({title: 'Run', month: '3', year: '2017', description: 'go running'});

    expect(todoList.todos().length).toBe(2);
  });

  test('todoList.getTodo returns new copies of the todo item', () => {
    todoList.add(todoSet);

    let todo1 = todoList.getTodo(1);
    let todo2 = todoList.getTodo(1);

    expect(todo1 !== todo2);
  });

  test('todoList.update can update a todo', () => {
    todoList.add(todoSet);
    let todo1 = todoList.getTodo(1);

    todoList.update(1, {title: 'Buy Molk'});
    let todo2 = todoList.getTodo(1);

    expect(todo1.title).toBe('Buy Milk');
    expect(todo2.title).toBe('Buy Molk');
  });

  test('cannot update todo if updatedInfo argument is not an object or not supplied', () => {
    todoList.add(todoSet);

    const logSpy = jest.spyOn(global.console, 'log');

    todoList.update(1);
    expect(logSpy).toHaveBeenCalledWith('Must supply an object with keys and values.');
  });

  test('cannot update todo with improper todo ID', () => {
    const logSpy = jest.spyOn(global.console, 'log');

    todoList.update(1, {title: 'nope'});
    expect(logSpy).toHaveBeenCalledWith('Todo ID not found');
  });

  test ('cannot delete if invalid todo Id', () => {
    const logSpy = jest.spyOn(global.console, 'log');

    todoList.delete(1);

    expect(logSpy).toHaveBeenCalledWith('Invalid Todo ID');
  });

  test('adding multilple todos through a set adds valid todos a not invalid. then logs error', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    todoList.add(todoSet.concat({title: ''}));

    expect(todoList.todos().length).toBe(4);
    expect(logSpy).toHaveBeenCalledWith('One or more todos have invalid Data and were not added.');
  });

  test('todo.getTodo returns a copy of the todo object. Users cannot manipulate the object directly', () => {
    todoList.add(todoSet);

    let todo1 = todoList.getTodo(1);

    todo1.title = 'Buy Shelves';

    let todo2 = todoList.getTodo(1);

    expect(todo2.title).toBe('Buy Milk');
  });

  test('updating a todo title with non-string results in error', () => {
    todoList.add(todoSet);

    const logSpy = jest.spyOn(global.console, 'log');

    todoList.update(1, {title: 1});

    expect(todoList.getTodo(1).title).toBe('Buy Milk');
    expect(logSpy).toHaveBeenCalledWith('Supplied property or data type is restricted.');
  });

  test('updating a todo year with invalid input results in error', () => {
    todoList.add(todoSet);

    const logSpy = jest.spyOn(global.console, 'log');

    todoList.update(1, {year: 1});

    expect(todoList.getTodo(1).year).toBe('2017');
    expect(logSpy).toHaveBeenCalledWith('Supplied property or data type is restricted.');
  });

  test('updating a todo month with invalid input results in error', () => {
    todoList.add(todoSet);

    const logSpy = jest.spyOn(global.console, 'log');

    todoList.update(1, {month: 1});

    expect(todoList.getTodo(1).month).toBe('1');
    expect(logSpy).toHaveBeenCalledWith('Supplied property or data type is restricted.');
  });

  test('updating a todo completed with non-boolean input results in error', () => {
    todoList.add(todoSet);

    const logSpy = jest.spyOn(global.console, 'log');

    todoList.update(1, {completed: 'true'});

    expect(todoList.getTodo(1).completed).toBe(false);
    expect(logSpy).toHaveBeenCalledWith('Supplied property or data type is restricted.');
  });

  test('trying to update a todo id results in error', () => {
    todoList.add(todoSet);

    const logSpy = jest.spyOn(global.console, 'log');

    todoList.update(1, {id: 2});

    expect(todoList.getTodo(1).id).toBe(1);
    expect(logSpy).toHaveBeenCalledWith('Supplied property or data type is restricted.');
  });

  test('updating a todo description with invalid input results in error', () => {
    todoList.add(todoSet);

    const logSpy = jest.spyOn(global.console, 'log');

    todoList.update(1, {description: false});

    expect(todoList.getTodo(1).description).toBe('Milk for baby');
    expect(logSpy).toHaveBeenCalledWith('Supplied property or data type is restricted.');
  });

  test('updating with invalid property results in error', () => {
    todoList.add(todoSet);

    const logSpy = jest.spyOn(global.console, 'log');

    todoList.update(1, { arms: 'heavy', knees: 'weak', moms: 'spaghetti'});

    expect(todoList.getTodo(1).hasOwnProperty('arms')).toBe(false);
    expect(todoList.getTodo(1).hasOwnProperty('knees')).toBe(false);
    expect(todoList.getTodo(1).hasOwnProperty('moms')).toBe(false);
    expect(logSpy).toHaveBeenCalledWith('Supplied property or data type is restricted.')
  })
});

