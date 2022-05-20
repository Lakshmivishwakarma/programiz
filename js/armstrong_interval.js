let number = 10000;


for (i = 10; i <= number; i++) {
    let result = checkArmstrong(i);
    if (result)
        console.log(i);
}



function checkArmstrong(n) {
    let lengthOfInput = (n + '').length;
    let sum = 0
    let temp = n;
    while (temp > 0) {
        let remainder = temp % 10;
        sum += remainder ** lengthOfInput;
        temp = parseInt(temp / 10); // convert float into integer
    }
    return sum === n;
}