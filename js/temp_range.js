/**
 * program to print temperature distribution over 12 months.
 */

let temperatures = [19, 20, 33, 26, 32, 35, 40, 25, 29, 42, 39, 22]; // temperatures 

// create object 
let intervals1 = {
    range: "15-20",
    count: 0
}
let intervals2 = {
    range: "20-25",
    count: 0
}
let intervals3 = {
    range: "25-30",
    count: 0
}
let intervals4 = {
    range: "30-35",
    count: 0
}
let intervals5 = {
    range: "35-40",
    count: 0
}
let intervals6 = {
    range: "40-45",
    count: 0
};


// iterate temperatures array and fill respective interval obj.


// for loop over temp 
// check if current temp is in one of the follwing range
// increment it's count
for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] >= 15 && temperatures[i] < 20) {
        intervals1.count++;

    } else if (temperatures[i] >= 20 && temperatures[i] < 25) {
        intervals2.count++;

    } else if (temperatures[i] >= 25 && temperatures[i] < 30) {
        intervals3.count++;

    } else if (temperatures[i] >= 30 && temperatures[i] < 35) {
        intervals4.count++;

    } else if (temperatures[i] >= 35 && temperatures[i] < 40) {
        intervals5.count++;

    } else if (temperatures[i] >= 40 && temperatures[i] < 45) {
        intervals6.count++;

    }
}
console.log(`Average temperature in India (2021) : ${temperatures}`);
console.log(`Frequency distribution of temperature over intervals:-`);
console.log(`Temperature range: ${intervals1.range}, frequency : ${intervals1.count}`);
console.log(`Temperature range: ${intervals2.range}, frequency : ${intervals2.count}`);
console.log(`Temperature range: ${intervals3.range}, frequency : ${intervals3.count}`);
console.log(`Temperature range: ${intervals4.range}, frequency : ${intervals4.count}`);
console.log(`Temperature range: ${intervals5.range}, frequency : ${intervals5.count}`);
console.log(`Temperature range: ${intervals6.range}, frequency : ${intervals6.count}`);