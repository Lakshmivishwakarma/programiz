//Converting in KM to Mile

//input no of KM from user

let input = prompt("enter no of km");

let km = 0;
if(parseFloat(input)){
    km = parseFloat(input);
}else{
    alert("You have entered non numeric data");
    throw new Error("You have entered non numeric data")
}

console.log("No of km is: "+km +" km");


//miles factor
let convertInMiles= 0.62;


//result
let result = km * convertInMiles;

//print
console.log("converted miles: "+ result);



// //Converting in Mile to Km

// //input no of mile from user

input = prompt("enter no of mile");
let mile = 0;
if(parseFloat(input)){
    mile = parseFloat(input);
}else{
    alert("You have entered non numeric data");
    throw new Error("You have entered non numeric data")
}



console.log("No of mile is: "+mile +" mile");

// // //KM factor
let convertInKm= 1.60;


//result
let convertedKms = mile * convertInKm;

//print
console.log("converted km: " + convertedKms);

