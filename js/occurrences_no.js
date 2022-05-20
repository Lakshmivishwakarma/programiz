//function for check count of occurences

function countOccurrences(str, letter) {
    let count = 0;

    for (i = 0; i < str.length; i++) {  // loop for check letters in string
        let char = str.charAt(i);
        if (letter === char) {   // condition 
            count++;
        }
    }
    return count;

}

let input = 'Neeraj';  // input by user for string
let letterToCheck = 'e';  //input letter to check occurrences
let occurence = countOccurrences(input, letterToCheck); // occurrences function call
console.log(`${input} has ${occurence} occurences of ${letterToCheck}`); // print result
