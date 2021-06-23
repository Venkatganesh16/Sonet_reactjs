const http = require('http');
const url = require('url');
let fs = require('fs');
const { report } = require('process');

let server = http.createServer(
    function (request, response) {

        let path = url.parse(request.url).pathname;

        if (path == '/') {

            response.writeHead(200, {
                'Content-type': 'text/plain'
            });
            response.write(" This is node server running..hello! from SONET");
            response.end();
        }
        else {
            fs.readFile(__dirname + path, function (error, data) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                }
                else {
                    response.writeHead(200, {
                        'Content-type': 'text/html'
                    });
                    response.write(data);
                    response.end();
                }
            })

        }
        console.log("Server started!")
    }



);


server.listen(3000);