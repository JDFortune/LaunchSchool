const todoSet = require('./assets/appData.js');
const valid = require('./assets/validation.js');

class Todo {
  constructor(todoData) {
    this.title = todoData.title;
    this.month = todoData.month;
    this.year = todoData.year;
    this.description = todoData.description;
    this.completed = false;
  }

  isWithinMonthYear(month, year) {
    if (!year) {
      return this.month === month;
    } else if (!month) {
      return this.year === year;
    } else {
      return this.month === month && this.year === year;
    }
  }
}

let todoList = function() {
  let todos = [];

  const isUniqueTodo = (todoData) => {
    let keys = Object.keys(todoData);

    return todos.every(todo => {
      return keys.some(key => todo[key] !== todoData[key]);
    });
  }

  const generateUniqueID = () => {
    let todoIds = todos.map(({id}) => id);
    let id = todoIds.length === 0 ? 1 : (Math.max(...todoIds) + 1);
    return id;
  };

  const getTodoObject = (todoId) => {
    return todos.find(({id}) => id === todoId);
  };

  const getTodoIndex = (todo) => {
    return todos.indexOf(todo);
  };

  return {
    add(...todoData) {
      todoData = todoData.flat();
      let declined;
      
      todoData.forEach(data => {
        if (valid.allDataSupplied(data) &&
            valid.todoData(data) &&
            isUniqueTodo(data)) {
          let id = generateUniqueID();
          let todo = new Todo(data);
          todo.id = id;
          todos.push(todo);
          console.log(`Todo '${todo.title}' has been added.`);
        } else {
          declined = true;
        }
      });

      if (declined) {
        console.log('One or more todos have invalid Data and were not added.');
      }
    },

    delete(todoId) {
      let todo = getTodoObject(todoId);

      if (todo) {
        let idx = getTodoIndex(todo);
        todos.splice(idx, 1);
        console.log(`Todo '${todo.title}' has been deleted.`);
      } else {
        console.log('Invalid Todo ID');
      }
    },

    update(todoId, updatedInfo) {
      if (updatedInfo === null || typeof updatedInfo !== 'object') {
        console.log('Must supply an object with keys and values.');
        return;
      }

      if (!valid.todoData(updatedInfo)) {
        console.log('Supplied property or data type is restricted.');
        return;
      }

      let todo = getTodoObject(todoId);

      if (todo) {
        Object.assign(todo, updatedInfo);
        console.log(`Todo: '${todo.title}' has been updated.`);
      } else {
        console.log('Todo ID not found');
      }
    },

    getTodo(todoId) {
      let todo = todos.find(({id}) => id === todoId);
      let copy = {...todo};
      copy.__proto__ = Todo.prototype;
      return copy;
    },

    todos() {
      let stringifiedCopy = JSON.stringify(todos);
      let copy = JSON.parse(stringifiedCopy);
      copy.forEach(todo => todo.__proto__ = Todo.prototype);
      return copy;
    },
  };
}();

const todoManager = {
  allTodos() {
    return todoList.todos();
  },

  completedTodos() {
    let completedTodos = todoList.todos().filter(todo => todo.completed);

    return completedTodos;
  },

  todosForDate(month, year) {
    return todoList.todos().filter(todo => {
      return todo.isWithinMonthYear(month, year);
    });
  },

  completedTodosForDate(month, year) {
    let completedTodos = this.todosForDate(month, year)
                             .filter(todo => todo.completed);

    return completedTodos;
  },
};

module.exports = {
  Todo,
  todoList,
  todoManager,
}