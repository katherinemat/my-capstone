As of 8/4, not 120 objects put into psql database. not sure if http request actually is returning another number or if something is happening when transferring from json to psql db. try to run in local host in dev and prod environments to test

Specs:
1. Connect to API
2. Have application pull from socrata once in app.component
3. Create objects with data pulled from API
4. Make simple graph with d3
- Add labels to chart
- Convert simple graph into svg to accommodate shapes and screen resizes
- Put each graph into its own component
- Move data returned by Socrata into psql database (to limit API calls so that don't query Socrata every time page loads)

- Check for updates to socrata data everyday at a certain time and if the info has changed, update psql database
- Delete superfluous components and code
- Actually brainstorm what graphs would be useful in this dataset
- Handle objects that have things like age "unknown"
- In bar component, change form input type date to take dynamically updated information from database (SELECT MIN(date) FROM officer_involved_shootings)
- Move databaseColumns in pie-chart component to service (separation of logic)


#Quirks specific to my project
1. styles for d3 graphs must be inside global styles.css, instead of inside each component's .css file. This is because d3 dynamically creates HTML and Angular doesn't apply component-specific styles because it doesn't sense the changes that d3 makes to the dom

- can't import service into another service without doing something weird to app.module
- In order to call service from component that executes axios get request, in component, need to use .then() and need to return entire axios get request
- I save returned information from socrata to psql database in order to perform queries to get data more complicated than just a list of objects, such as count, max, min, sort, etc.
- ng2-charts can't update labels and data at the same time. Compensate with setTimeout

What if I use the officer shooting table in seattle open data and then cross reference the description provided with an interpretation by watson. How many negative words used? maybe beneficial because want to keep description neutral? How have descriptions changed over time? do they get longer? do they include more detail?

------------------------------------------------------------------------
Notes on psql:
-1st thing to do is in terminal, type 'postgres' to start the psql server. Then, in another terminal tab, type 'psql postgres' and '\q' to switch in and out of psql command line. To go into specific database, type 'psql db-name'.

*In order to test api calls to my server, need to host this application with nodemon on localhost:3000 because angular doesn't grab the backend (npm start). Make sure to ng build application first, so that typescript compiles and all the build files go into the right place

***Role: katherinematthews, normal password; production, password: production

------------------------------------------------------------------------

Notes on knex:
- Migrations are finicky. Always just rollback migrations after they happen so that knex_migrations table doesn't hold onto migration files that no longer are pertinent.
- knexfile.js establishes connection to database.

------------------------------------------------------------------------
Notes on d3:
- d3.selectAll("div").data(letters, name);
the first argument is the variable containing all the information we want to plug in as data (in this case, an array of letter objects). the second argument is a key function that declares a property other than the index position as the key to use when matching data pieces with dom elements. (in this example, key function: "function name(d) {
  return d.name;
  }")
the key function is called for each existing element and for each piece of data
- update, exit, and enter are all things that can happen when you join data to elements. update is if the data key matches an existing element. exit is if old elements have keys that no longer match any data. enter is for new pieces of data that don't find an element with a matching key. Placeholder dom elements are eventually replaced by correct elements by enter.select. Critical to use selection.selectAll prior to data join because it establishes parent node for entering elements
- enter.append replaces null elements in update selection with newly-created elements from the enter selection.
- scale = d3.scale.linear().domain([0, 100]).range([0, 1]); .domain represents the spectrum of possible inputs and .range represents the spectrum of possible outputs. numbers within domain will map to numbers within range
- There are a bunch of different kinds of scales. Time, linear, and bucket might be useful to me
