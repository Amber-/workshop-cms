var http = require ('http');
var fs=require('fs');

var message;


function handler (request, response) {
  var endpoint = request.url;
  console.log(endpoint);

  var method = request.method;
  console.log(method);

  if (endpoint==='/')
  {
    message="I am so happy to be part of Node Girls Workshop!";
    response.writeHead(200, {"Content-Type": "text/html"})

    /*response.write(message); //response body
    response.end(); //finish response*/

    fs.readFile(
      __dirname + '/public/index.html',
      function(error, file)
      {
        if (error) {
              console.log("nope nothing here to see");
          console.log(error);
          return;
        }

        response.end(file);
      }
    );
  }
  else if (endpoint==='/nodegirls')
  {
    message="Node Girls are cool"
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write(message); //response body
    response.end(); //finish response
  }
  else
  {
    message="no chocolate for you today"
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write(message);
    response.end();
  }

}


var server =http.createServer(handler);

server.listen(3000, function () {

  console.log("Server is listening on port 3000. Rady to accept requests!")
});
