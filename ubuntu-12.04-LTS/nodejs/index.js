var express = require('express');

// PORT NUMBER
var PORT = 80;

// INITIATE NODEJS APP
var app = express();
app.get('/', function (req, res) {
  res.send('Hello world to Nodejs container\n');
});

app.listen(PORT);
console.log('Starting server on http://localhost:' + PORT);
