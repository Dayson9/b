var http = require('http');

// Creating a server

http.createServer(function (req, res) {

// Write response as Html(text)

res.writeHead(200, {'Content-Type': 'text/html'});

// Writing static text

res.end('<script>alert("hello")</script>');

// Server listening on port number 4200

}).listen(4200);
