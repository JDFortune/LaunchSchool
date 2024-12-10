let valid = {
  todoData(todoData) {
    let keys = Object.keys(todoData);

    return keys.every(key => {
      return this.todoProperty(todoData, key);
    });
  },

  todoProperty(todoData, property) {
    let invalid = !(['title', 
                     'year',
                     'month',
                     'description',
                     'completed'].includes(property));

    if (invalid) return false;

    switch (property) {
      case 'title':
        if (this.validTitle(todoData.title)) return true;
        break;
      case 'month':
        if (this.validMonth(todoData.month)) return true;
        break;
      case 'year':
        if (this.validYear(todoData.year)) return true;
        break;
      case 'description':
        if (this.validDescription(todoData.description)) return true;
        break;
      case 'completed':
        if (typeof todoData.completed === 'boolean') return true;
        break;
    }
  },

  allDataSupplied(todoData) {
    return Object.keys(todoData).length === 4 &&
          ['title', 'month', 'year', 'description'].every(key => {
            return todoData.hasOwnProperty(key);
          });
  },

  validTitle: (title) => typeof title === 'string' && title.length >= 3,

  validMonth(month) {
    return typeof month === 'string' &&
            (month.length === 0 || Number(month).toString() === month) &&
            (Number(month) >= 0 && Number(month) <= 12);
  },

  validYear(year) {
    return typeof year === 'string' &&
            (year.length === 0 || Number(year).toString() === year);
  },

  validDescription: (description) => typeof description === 'string',
}

module.exports = valid;