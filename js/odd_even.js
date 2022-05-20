let input = prompt("enter any no");
console.log(input)
let number = parseFloat(input);


if ((number % 2) == 0) {
    console.log("Number is even");

}


else if ((number % 2) == 1) {
    console.log("number is odd");

} else {
    console.log("not a no");
}
