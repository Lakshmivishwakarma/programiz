// input by user
let number = prompt("Enter any no");


//numeric validation
if (parseInt(number) || parseInt(number) === 0) {
    number = parseInt(number)
}
else {
    alert("You have entered non numeric data ");
    throw new Error("You have entered non numeric data");

}

// checking if number is negative

if (number < 0) {
    console.log("Factorial for negative number does not exist.");
} else if (number === 0) {
    // if number is 0
    console.log(" the factorial of 0 is : 1");
} else {
    // if number is positive

    let fact = 1;
    for (let i = number; i > 0; i--) {
        fact = fact * i;
    }
    console.log("factorial no of " + number + " is " + fact);

}
