/*

purpose: 
fetch from a third party api 
 */


fetch("https://official-joke-api.appspot.com/random_joke")
.then( (response) => {
 return response.json();
})
.then((dataJSON) => {
    console.log(dataJSON);
})
.catch((err) => {

    console.log(err);
    
});
