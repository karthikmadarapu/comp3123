const myObj = {
    para1: "baby", 
    para2: "mommy", 
    para3: "daddy",

    para4: function(param){
        for(const i of param) console.log(i);
    }

}


const arr = ["babby", "mommy", "daddy"];
myObj.para4(arr);
console.log(myObj.para1);
console.log(myObj.para2);
console.log(myObj.para3);





class Myobj{
    constructor(name, age, bodyWeight, height){
        this.name = name;
        this.age = age;
        this.bodyWeight = bodyWeight;
        this.height = height;
    }


   
    details(){
        return console.log(` PatientName: ${this.name}, Age: ${this.age}, BW: ${this.bodyWeight}, HT: ${this.height}`);
    }
}



const patient1 = new Myobj("Joshua", "69", "180", "5'11");
const patient2 = new Myobj("Paul", "79", "170", "6'11");
const patient3 = new Myobj("Maximus", "17", "160", "5'8");
const patient4 = new Myobj("Chad", "23", "220", "6'5");




patient1.details();
patient2.details();
patient3.details();
patient4.details();



