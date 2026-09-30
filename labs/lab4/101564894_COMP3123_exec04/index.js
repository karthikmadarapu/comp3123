/*
purpose: 
Express framework with Node.js
-Try GET, POST, PUT, DELETE methods
-use routes instead of pure paths
- Compare and contrast GET query vs params
*/

const express = require("express");
const app = express();

const SERVER_PORT = process.env.PORT || 3000 ;

//MIDDLEWARE setup for each of our needs on the webservver
// serving  static files 
// Public folder is not usually accessible 
//Notice there is no ral folder in our filesystem called static 
// but this wull be a path we can access in the URL 

app.use("/static", express.static("public"));

// serving  JSON 
app.use(express.json());

//serving traditional  HTML body 
//if we add the object parameter with property extended : true 
// we can use the library qs instead  of library  query string \
app.use(express.urlencoded({extended : true}));

//----------------------------------------------------------------------------------------------------------

// http://localhost:3000

app.get("/", (request, response) => {

    response.send("<h1> Welcome to the root path of the server</h1>")
})

// http.//localhost:3000/hello
app.get("/hello", (request, response) =>{

    response.status(200).send("<h1>Welcome to the path of the path of /hello </h1>");
})


app.get("/user/:firstname/:lastname", (request, response) =>{   // users .get using params 

    console.log(request.params);
      if(!request.params.firstname && !request.params.lastname){
        return response.status(400).json({error:"Missing path parameters"});
    }
     const firstname = request.params.firstname;
    const lastname = request.params.lastname;
    

    response.json({
        first_name: firstname, 
        last_name: lastname
      
    });


});



app.post("/users", (request, response) => {
    const usersArray = request.body;

      if (!Array.isArray(usersArray)) {
        return response.status(400).json({ error: "Expected an array of users" });
    }

    // 2. Optional Validation: Ensure every object in the array has required fields
    for (const user of usersArray) {
        if (!user.firstname || !user.lastname) {
            return response.status(400).json({ 
                error: "Each user object must contain both 'firstname' and 'lastname'" 
            });
        }
    }

    // 3. Return the JSON array back to the client
    return response.json(usersArray);
});



 app.get("/user", (request, response) =>{   // users .get using params 

   
   
     const firstname = request.query.firstname || "peter" ;
    const lastname = request.query.lastname || "parker"
    

     return response.json({
        first_name: firstname, 
        last_name: lastname
      
    });


});





app.post("/user", (request, response) =>{ //app post  first name and last name 

    const {firstname, lastname} = request.body;

    if (!firstname || !lastname) {
        return response.status(400).json({ error: "Missing required fields in body" });
    }

    return response.json({
        first_name: firstname,
        last_name: lastname
    });


});




app.get("/college", (request, response) =>{   
    const college = {

        method: "GET",   // It's not built in we created it.
        name: "George Brown College",
        location: "Toronto",
        established: 1967
    }
    response.json(college);  // we treat our backend as an API 
})

app.get("/student/:name/:age/:city", (request, response)=>{

    console.log(request.params);
    if(!request.params.name){
        return response.status(400).json({error:"Missing path parameters"});
    }
    const name = request.params.name;
    const age = request.params.age;
    const city = request.params.city;

    response.json({
        student_name: name, 
        student_city: city,
        student_age: age 
    });


})


app.post("/college", (request, response) =>{

      const college = {

        method: "POST",   // It's not built in we created it.
        name: "George Brown College",
        location: "Toronto",
        established: 1967
    }
    response.json(college);
    
})

app.put("/college", (request, response) =>{   
    const college = {

        method: "PUT",   // It's not built in we created it.
        name: "George Brown College",
        location: "Toronto",
        established: 1967
    }
     
    response.json(college);
})


app.delete("/college", (request, response) =>{   
    const college = {

        method: "DELETE",   // It's not built in we created it.
        name: "George Brown College",
        location: "Toronto",
        established: 1967
    }
     
    response.json(college);
})


app.listen(SERVER_PORT, () =>{
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});
