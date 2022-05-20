function reverseString(str) {
    // function body
    let temp = [];
    for (i = 0; i < str.length; i++) {
        let c = str.charAt(i);
        temp.push(c);
    }
    return temp.join("");
}





let stringToCheck = prompt("Enter any string");

let reverseCheck = reverseString(stringToCheck);


if (stringToCheck === reverseCheck) {

    console.log(stringToCheck + "is a Palindrome");

} else {
    console.log(stringToCheck + "is not a Palindrome");

}


