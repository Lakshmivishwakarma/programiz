//function for input datatype

function forNumber(param) {

    if (parseFloat(param)) {
        param = parseFloat(param);
        return param;

    } else {
        alert("You have entered non numeric data");
    }
}



//function for factor   
function factor() {

    let factor = 0
    //loop 
    
    for (i = 1; i < input; i++) {
    
        factor = input % i;
    
        if (factor ==0) {
           
return i;
        }
       

    }
    
}




let input = prompt("enter any no");


forNumber(input);

let fact= factor();


console.log(fact);












// // program without function

// // input by user

// let number = prompt("enter any no");

// forNumber(number);

// let factor = 0
// //loop 

// for (i = 1; i < number; i++) {

//     factor = number % i;

//     if (factor == 0) {

//         console.log(i);
//     }
// }
