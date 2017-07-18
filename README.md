Specs:
1. Connect to API
2. Have application pull from socrata once in app.component
3. Create objects with data pulled from API
4. Show all objects on main page
5. Create filter to only show news stories from selected sources
6. Style sidebar so that overlaps with stories instead of pushing them to the side
7. Pull story objects from database on page load
8. Add authorization so that users can sign in and their info will be added to user table
9.


#Quirks specific to my project
1. styles for d3 graphs must be inside global styles.css, instead of inside each component's .css file. This is because d3 dynamically creates HTML and Angular doesn't apply component-specific styles because it doesn't sense the changes that d3 makes to the dom

*In order to test api calls to my server, need to host this application with nodemon on localhost:3000 because angular doesn't grab the backend (npm start). Make sure to ng build application first, so that typescript compiles and all the build files go into the right place

**In terminal, type 'postgres' to start the psql server. Then, in another terminal tab, type 'psql postgres' and '\q' to switch in and out of psql command line

***Role: katherinematthews, normal password; production, password: production

- can't import service into another service without doing something weird to app.module
- In order to call service from component that executes axios get request, in component, need to use .then() and need to return entire axios get request

What if I use the officer shooting table in seattle open data and then cross reference the description provided with an interpretation by watson. How many negative words used? maybe beneficial because want to keep description neutral? How have descriptions changed over time? do they get longer? do they include more detail?

------------------------------------------------------------------------
Notes on d3:
- d3.selectAll("div").data(letters, name);
the first argument is the variable containing all the information we want to plug in as data (in this case, an array of letter objects). the second argument is a key function that declares a property other than the index position as the key to use when matching data pieces with dom elements. (in this example, key function: "function name(d) {
  return d.name;
  }")
the key function is called for each existing element and for each piece of data
- update, exit, and enter are all things that can happen when you join data to elements. update is if the data key matches an existing element. exit is if old elements have keys that no longer match any data. enter is for new pieces of data that don't find an element with a matching key. Placeholder dom elements are eventually replaced by correct elements by enter.select. Critical to use selection.selectAll prior to data join because it establishes parent node for entering elements
- enter.append replaces null elements in update selection with newly-created elements from the enter selection.  
