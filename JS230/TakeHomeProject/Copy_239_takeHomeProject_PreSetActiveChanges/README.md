# TODO LIST FRONT-END

# Overall
This was more challenging than I originally thought going in. Seeing "Todo List" as my chosen project, I felt very confident at first. After a couple hours of planning out the functionality and playing around, I realized there were a lot more moving pieces than I'd originally thought. Elements that, with the way I'd chosen to design it, I might need access to, but that the browser had already deleted... Formatting the data to work with the given handlebars templates... Parsing and understanding what all was happening in the handlebars templates...

For this project I made a few changes throughout in my implementation and design choices.

# Decisions
  ## 1. MVC
  This may have been the intended structure to begin with, but I divide the different tasks of this program into a Model-View-Controller layout. This program handles making changes to the todos, via the browser, communicating the changes to the server, and then displaying the updated state back in the browser.

  ## 2. Static Page Layout with Dynamic Sections
  I chose to use the given HTML and CSS for, since it wasn't the main criteria for grading and I figured I could easily spend that majority of the time, trying to make it look good. The HTML body is empty gets added to via Handlebars templates, once the program runs.

  Initially, I was using the main template to reconstruct the entire page, with each change, but realized, further on, that most of the dynamic elements were confined to a few areas, nested inside of a parent element.

  I decided to pivot my original plan to reload the HTML for the entire page, and instead saved the parent elements of the dynamic content to properties on the View object.
  Now when pages are updated, instead of realoading all new elements I just reload the different data within their respective sections, by inserting them into the parent element.

  **This has a couple benefits:**
    - The original static elements stay accessible in my View Object and I don't have to re-find and set new elements to properties, like I would if it was a full page render.
    - I can use those elements to register Event Listeners instead of having to create new Event Listeners with each render. The parent elements are able to then delegate the events to the target objects.

  ## 3. Event Handlers
  I use the View Object to create the Event Listener methods, where they can easily access the Static Elements and the Controller Object calls the bind methods and supplies the event handler methods. This is because the Controller has access to both the view object and the model object for performing AJAX and updating the browser through the view.

  One area to point out is that this app has a lot of click events registered on different objects. It's most noticeable for the Nav bar where there are four separate click event listeners. I chose this to simplify the logic for rendering the main page content with the Header and Todos Table. Because the different tabs, All Todos, All Todos Grouped By Date, Completed Todos, Completed Todos grouped by date, are all nested in different branches, are different data types and in some cases, share the sime `data-title` value. Rather than add a lot of logic to a single value to parse

# Concerns
  ## 1. There's still a lot of reloading.
  Anytime that a todo item is updated: if the date changes, if it's deleted, if one gets added, the server has to update the database and relay the new state back to the application to update the browser. Rather than have to worry about figuring out which specific areas are changed (if a group has an additional todo added to a month/year or the count of "Completed" goes up when we check a todo item complete). I just take the new data and reload all of the sections.

  I'm not sure if this would scale well in a production environment. There is a lot of AJAX and processing of data that's happening with each change to a todo. The todo item changes. A POST request is made to the server. The request comes back as an unformatted object of todos. The todos have to be organized into their respective groups and sorted by due date and completion status, then the new templates are made and added to the DOM tree. Or maybe it's not a lot. It seems like a lot, but it happens pretty fast testing. Still thougth it was worth mentioning.

  ## 2. Once Todo data is set via the API, it can't be reset to an empty value
  This is actually one that I struggled with and spent the better part of 5 hours looking into and trying to find a solution for, but after looking at the documentation and trying every potential nullish value I could find (including `__DELETE__`, and trying to pass a string as SQL injection), it seems this API doesn't allow you to remove a value that's already been set. I can create a todo without initially adding any date and it will be sent and set to an empty string and the resulting todo with have "No Due Date", but once a date it set, it can't be changed back to empty. You can update it to a new date and update any other inputs, but sending an empty string for an input value via `PUT` is registered as an unchanged value for the todo's property. The Launch School test project does not seem to have the same limitation, but I eventually had to 