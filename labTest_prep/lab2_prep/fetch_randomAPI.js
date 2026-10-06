fetch('https://api.genderize.io?name=megan')
.then( (response) => {
 return response.json();
})
.then((dataJSON) => {
    console.log(dataJSON);
})
.catch((err) => {

    console.log(err);
    
});