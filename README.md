# Angular-1.5-Sample-App

This is a simple client-side app using the Github API to list the repositories of a given user.
This sample app is based on a modular component-oriented architecture, which keeps things maintainable and predictable. Each module in an Angular app is a module component. A module component is the root definition for that module that encapsulates the logic, templates, styles, routing and child components in the same folder.
A deployed example is located at this address(better to see on desktop): <a href="https://gitrepos.herokuapp.com/">https://gitrepos.herokuapp.com/</a>


## Features

#### AngularJS 1.5
Heavy use of `.component()` directive and enforced unidirectional data flow to partly implemente Flux.

#### ES6
Thanks to Babel, we can code in ES6 and gain in productivity.
The biggest advantage lies in `import` and `export`:
- We don't care about globals
- We don't care about wrapping our functions inside IIFEs when registering directives/components
- Thanks to ES6 Classes, we use less Angular-ish code because components/directives/controllers are exported as Classes.
Angular is mostly present in module files where we import all our classes.

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
4. Run `npm start` to start the Express server.
5. You can now see the example app at `http://localhost:3000`

## TODO

- Use Redux and/or RxJs for complex state management. We use a pure AngularJS unidirectional data flow for the moment but it won't scale really well.
- Make the website responsive. It only works on desktop for the moment.
- Add an autocomplete component for the search input that will give suggestions of users while the visitor is typing.
- Clean the Webpack config and have different files for development, production and test.
- Write more unit tests for the critical search functionality.
- Write better directives for HTML tags like input or button. We should be able to use the normal tags without writing an additional directive on top of it.
