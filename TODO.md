----- TODO -----

Redux:
State persistance:
Make states persistant. Either locally, server-side, or both. Preferably both,
so that refreshes are possible, but also to fetch saved states for users.

State architecture:
Figure out a good architecture for states. What values should go where,
what states do we need, what info should be stored?

Selectors:
Look at selectors (between reducers and React components). Easily testable,
same code to access the same data from different modules, cleaner code,
easier for others to understand the code.



React:
UI:
UI needs an overhaul from somebody who knows what the f*ck they're doing.
Colors, fonts, styling and icons needs improvement.

Frontend:
Datahandler is needed. Redux is a sort of datahandler, but we need one for
more specific data (later to be fetched from database).
What data should it handle? How do we store it locally? Where do we fetch it from?

Backend:
Server-side application needed. Not important at the moment, but a general idea
of how can be beneficial. Grab and send data to the frontend application.
What data do we need? How should the data be sent? How is it stored?



General:
Licenses:
Check licenses. Might not be able to use vis.js amongst others...
Does using React and Redux make us have to give up code?
What about libraries?

Documentation:
Start documenting, or wait until more of the architecture is established?

Errorhandling:
Start implementing errorhandling from the beginning. Will be useful further on.

Testing:
Check if testing needs to be implemented early, or if this can be done later.


Architecture:
Improve folder structure:
The folder-structure isn't very scalable. Improve it asap so it's clear when we
start building the application.
Make parents smart and children dumb. Right now there's almost no children,
this is a bad habit. Make a folder structure for handling of parent/children better.
