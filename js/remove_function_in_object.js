// creatinmg a object
let student= {
    name:"lakshmi",
    age:27,
running: function(){
    console.log("lakshmi is running")
},
    sleeping: function(){
        console.log("lakshmi is sleeping")
    }
}
//removing variables/ function
delete student.name;
console.log(student);// print after deleted
