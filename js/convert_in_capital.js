// function 
function capitalizeFirstLetter(str) {

    let char = str.charAt(0);  // method for get first charactor
    let substring = str.substring(1, str.length); //method for Extract a substring
    let capital = char.toUpperCase(); // method for Convert to uppercase
    let result = capital.concat(substring);  // method for join two string

    return result;
}


// to print - String 
// console log- string 
// function string 


let input = "riya"; // input by user

let result = capitalizeFirstLetter(input); // function call
console.log(`Original text :${input} Result: ${result}`);
