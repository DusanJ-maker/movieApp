# MovieWebsite

Here I will introduce you to my project - "movieWebsite"

## How I worked on this project

- My work on this project was based on a task. After I've done React.js courses, my mentor asked me to make (clone) YTSMOVIES site (https://yts.mx/),
and he provided me API for that.

- Working on this site was based on my previous knowledge that I acquired on my learning journey...

- I applied many of React.js concepts in the process of making this project.

- The design is in pure CSS (mainly flexbox+grid for layout).

- Components and logic are made by myself.

- In this project I used some packages: Redux Toolkit, RTK Query, React Router, Redux Persist...

### Why this way?

- For state management I wanted to use redux... I know some will say it is "overkill", but I tried to practice this way. I know some more other state management solutions (context concept) would do the job, but as I said, it was mostly for practicing purposes and "in good will" to catch modern industry standards.
- React Router implementation is pretty simple with "protected routes" included.
- For component styling I used CSS modules.
- For persisting the state (logged in user for example) I used "Redux Persist", because while reading documentation I figured out it is not good to use "local storage" in pure functions (redux reducer).
- In app, there are 3 users with 3 separate roles: "user", "admin" and "guest". They have some permissions based on their role on website (like adding movie).
- There is simple "login" form with some logic behind to handle users auth.
- API used for making this is provided by YTS: https://yts.mx/api, but I couldn't do any mutations, so for some cases I did it on local (adding movies and comments), and merged data from API call and form inputs so they could be displayed on the UI.
- I implemented Modals for displaying movie screenshots, and for adding new movie...
- Components that didn't use global state (redux), had their own local state (useState), like for displaying Modals.
- For responsive (desktop, tablet and mobile) I used media queries in CSS.

### Display parts of application:
- Desktop responsive design: https://ibb.co/album/QFrhhJ
- Tablet responsive design: https://ibb.co/album/wyH85S
- Phone responsive design: https://ibb.co/album/1Ghjv0

### Some code for different logic parts of application:
- Redux: https://i.ibb.co/gVqSSMp/store.png
- RTK Query: https://i.ibb.co/myjCCR3/rtk-Query.png
- Auth slice: https://i.ibb.co/wzB6nX6/login-Auth.png
- Router: https://i.ibb.co/Ks8bK7V/router.png
- Login auth logic: https://i.ibb.co/wzB6nX6/login-Auth.png



Thanks for reading. 
Dusan


