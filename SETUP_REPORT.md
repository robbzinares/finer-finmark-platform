Platform Setup Documentation
What Was Set Up and Why
The development of the project started and was built on the macOS with VSCode, Node.js, Express.js and React. It was aimed at creating a prototype of the potential functioning of the Finer Finmark Platform, the first iteration of which should be a login system of the user.

Key components:

Project Repository: Hosted on GitHub at finer-finmark-platform

Folder Structure:

client/ – React frontend

server/ – Node.js and Express backend

Installed Packages:

Frontend: react, axios, react-router-dom

Backend: express, cors, dotenv, nodemon

Configuration Files:

.env for environment variables

package.json for dependency management

Initial Feature Implemented:

A landing page that links the front and back-end business.

This was based on its flexibility, developer familiarity as well as possible modularity of future features.

Challenges Encountered
It took me time to be able to set up Node.js and npm on macOS

Git errors occurred when the repo was pushed because of a wrong remote URL and branch

Port inconsistencies between React frontend and Express backend means that there is a need to add a proxy setting in the frontend

The lack of appearance of README.md on GitHub repository was the initial reason because it was not committed nor was pushed

What Worked
Project structure for client and server is in place and functional

React login form collects input and sends POST requests using Axios

Express backend handles requests and returns responses

GitHub repository now reflects current project structure

What Needs Refinement
No database integration: it is logged in with hardcoded credentials

Neither frontend-side checking nor error handling

Isolation of backend route and controller remain to be done

The deployment of application does not involve application and runs locally