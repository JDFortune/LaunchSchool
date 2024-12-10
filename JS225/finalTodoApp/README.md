# Assumptions
## Protecting Data Integrity
1. Because we need to protect the data integrity of the object by returning copies of objects through the todoList interface, I needed to alter the prototype of the copies so that they inherit the `isWithinMonthYear` method.
  - To do this, whenever a copy is made, I set it's `__proto__` property to the `Todo.prototype` object.
2. Because the list of todos can't be accessed directly outside of the interface defined for the `todoList` object, I created another method on `todoList` for returning a deep copy of the todos. This allows the todoManager object to be able to access and manipulate the copy for displaying the array of all todos or filtered todos by date or completion status. I called this method `todos()` to make it more closely resemble the name of the `todos` array.
  - This felt like somewhat of a cheat, because the requirements for `todoList` didn't explicitly state that it has a method to return all of the todos, but part of data integrity is that it makes accessing private data impossible without exposing an interface to do so. I'm not sure if there would have been a better way, but it does kind of make going through `todoManager.allTodos()` kind of redundant.
  - Additionally, in the project requirements, this line: "The `todoList` maintains integrity of the collection by returning only a **copy of the collection anytime** that a method returns all or a subset of it", I thought implied that it could/should be added.
3. I assumed all `Todo` objects will be created through the `todoList.add` method, so I only validate the inputs in that method. You could technically create `Todo` object directly using the constructor, but any excluded properties will be set to undefined and any additional properties will be excluded. It would work without raising an error, but the output wouldn't be the intended result.

## Required Properties
1. Required properties:
  - while all properties need a valid number `id`, boolean for completed, and strings for title, description, month, and year, I designed the todoList for a developer to be able to enter todo items with floating deadlines (aka empty strings for month and year) and empty strings for description (if the todos are self explanatory).
  - I do require titles for a todo to be at least 3 characters in length (e.g. a todo 'Run' would be the shortest valid title for a Todo object).
2. Assumption: The month and year refer to a due date and not the date that the todo is entered. (This is why they can be empty).
3. While `isWithinMonthYear` can return if an object whose month and year match the input, we extended the code to allow for falsy inputs of month or year, to retrieve specific objects that match either the valid month or valid year input.

## Data Structures
1. Because `todoList` is written in camelCase and not PascalCase, I assumed that it is a single object and not a factory for creating separate lists. This means that we cannot create separate instances of `todoList` objects and that `todoList` and `todoManager` are their own objects which can retrieve and alter the state of a single Todo List and neither are responsible for creating separate instances of a type.
  - Adhering to this structure in my tests, I reset the state of the todoList between each test case by deleting all existing todoItems, preventing carryover todo objects being left in our list.
2. Because unique ID's are dependent on the existing todo IDs in the `todoList`, I generate the ID from within the `add` method, using a private method defined for the `todoList` object returned by the IIFE.

## Creating and Updating a Todo Item
1. You can only alter existing properties on an todo item (you can't create a any crazy new properties for a todo). You also can't update the ID, since it needs to be a unique value, determined by the `todoList`.
2. For updating a todo item. I assumed that the inputs would be two arguments:
  - a number for the id of the todo
  - an object with the properties and values that you want to update.
3. Both arguments are required for the update function to work:
  - If an updatedInfo argument is not supplied or is given as a non-object value, the method logs the error and returns.
  - The updateInfo can only include existing keys on the Todo Object (expect for ID, which can't be updated).
4. You can create a new todo, with the `add` method, either by passing in a single object for a todo, or an array of todos as a todoSet.
  - the code will parse the iterate through the Array of args and determine the validity of each todo, on its own.
  - valid todos are added to the list; invalid todos are ommitted
  - if any invalid todos are included in a set, a message is logged stating one or more todos where not added.

## Validation
1. All inputs are validated for a todo. Because the validation was lengthy, but doesn't require any specific context to execute properly, I moved it to it's own module and require it at the top of the main file.
  - This dramatically cleaned up the `todoList` object that originally housed all of the validations as private methods.
2. I kept all of the console logs for successful and unsuccessful code executions. I mention below, but if you want to run the test without seeing all of the logs, use `jest --silent`.

## Returns and Logs
1. Since the Todo Manager's method say they return `todo` objects. I assumed that it would need to be a copied array of the objects that we return and not an iteration and stylized logging of the different `todo` objects' state.
2. Although this project doesn't require user input, I left the console.logs to indicate to a developer when input is not the expected input, and info for why that is the case.


# Other Concerns:
1. Because we're creating new `todo` objects from basic object literals and wanting to preserve data integrity, I assumed that we never wanted to have access to any `todo` object directly, so I never return a `todo`, instead returning a copy, and all of the methods that interact with a `todo` object through`todoList`, use the `id` property to find the specific `todo`.
  - there is a private method for returning the true `todo` object, which I use only for from within the body of the interface methods, for actions like deleting and updating an existing `todo`.
2. Because we input the `month` and `year` of the object as string numbers, I assumed that's how we want to retrieve them too. I didn't add a reference of month names for inputing the `month` argument as the month name to the `isWithinMonthYear` method. I could have but wasn't sure, based on the criteria, if that's what was expected, so erred on the side of caution and left the inputs and retrieval means the same.

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
  - You can also include the `--silent` flag as well, to see the coverage and not include all of the console logs taking place, throughout the test.

## Last Comments
1. the data used to test is in a separate file `./assets/appData.js`. I wasn't sure if I should add data to execute or if you were planning to add your own test cases.
  - My jest test suite uses the `appData` to test all of the cases.

2. I removed the `package-lock.json` file since it wasn't explicitly stated to include, but left the `package.json`.
  -I hope that wasn't a mistake, but I still have the file if needed.