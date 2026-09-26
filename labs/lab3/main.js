/*
create multiple server paths to access 
/users
/userslist
/name

*/

const users = require('./data.js');

let http = require("http");
let fs = require("fs");
let users = require("./data.js");

const port = 8088;

// create the server and the multiple paths below 

http.createServer((request, response) =>{

    if(request.url == "/"){
        response.write("<h1> Node.js Web Server at the root </h1>");
        response.write("<p> Welcome to the root path at the server </p>");

        response.end();
     }
     if(request.url == "/users"){
        // convert from JSON obj to JSON string 
        let data = JSON.stringify(users);
        response.write(data);
        response.end()
     }

     if(request.url == "/name" ){
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("<article> Karthik Madarapu </article>");
        response.end();
     }

     if(request.url =="/userList"){

        fs.readFile(__dirname + "/employees.json", "utf-8", (error,data) =>{

            response.write(data);
            response.end();

        });
     }

});


Server.listen(PORT)
console.log("Server started at port number : {PORT}");
