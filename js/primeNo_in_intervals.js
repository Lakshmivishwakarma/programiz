
let min = prompt("enter min no");
let max = prompt("enter max no");

// numeric validation for min
if (parseFloat(min)) {
    min = parseFloat(min);

} else {
    alert("You have entered non numeric data");
    throw new Error("You have entered non numeric data")
}

// numeric validation for max
if (parseFloat(max)) {
    max = parseFloat(max);

} else {
    alert("You have entered non numeric data");
    throw new Error("You have entered non numeric data")
}

//validation fot check max > min

if (max < min) {
    alert("max number is < min number");
    throw new Error("max number is < min number")
}

//loop for range
for (let i = min; i <= max; i++) {
    let isPrime = true;
    //loop for check i is prime no
    for (let j = 2; j <= i / 2; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }

    // print for result
    if (isPrime) {
        console.log(i + " is a prime no");
    }
}