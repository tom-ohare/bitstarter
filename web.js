var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFileSync('./index.html', String);
  response.send(fs.readFileSync('./index.html', String));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
