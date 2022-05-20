//input a number by user
let number = getIntegerFromUser();

//loop for 10 time multiplication 
for (i = 1; i <= 10; i++) {
    let table = number * i;

    // result
    console.log(number + "*" + i + "=" + table);
}
