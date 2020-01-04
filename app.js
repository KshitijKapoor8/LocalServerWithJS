var http = require('http');

var server = http.createServer(function(req , res) {
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.end('loves contributing to ScoreLab.');
} );

server.listen(8080, '127.0.0.1');
console.log('Listening to port 8080');
