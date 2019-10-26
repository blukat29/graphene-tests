/* Minimal Node.js HTTP server without 3rd party packages.
 *
 * Usage: ./http_server.js [<port>]
 */

var http = require('http');
var process = require('process');

var host = '127.0.0.1';
var port = parseInt(process.argv[2]) || '9000';
console.log(`Listening on ${host}:${port}`);

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type' : 'text/plain'});
  response.write('Hello world!\n');
  response.end();
}).listen(port, host)
