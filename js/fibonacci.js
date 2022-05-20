const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i=1; i <= number; i++) {

    console.log(n1);
    
    nextTerm = n1 + n2
    n1 = n2;
    n2 = nextTerm;
}




























// // while loop
// let input = getIntegerFromUser("Enter a number");

// let firstNo = 0;
// let secondNo = 1;

// let sum = 0;
// // console.log(sum);
// console.log(firstNo); // 0
// console.log(secondNo); // 1
// sum = firstNo + secondNo; 
// while (sum <= input) {
//     console.log(sum)
//     firstNo = secondNo;
//     secondNo = sum;
//     sum = firstNo + secondNo;
// }




// let input = getIntegerFromUser("Enter a number");

// let firstNo= 0;
// let secondNo=1;

// let sum=0
// do{
//     firstNo= secondNo;
//     secondNo= sum;
//     sum= firstNo + secondNo ;
//     console.log(sum);
// }

// while(sum<input);
