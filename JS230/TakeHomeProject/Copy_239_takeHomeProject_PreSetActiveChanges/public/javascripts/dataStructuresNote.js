  /*
  partial and key order:
  // Side bar
  > all_todos_template // count for All Todos Nav Bar
  > all_list_template // list of all todos, grouped by month
  > completed_todos_template // count for Completed Todos
  > completed_list_template // list of completed todos grouped by month
  // Items
  // --> Header
       > title_template //
  // --> Main
       > list_template

  main page object {
    todos: {length: 5}, // all_todos_template
    todos_by_date: [{'10/24': array of todos or object with 'lenght' property}] // all_list_template (key is the string date)
    done: {length: 5} // completed_todos_template
    done_todos_by_data: [{'10/24': [] || {length: } }], // completed_list_template


    current_section: {title: "Title of Page", data: 5} // title_template

    // list_template calls each on partial
    selected: [ // array of selected groups todo items
    {completed: true, id: 1, title: 'name of todo', due_date: 'mm/yy'}, // list item
    
    ]
}

  */



function init() {
let data = {
     todos: {length: 5},
     todos_by_date: {'10/24': [1, 2, 3], '10/25': {length: 6}},
     done: {length: 6},
     done_todos_by_date: {'10/24': [1, 2, 3], '10/25': {length: 6}},
     current_section: {title: 'Title of Page', data: 6},
     selected: [
     {completed: true, id: 1, title: 'Item 1', due_date: '10/24'},
     {completed: false, id: 2, title: 'Item 2', due_date: '10/26'},
     ]
}

this.UpdatePage({});
}
