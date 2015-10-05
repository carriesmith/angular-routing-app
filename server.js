// load packages
var express = require('express');
var app = express();
var path = require('path');

// set the public folder to serve public assets
// When our client requests a file (CSS file, image, or JS) Node will 
app.use(express.static(__dirname + '/public'));

// set up route to the index.html file
// whenever a request comes into the server (using wildcard '*' method)
// send the user the index.html file which will contain all Angular/HTML/CSS
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

// start server on port 8080 (http://localhost:8080)
app.listen(8080);
console.log('Magic happens on port 8080.');