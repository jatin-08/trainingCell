var http = require('http');

http.createServer(function (req, res){
res.writeHead(200,{'Content-Type':'text/html'});
res.end('Hello from Jatin Yadav!');
}).listen(3003);