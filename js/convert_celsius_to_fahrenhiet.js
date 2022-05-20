//input by user

let input= prompt("enter celsius value");

// condition for non numeric no
celsius=0;
if(parseFloat(input)){
   celsius= parseFloat(input);

}else{
    alert("You have entered non numeric data");
    throw new Error("You have entered non numeric data")
}

console.log("celsius: " + celsius);


//fahrenhiet factor
let convertedfahre= (input * 9/5) + 32;


//result after converted
console.log("converted in fahrenhiet :" + convertedfahre);



//input by user

input= prompt("enter celsius value");

// condition for non numeric no
fahrenhiet=0;
if(parseFloat(input)){
   fahrenhiet= parseFloat(input);

}else{
    alert("You have entered non numeric data");
    throw new Error("You have entered non numeric data")
}

console.log("fahrenhiet: " + fahrenhiet);


//celsius factor
let convertedCel= (input - 32) * 5/9; 


//result after converted
console.log("converted in celsius :" + convertedCel);

