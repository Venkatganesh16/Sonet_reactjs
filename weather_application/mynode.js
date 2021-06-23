const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(
    (req, res) => {
        res.statusCode = 200;
        res.setHeader('content-type','text/plain');
        res.end('hello world from node! \n');
    }
);
server.listen(port, hostname,() => {
    console.log(`Node server is running at http:${port}` );
});