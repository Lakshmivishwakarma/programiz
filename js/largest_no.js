let a = 7;
let b = 3;
let c = 9;
let result;


function largestNo(num1, num2, num3) {
    let max;
    if (num1 > num2) {
        if (num1 > num3) {
            max = num1;
        } else {
            max = num3;
        }
    } else if (num2 > num3) {
        max = num2;
    } else {
        max = num3;
    }
    return max;
}


result = largestNo(a, b, c);

console.log("enter first number: " + a);
console.log("enter second number: " + b);
console.log("enter third number: " + c);
console.log("the largest no is: " + result);



// //program without function
// let largestNo;

// if (a > b) {

//     if (a > c) {
//         largestNo = a;
//     } else {
//         largestNo = c;
//     }

// } else if (b > c) {
//     largestNo = b;
// } else {
//     largestNo = c;
// }

// console.log("enter first number: " + a);
// console.log("enter second number: " + b);
// console.log("enter third number: " + c);
// console.log("the largest no is: " + largestNo);