



 async function jokes_run(){

    const myJoke_promise = new Promise((resolve, reject) =>{
        let joke_api = 'gbc2027techjb';

        if(joke_api){


            setTimeout(()=>{

                const result = {category: "general", question: "what does a thief get called when running from cops?", punchline: "Home-Run" };
                const res_string = JSON.stringify(result);
                resolve(`OUTPUT!! ${res_string}`);
            }, 1000);
        }
        else{
            reject(`You must have the right key to access the joke`);
        }
    });


    let finalres = await myJoke_promise;
    console.log(finalres);

}

jokes_run();