let variableLocal = 200;
var variableGlobal = 100;
variableGlobal = "hello";
console.log(variableGlobal);

// prototype: one-time use object created from the 
// base protoype: 
const newObject = {
    prop1: "kartyyyy",
    prop2: "comp3123",
    method1: function (param1){
        console.log(param1);
    }
}


console.log(newObject);
console.log(newObject.prop1);
console.log(newObject.prop2);
console.log(newObject.method1("pizza"));


// prototype: constructor
// prototype constructor name starts with an uppercase

function Student(student_name, course, lunch){

    this.prop1 = student_name;
    this.prop2 = course;
    this.prop3 = lunch;
    this.method1 = function (param1){
         console.log(param1);
    }

}

const student_morning = new Student("kartyyyy", "comp3123", "eggs");

console.log(student_morning);
console.log(student_morning.prop1);
console.log(student_morning.method1.prop2);
student_morning.method1(student_morning.lunch);


// optional Homework: Instantiate another student objeect and print its value
// prototype: ADD a method After/In another file
// to give more capabilities for prototypes

Student.prototype.prop4 = "hard coded val";
Student.prototype.method2 = function (param1){
    return console.log(param1);
}

console.log(student_morning.prop4);
console.log(student_morning.method2());

// class 
class Prof{
     constructor(prof_name_p){
        this.prof_name = prof_name_p
     }
     method1 (param1){
        return param1;
     }

}

const morning_prof = new  Prof("laily");
console.log(morning_prof);




