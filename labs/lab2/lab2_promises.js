/*
 purpose : 
 create a new promise - API developer side
 fetch that promise - web developer side 
 - async definition of the function that contains the fetch 
 - await in front of the fetch 

 */


 // -------------------- API developer side -----------------------------

  async function fetch_weather(){
     const promise_weather = new Promise((resolve, reject) => {

        let isPaidMember = true;
        if(isPaidMember){


            setTimeout(() => {
            const weatherJSON  = {Monday: "sunny", Tuesday: "rainy"};
            let weatherJSONstr = JSON.stringify(weatherJSON);
            
            resolve(`success!!!!${weatherJSONstr}`); 
            // resolve('{"Monday": "sunny", "Tuesday": "rainy"}');
            }, 2000);
           
        }
        else{
        reject("You must be a paid member to acccess the weather API !!!!");
        }


     });

     let result = await promise_weather;
     console.log(result);

 }


 fetch_weather();

 let userName = "bob";
 console.log(userName);


  // -------------------- API developer side -----------------------------