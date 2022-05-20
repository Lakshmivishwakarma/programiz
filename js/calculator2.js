// first no
let firstNumber = getFloatFromUser("Enter first number")

// input for operator
let operator = prompt("enter operator");

// second number
let secondNumber = getFloatFromUser("Enter second number");
if (operator === "/" && secondNumber === 0) {

    alert("number cannot divided by zero")
    throw new Error("number cannot divided by zero")
}
let result = 0;

switch (operator) {
    case "+":
        result = firstNumber + secondNumber;
        break;


    case "-":
        result = firstNumber - secondNumber;
        break;


    case "*":
        result = firstNumber * secondNumber;
        break;

    case "/":
        result = firstNumber / secondNumber;
        break;

}

console.log("first no: " + firstNumber + "  second no : " + secondNumber + " = " + result);
