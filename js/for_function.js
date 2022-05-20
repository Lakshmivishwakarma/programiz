

function factorOfNo(n) {
    let divisors = [];
    for (i = 1; i <= n; i++) {
        if ((n % i) === 0) {
            divisors.push(i);
        }
    }
   return divisors;
}

let n = getIntegerFromUser();
let factor=factorOfNo(n);
console.log(factor);