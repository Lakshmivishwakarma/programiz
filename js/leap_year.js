let year = 2024;

if (year % 4 == 0 && year % 400 !== 0|| year%100==0) {
    console.log("this is leap year");
} else {
    console.log("this is not a leap year");
}
