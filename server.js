// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('dist'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});


// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Load http://localhost:' + listener.address().port + '/ in a browser to see the output.');
});