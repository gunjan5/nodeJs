var http = require ('http');
var myServer = http.createServer( function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<b>Hello</b> <h1>WORLD!!!</h1>");
  response.end();
});

myServer.listen(3000);
