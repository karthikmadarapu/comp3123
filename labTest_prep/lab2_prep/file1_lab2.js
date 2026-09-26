async function myApi(){

    const myApi_Promise = new Promise( (resolve, reject) =>{

        let myApi_Key = true;
        if(myApi_Key){
            setTimeout(()=>{ const api_Key = "gbcigytx69666";

            resolve(`here is your API KEY: [${api_Key}]`);
        }, 3000);
           
        }else{
        
            reject("You must access the membership first to enter the p**n site");
        }

    });



    let res = await myApi_Promise;
    console.log(res);

}



myApi();