var http = require('http');
var process = require('process');

var port = process.argv[2] || '9000';
console.log('Using port: ' + port);
port = parseInt(port);

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type' : 'text/plain'});
  response.write('hello\n');
  response.end();
}).listen(port, '127.0.0.1');
