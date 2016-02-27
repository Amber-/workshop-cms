var http = require ('http');

var message = "I am so happy to be part of Node Girls Workshop!"

function handler (requests, response) {
  response.writeHead(200, {"Content-Type": "text/html"})
  response.write(message); //response body
  response.end(); //finish response
}


var server =http.createServer(handler);

server.listen(3000, function () {

  console.log("Server is listening on port 3000. Rady to accept requests!")
});
