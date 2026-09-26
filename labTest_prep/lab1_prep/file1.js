// main priority is to connect to http and output something on the local host 

const http = require('http');


http.createServer((request, response) => {

    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("Hello world - server is uppp!!!");
}).listen(8088 , ()=>{
console.log("Server is running on http://localhost:8088");
});