# TODO LIST FRONT-END
# Decisions
  ## 1. MVC Design Pattern
  This may have been the intended structure to begin with, but I divide the different tasks of this program into a Model-View-Controller layout. This program handles making changes to the todos, via the browser, communicating the changes to the server, and then displaying the updated state back in the browser, with the `View` managing the browser updates, `Model` managing the API interactions, and `Controller` connecting the two.

  ## 2. Static Page Layout with Dynamic Sections
  I chose to use the given HTML and CSS for this project, since it wasn't the main criteria for grading and I figured I could easily spend that majority of the allotted time just trying to make the application look good. The HTML body is empty, to start, and gets added to via Handlebars templates, once the program runs.

  Initially, I was using the main template to reconstruct the entire page, with each change, but realized, further on, that most of the dynamic elements were confined to a few areas, nested inside of a parent element.

  I decided to pivot my original plan to reload the HTML for the entire page, and instead saved the parent elements of the dynamic content to properties on the `View` object.
  Now when pages are updated, instead of realoading all new elements I just reload the different data within their respective sections, by inserting them into the parent element.

  **This has a couple benefits:**
    1. The original static elements stay accessible to my `View` Object and I don't have to re-find and set new elements to its properties, as I would if it was a full page render.
    2. I can use those parent elements to register Event Listeners instead of having to create new Event Listeners with each render. The parent elements are able to then delegate the events to the target objects.

  ## 3. Event Handlers
  I use the `View` Object to create the Event Listener methods, where they can easily access the static elements for the DOM. The `Controller` object calls the bind methods and supplies the event handler methods. This is because the Controller has access to both the `View` object and the `Model` object for performing AJAX and updating the browser through the view.

  **Updated. This comment below is no longer true. I was able to find a simpler solution with less repetitive code.**
  <!-- One area to point out is that this app has a lot of 'click' events registered on different objects. Although that's maybe not surprising since, almost all interactions in this app are based in clicks. 
  
  The event listeners are most noticeable for the Nav bar where there are four separate click event listeners use to set the appropriate tab as active and render the todo's in the main area. I chose this to simplify the logic for rendering the main page content with the Header and Todos Table.
  
  Because the different tabs (All Todos, All Todos Grouped By Date, Completed Todos, Completed Todos grouped by date) are all nested in different branches inside the DOM tree and are different data types (in some cases, sharing the same `data-title` value), rather than add a lot of logic to a single eventHandler to parse the data and perform the approriate actions, added 3 additional event listeners to the application to handle each group individually.

  I felt like it was a good tradeoff and, while it might look a little more repetative, which is somewhat undesirable, I think it looks cleaner  -->

  During refactoring I was able to reduce the 4 nav bar click event listeners to one click that was able to be handled without too much flow control, inside the Handler. As far as I can tell, it's working the same as before, when I had a separate click event listener for each of the 4 tab sections.

  ## 3. Set All Todos to Active, when the last todo item is deleted in a group.
  I decided that if all of the todo items for a month/year are deleted and the tab no longer exists in the Nav Bar, it didn't make sense to have the main page stay rendered on that tab. When a month/year group no longer exists on the Nav Bar, the app defaults back to the "All Todos" tab.

  **NOTE: The Launch School Provided App does not set All Todos to active when the month/year group is empty. I feel like that's a bug so I made it default to the All Todos tab as an existing tab, but in case the former is how the code is supposed to be designed, lines 98-101 of the `view.js` file include a commented out `else` clause that would handle that response accordingly.**

  ## 4. Setting A Tab as Active (explicitly and implicitly)
  This goes in line with my former decision. To address the different scenarios for which a Tab could become active, by clicking a tab, or deleting todos and updating due dates that might leave a month/year group empty, I created one method `setActive` that uses the `data-title` attribute value of tab and a boolean to indicate if we're accessing the "completed" or "all" todos sections. The method sets the appropriate tab to active and renders the correct data, for the Navclick Handlers and also manages this functionality when a user input causes these changes less explicitly.

# Concerns
  ## 1. There's still a lot of reloading.
  Anytime that a todo item is updated: if the date changes, if it's deleted, if one gets added, or it's marked complete, the server has to update the database and relay the new state back to the application to update the browser. Rather than have to worry about figuring out which specific areas are changed, I just take the new data and reload all of the sections. In most cases with a change, each the Nav and Main areas need to reflect the change somewhere, anyway.

  I'm not sure if this would scale well in a production environment. It feels like it's a lot of AJAX and processing of data that's happening with each change to a todo, but maybe it's not, since it's based on user input and not automating mutliple requests per second.

  ## 2. Once Todo data is created via the API, a non-empty value can't be reset to an empty value
  This one was frustrating and I'm not sure that my solution isn't just a bandaid. As far as I can tell, once a non-empty value is set for a todo, there is no way to reset it to an empty value. Sending the data as an empty string is ignored in a `PUT` request to the API, `null` crashes the server, '__DELETE__' doesn't work, SQL injection (I maybe just don't understand well enough to properly use), and any other values (including `"NULL"`) just came back as a bad request.
  
  I spent several hours researching and trying to figure out if I was blanking on some fundamental feature of `PUT` and API's, but nothing I looked up and searched for had any indication other than "some API's don't allow for the resetting of data in this way" and the API doesn't handle `PATCH` requests either, from what I can tell.
  
  Ultimately, after looking at the database schema and seeing these columns where all `varchar` and the API docs indicating there were a required number of characters for specific columns, I decided to "fudge" it and use my FormData parsing method to add the designated number of empty spaces to the `day`, `month`, `year`, and `description` inputs, when the fields are left empty, and use that to indicate the field doesn't have a value. When I fetch the data and format it, I trim the spaces back to an empty string so that the method can identify them as having "No Due Date". Hopefully this is an acceptable solution, but it felt clunky that I wasn't able to reset a value through the `PUT` request.

  That's everything I can think of. This is my project. There are many like it, but this one is mine!
  Thanks for taking the time to look over it.