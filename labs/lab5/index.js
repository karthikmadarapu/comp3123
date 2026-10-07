const express = require("express");
const fs = require("fs");
var dateFormat = require("dateformat");

var books = require("./Books");
var computers = require("./Computers");

const app = express();

const router = express.Router();

let writeData = (data) =>{
    data +="\r\n"
    fs.appendFile("server_log.txt", data, function(error){
        if(error) throw error 

        console.log("Log Saved");
    });
}


//MiddleWare function 

let logger = (request, response, next) =>{

   const todays =  dateFormat(Date(), "dddd, mmmm ds, yyyy, h:MM:ss TT");
   let data =   `[${todays}] - ${request.originalUrl}`
   writeData(data);
   next();
}


app.use(logger);

let booksLogger = (request, response, next)=>{
    console.log("Books logger was called");
    next();
}
// sub routes 
app.use(booksLogger);
app.use("/books/computers", computers);
app.use("/books",booksLogger, books);
// Root Route Endpoint
app.get("/", (request, response) => {
    response.send("You have successfully reached the root directory (/)!");
}); 
app.listen(process.env.port || 8081);
console.log("Web server is listening at this port: ",(process.env.port || 8081) );