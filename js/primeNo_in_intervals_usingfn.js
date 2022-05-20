function getValidNumber(value) {
    let parseValue;
    if (parseFloat(value)) {
        parseValue = parseFloat(value);
        return parseValue;
    } else {
        alert("You have entered non numeric data: " + value);
        throw new Error("You have entered non numeric data: " + value)
    }
}

function isPrime(n){
    let flag = true;
    //loop for check i is prime no
    for (let j = 2; j <= n / 2; j++) {
        if (n % j == 0) {
            flag = false;
            break;
        }
    }
}


 prompt("enter min no");
let max = prompt("enter max no");

// numeric validation for min


min = getValidNumber(min);
max = getValidNumber(max);
//validation fot check max > min

if (max < min) {
    alert("max number is < min number");
    throw new Error("max number is < min number")
}

//loop for range
for (let i = min; i <= max; i++) {
    let flag = isPrime(i);
    // print for result
    if (flag) {
        console.log(i + " is a prime no");
    }
}