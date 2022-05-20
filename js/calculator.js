// first no
let number1 = prompt("enter first number");

// fn called for input a number
onlyNo(number1);



// input for operator
let operator = prompt("enter operator");



// second number
let number2 = prompt("enter second number");

// fn called for input a number
onlyNo(number2);




// opeartor condition for +
if (operator == "+") {
    console.log(number1 + number2);

} else if (operator == "-") {           // opeartor condition for -
    console.log(number1 - number2);

} else if (operator == "*") {          // opeartor condition for *
    console.log(number1 * number2);

} else if (operator == "/") {             // opeartor condition for /
    console.log(number1 / number2);

} else {
    console.log("select any operator")   // for select any operator
}




// function for input only a number
function onlyNo(params) {

    if (parseFloat(params)) {
        params = parseFloat(params);

    } else {
        alert("You have entered non numeric data");
        throw new Error("You have entered non numeric data")
    }

}
