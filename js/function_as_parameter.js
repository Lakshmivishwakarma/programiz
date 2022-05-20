// create a function for passing as a parameter
function sayYourName() {
    return "my name is lakshmi vishwakarma";

}

//creating function where we pass function as a parameter


function user(params, func) {
    let msg = func();

    console.log(`${params} ${msg}`);
    
}

user("hi",sayYourName);