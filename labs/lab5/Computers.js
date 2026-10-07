const express = require("express");
const router = express.Router();


router.route("/")
.get((request, response) =>{

    response.send("GET - In computers ")
})
.post((request, response) =>{
    response.send("POST - IN COMPUTERS")
})
.put((request, response) =>{
    response.send("PUT - In computers")
});




router.route("/game-dev")
.get((request, response) =>{

    response.send("GET - /books/computers/game-dev");

    
})


router.route("/java")
.get((request, response)=>{

    response.send("GET - /books/computers/java");

});
router.route("/python")
.get((request, response) =>{
   response.send("GET- /books/computers/python");

});


module.exports = router;