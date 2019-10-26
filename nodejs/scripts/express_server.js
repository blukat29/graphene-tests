/* Node.js HTTP server based on express.js framework.
 *
 * Usage: ./express_server.js [<port>]
 */

var process = require('process');
var express = require('express');

var host = '127.0.0.1';
var port = parseInt(process.argv[2]) || '9000';

var app = express();

app.get('/', function (req, res) {
  res.send('Hello world!\n');
});

app.listen(port, host, function () {
  console.log(`Listening on ${host}:${port}`);
});
