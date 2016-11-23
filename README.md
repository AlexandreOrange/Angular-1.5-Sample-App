# Angular-1.5-Sample-App

This is a simple client-side app using the Github API to list the repositories of a given user
This sample app is based on a modular component-oriented architecture, which keeps things maintainable and predictable. Each module in an Angular app is a module component. A module component is the root definition for that module that encapsulates the logic, templates, styles, routing and child components in the same folder.


## Features

#### ES6
Thanks to Babel, we can code in ES6 and prepare for the future.

#### Style
PostCSS and CSSnext are used instead of SASS in order to be more compatible in the future with the new properties and style only with the standard CSS language.

#### Testing
Karma and Jasmine coupled with angular-mock

#### Module Bundler
Webpack is enough for our needs: a development server with hot-reload, numerous loaders(Babel, PostCSS, ...) to process our source files and concatenation/minification of these files for production.


## Quick start

1. Clone this repo using `git clone https://github.com/AlexandreOrange/Angular-1.5-Sample-App.git`
2. Run `npm install` to install dependencies.
3. Run `npm run build` to create the production folder.
4. Run `node server.js` to start the Express server.
5. You can now see the example app at `http://localhost:3000`
