// function for percentage calculation

function calculatePercantage(num1, num2, num3) {
    let percent = (num1 + num2 + num3) / 3;
    return percent.toFixed(2);
}



let student1 = {
    name: "Lakshmi Vishwakarma",
    english: 69,
    hindi: 84,
    marathi: 40,
    rollNo: 111,
};

let student2 = {
    name: "Neraj Vishwakarma",
    english: 0,
    hindi: 85,
    marathi: 85,
    rollNo: 112,
};
let student3 = {
    name: "Anshu Mandloi",
    english: 75,
    hindi: 86,
    marathi: 70,
    rollNo: 113,
};
let student4 = {
    name: "Anita Yadav",
    english: 78,
    hindi: 87,
    marathi: 65,
    rollNo: 114,
};

let student5 = {
    name: "Durga Vishwakarma",
    english: 78,
    hindi: 88,
    marathi: 70,
    rollNo: 115,
};



let percent = 0;


student1.percent = calculatePercantage(student1.english, student1.hindi, student1.marathi);

student2.percent = calculatePercantage(student2.english, student2.hindi, student2.marathi);

student3.percent = calculatePercantage(student3.english, student3.hindi, student3.marathi);

student4.percent = calculatePercantage(student4.english, student4.hindi, student4.marathi);

student5.percent = calculatePercantage(student5.english, student5.hindi, student5.marathi);

console.log(calculatePercantage(100,50,100));
console.log(student1.english)

console.log(`Class 10th Result`);
console.log(`Name: ${student1.name} (${student1.rollNo}), Percentage: ${student1.percent}%`);
console.log(`Name: ${student2.name} (${student2.rollNo}), Percentage: ${student2.percent}%`);
console.log(`Name: ${student3.name} (${student3.rollNo}), Percentage: ${student3.percent}%`);
console.log(`Name: ${student4.name} (${student4.rollNo}), Percentage: ${student4.percent}%`);
console.log(`Name: ${student5.name} (${student5.rollNo}), Percentage: ${student5.percent}%`);

