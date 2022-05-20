let newnumber = [];
for (let i = 0; i < 10; i++) {
    let n = parseFloat(prompt(`Enter a number : ${i + 1}`));

    newnumber.push(n);

}
console.log(newnumber);

let sum = 0;
for (let j = 0; j < newnumber.length; j++) {
    sum = sum + newnumber[j];

}

let average= sum/2;
console.log(sum);
console.log(average);