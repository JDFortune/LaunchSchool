# Assumptions
1. Because we need to protect the data integrity of the object by returning copies of objects through the todoList interface, I needed to alter the prototype of the copies so that they inherit the `isWithinMonthYear` method.
  - To do this, whenever a copy is made, I set it's `__proto__` property to the `Todo.prototype` object.
2. Required properties:
  - while all properties need a valid number `id`, boolean completed, and string title, description, month, and year, I designed the todoList for a developer to be able to enter todo items with floating deadlines (aka empty strings for month and year) and empty strings for description (if the todos are self explanatory).
  - I do require titles for a todo to be at least 3 characters in length (e.g. a todo 'Run' would be the shortest valid title for a Todo object).
3. Assumption: The month and year refer to a due date and not the date that the todo is entered. (This is why they can be empty).
4. Because `todoList` is written in camelCase and not PascalCase, I assumed that it is a single object and not a factory for creating separate lists. This means that we cannot create separate `todoList` objects and that `todoList` and `todoManager` are their own objects which preserve and review the state of a single Todo List and are not responsible for creating separate instances of a type.
  - Adhering to this structure in my tests, I reset the state of the todoList between each test case by deleting all existing todoItems, preventing carryover todo objects being left in our list.
5. While `isWithinMonthYear` can return if an object whose month and year match the input, we extended the code to allow for falsy inputs of month or year, to retrieve specific objects that match either the valid month or valid year input.
6. For updating a todo item. I assumed that the inputs would be a number for the id of the todo, and an object with the properties and values that you want to update.
  - If an updatedInfo argument is not supplied or is given as a non-object value, the method logs the error and returns.
  - Otherwise, you can provide any key/value for the object you want to use to update the Todo with.
    - if the key exists, it will be overwritten.
    - if the key doesn't exist, you will define a new property on the object (this helps add more specific detail for invdividual todo items).
7. For adding a list of Todos as a set, all at once, valid and unique todos will be added, but invalid todos or todos with all of the properties being the same as an existing todo won't be added.
  - you can still add todos with the some of the same values for the different properties (maybe you want two "Go Running" todos), but if all of the values are the same, the duplicate will not be added. 
8. I kept all of the console logs for successful and unsuccessful code executions. I mention below, but if you want to run the test without seeing all of the logs, use `jest --silent`.
9. Because the list of todos can't be accessed directly outside of the interface defined for the todoList object, I created another method on todoList for returning a deep copy of the todos. This allows the todoManager object to be able to access and manipulate the copy for displaying the array of all todos or filtered todos by date or completion status. I called this method `todos()` to make it more closely resemble the name of the array that it returns to the array that it returns.
  - This felt like somewhat of a cheat, because the requirements for todoList didn't explicitly state that it has a method to return all of the todos, but part of data integrity is that it makes accessing private data impossible without defining an interface to handle it, so I hope that's okay. I'm not sure if there would have been a better way, but it does kind of make going through `todoManager.allTodos()` kind of redundant.
  - Additionally, this line: "The `todoList` maintains integrity of the collection by returning only a copy of the collection anytime that a method returns all or a subset of it", I thought implied that it could/should be added.
9. Since the Todo Manager's method say they return `todo` objects. I assumed that it would need to be an (copied) array of the objects that we return and not an iteration and styled logging of the different todo objects' values.
10. Although this project doesn't require user input, I left the console.logs to indicate to a developer when input is not the expected input, and info for why that is the case.
11. Lastly, because unique ID's are dependent on the existing todo IDs in the `todoList`, I generate the ID from within the `add` method, using a private method defined for the `todoList` object returned by the IIFE.

# Other Concerns:
1. Because we're creating new `todo` objects from basic object literals and wanting to preserve data integrity, I assumed that we never wanted to have access to any `todo` object directly, so I never return a `todo`, instead returning a copy, and all of the methods that interact with a `todo` object through`todoList`, use the `id` property to find the specific `todo`.
2. Because we input the month and year of the object are string numbers, I assumed that's how we want to retrieve them too. I didn't add a reference of month names for inputing the month argument as the month name to the `isWithinMonthYear` method. I could have but wasn't sure, based on the criteria, if that's what was expected, so erred on the side of caution and left the inputs and retrieval means the same.
3. Some of my validations get a little long. I wanted to make sure that if we supply an expected property, that the property is true, but also for us to be able to update a todo item with a new property that could be anything, outside of that validation. Because of this, I separated the validation of the data to a method that could be used with initial creation and also with the `update` method, where for `update` could expect any object with a only some of the properties or could add entirely new properties. For the initial creation of a todo object, I specify that the data has to be the correct keys using the `allDataSupplied` private method and that all of the keys are valid, using the private`validTodoData` method. But this separation allowed me to call `validTodoData` in the `update` method, without running into the issues that would arise if we only wanted to update one key or add an entirely new key to the existing `todo` object. (I prohibit a user from changing the `id` property though).

# Set Up for Testing
This project uses the `jest` framework to test updates to the code base.
The package.json that is included already sets the test to 'jest'.

To install `jest` on your computer, do the following:

1. Via command line, type `npm install -g jest` to install the `jest` framework globally.
2. Navigate to your project folder.
3. Add Jest as a dev dependency to the project `npm install --save-dev jest`.

# Running Tests
To test that changes made to the codebase haven't resulted in dependency issues:
run `npm test` from the command line, while in your main project directory.
- can also run with `jest`

## NOTE: All of the Logging for successful inputs and error messages can clutter up jest when it's trying to test that everything is functioning. if you want to run jest without all of the console logs, run the tests with `jest --silent`
 - Running with `jest --silent` will still show failing test cases, but won't clutter your output with explicit logs to the user.

## Test Coverage
To test coverage with `jest` run the command `jest --coverage`

## Last Comments
1. the data used to test is in a separate file `./appData.js` I've imported it at the top of the `todoApp.js` file, in case you need to use it for testing purposes. But wasn't sure if I should add data to execute or if you were planning to add your own test cases. My jest test suite also uses the `appData` to test all of the cases.

2. I removed the `package-lock.json` file since it wasn't explicitly stated to include. I hope that wasn't a mistake, but I still have the file if needed.