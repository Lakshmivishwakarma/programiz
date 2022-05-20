let n = 7;
let isPrime= true;
for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        console.log(n + "is not a prime no");
        isPrime= false;
        break;
    }
}

if (isPrime) {
    console.log(n + " is a prime no");
}