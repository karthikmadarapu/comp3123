/*
create multiple server paths to access 
/users
/userslist
/name

*/

let http = require("http");
let fs = require("fs");
let users = require("./data.js");

const port = 8088;

// create the server and the multiple paths below 

const server = http.createServer((request, response) =>{

    if(request.url == "/"){
        response.write("<h1> Node.js Web Server at the root </h1>");
        response.write("<p> Welcome to the root path at the server </p>");

        response.end();
     }
     if(request.url == "/users"){
        // convert from JSON obj to JSON string 
        let data = JSON.stringify(users);
        // must use the file as the namespace object  and then go deeper into it by using dot operator and access the object  from that name space.
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


server.listen(port);
console.log(`Server started at port number : ${port}`);
