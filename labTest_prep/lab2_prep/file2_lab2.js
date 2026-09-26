fetch("https://bored-api.appbrewery.com/random")
.then((response) => {

    return response.json();
})
.then((data) =>{

    console.log(data);
})
.catch((err)=>{

    console.log(err);
});