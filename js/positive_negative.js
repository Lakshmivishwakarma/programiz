let input = prompt("enter a no");
let no = parseFloat(input);
console.log(no);

if (no > 0) {
    console.log("Number is positive");

} else if (no < 0) {
    console.log("Number is Negative");
} else if (no === 0) {
    console.log("Number is zero");
}else{
    console.log("it is not a number")
}