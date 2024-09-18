let student = {
    name : "arpit",
    age : 18
}
// for in loop 
console.log("* * * * * littaral * * * * * ");
for(key in student){
console.log(student[key]);
}

// obj creat in 4 type
// 1. let = {}
// 2. let student1 = object.create(student)
// 3. constructor funcation
let student1 = Object.create(student)
console.log("* * * * * create method * * * * * ");
for(key in student1){
    console.log(student1[key]);
}

console.log("* * * * * constructor funcation * * * * * ");
function constructor(username,age){
    this.username = username;
    this.age = age;
}
let per1 = new constructor("arpit",18)

console.log(per1);
// for(key in per1){
    //     console.log(per1[key]);
    // }
    
console.log("* * * * * inheritance * * * * * ");
let object1 = {
    Name : "ram"
}
let object2 = {
    getname: function (){
        console.log("name is ",Name);
    }
}
Object.setPrototypeOf(object2,object1)
console.log(typeof(object2));