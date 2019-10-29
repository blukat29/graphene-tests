var http = require('http');
var process = require('process');
var EC = require('elliptic').ec;

var port = process.argv[2] || '9000';
port = parseInt(port);
console.log('Using port:', port);

var ec = new EC('secp256k1');
var key = ec.genKeyPair();
var data = Buffer.from(
  '00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff', 'hex');

console.log('Ready to create server!');

http.createServer(function (request, response) {
  //console.log('Got request!');
  var sig = key.sign(data);
  response.writeHead(200, {'Content-Type' : 'text/plain'});
  response.write('ECDSA sign test\n');
  response.write(JSON.stringify(sig) + '\n');
  response.end();
}).listen(port, '127.0.0.1');
