

//input by user
let number = prompt('enter any number');


//validation for no

if (parseFloat(number)) {
    number = parseFloat(number);

} else {
    alert("You have entered non numeric data");
    throw new Error("You have entered non numeric data")
}



let sum = 0;


for (i = 1; i <= number; i++) {

    sum = sum + i;

}

//result
console.log("sum of natural no is :" + sum);