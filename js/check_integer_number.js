let input= parseFloat(prompt("enter any key"));

if(typeof input == 'number' && !isNaN(input)){
    if(Number.isInteger(input)){
        console.log(`${input} is a integer no`);
    }else {
        console.log(`${input} is a float no`);
    }
}else {
    console.log("this is not a number")
}
