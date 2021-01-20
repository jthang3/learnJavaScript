"use strict";

// const jonas1 = {
//     fullName: "Jonas",
//     age: 46,
//     hasDriverLicense: true,
//     getSummary: function () {
//         let sum = `${this.fullName} is a ${this.age} years old teacher, and he
//         ${this.hasDriverLicense ? "has a driver License": "does not have a driver Lincense"}`;
//         return sum;
//     }
// }

// console.log(jonas1.getSummary());

//challenge 3

const markMiller = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBmi: function () {
        this.bmiValue = this.mass / (this.height * this.height);
        this.bmiValue = this.bmiValue.toFixed(2);
    }
}

const johnSmith = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBmi: function () {
        this.bmiValue = this.mass / (this.height * this.height);
        this.bmiValue = this.bmiValue.toFixed(2);
    }
}

markMiller.calcBmi();
johnSmith.calcBmi();

if (markMiller.bmiValue > johnSmith.bmiValue){
    console.log(`${markMiller.fullName}'s BMI (${markMiller.bmiValue}) is higher than ${johnSmith.fullName}'s (${johnSmith.bmiValue})`);
}
else if(markMiller.bmiValue < johnSmith.bmiValue){
    console.log(`${markMiller.fullName}'s BMI (${markMiller.bmiValue}) is less than ${johnSmith.fullName}'s  (${johnSmith.bmiValue})`);
}
else{
    console.log("Same BMI");
}

//loop

for (let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep}`);
}
let newArray = [];
const JohnArray = [
    'Jonas',
    "Lyin",
    2037 - 2021,
    'teacher',
    ["Michael", "Peter", "Steven"]
]

for (let i of JohnArray){
    console.log(i);
    newArray.push(typeof(i));
}
console.log(newArray);

//continue and break
//continue is to exit the current iretation of the loop and continue to the next one
for (let i of JohnArray){
    if (typeof(i) !== "string"){
        continue;
    }
    console.log(i);
}