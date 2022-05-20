//input 3 numbers


// function 
function forNumber(param) {

    if (parseFloat(param)) {
        param = parseFloat(param);
    } else {
        alert("You have entered non numeric data");
    }
}


let input1 = prompt("enter first number");
forNumber(input1);

let input2 = prompt("enter second number");
forNumber(input2);

let input3 = prompt("enter third number");
forNumber(input3);





// for last digit
let a = input1 % 10;
let b = input2 % 10;
let c = input3 % 10;

if (a == b && a==c) {
    console.log("numbers have same last digit");

} else {
    console.log(" numbers have not same last digit");
}