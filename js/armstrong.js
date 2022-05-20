// input by user
let number = 153;

// check length of number 
let lengthOfInput =    (number + '').length;

// create a temp variable
let temp= number;


let sum=0;
while (temp > 0) {

    let remainder = temp % 10;

    sum += remainder ** lengthOfInput;


    temp = parseInt(temp / 10); // convert float into integer
}
console.log(sum)
if (sum == number) {
    console.log(number + " is an Armstrong number");
}
else {
    console.log(number + " is not an Armstrong number");
}



