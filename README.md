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

Next: figure out why on page load stories don't display

*In order to test api calls to my server, need to host this application with nodemon on localhost:3000 because angular doesn't grab the backend (npm start). Make sure to ng build application first, so that typescript compiles and all the build files go into the right place

**In terminal, type 'postgres' to start the psql server. Then, in another terminal tab, type 'psql postgres' and '\q' to switch in and out of psql command line

***Role: katherinematthews, normal password; production, password: production

- can't import service into another service without doing something weird to app.module

What if I use the officer shooting table in seattle open data and then cross reference the description provided with an interpretation by watson. How many negative words used? maybe beneficial because want to keep description neutral? How have descriptions changed over time? do they get longer? do they include more detail?
