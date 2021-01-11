/*
Mark and John are tyring to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable "markHigherBMI" containnig information about whether Mark has a higher BMI than John.
TEST DATA 1:
Marks weights - 78 kg and 1.69 m tall.
John weights - 93 kg and 1.95 m tall.
TEST DATA 2:
Marks weights 95 kg and 1.88 m tall
John weights 85 kg and 1.76 m tall.
GOOD LUCK!!
*/

//mark's info
let markMass = 95;
let markHeight = 1.88;

//John's info
let johnMass = 85;
let johnHeight = 1.76;

//BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

let BMI;

//Mark's BMI

BMI = markMass/ markHeight ** 2;
let markBMI = BMI.toFixed(2);
console.log(`Marks BMI ${markBMI}`);

//John's BMI

BMI = johnMass / (johnHeight * johnHeight);
let johnBMI = BMI.toFixed(2);
console.log(`John's BMI ${johnBMI}`);

//checking whether Mark has a higher BMI than John
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//see who has higher BMI

markHigherBMI ? console.log(`Mark's BMI (${markBMI}) is higher.`):console.log(`John's BMI (${johnBMI}) is higher.`);


//promp -> function

let favorite = prompt("What's your favorite number?");
console.log(favorite);
console.log(typeof(favorite));

favorite = Number(favorite);

favorite === 23 ? console.log("Your favorite number is 23!!"): console.log("It does not work");

if (favorite === 23){
    console.log("Cool!! 23 is a cool number!");
}
else if (favorite == 7){
    console.log("Cool!! 7 is also a cool number");
}
else{
    console.log("Number is neither 7 nor 23");
}

//logical operator

const hasDriversLicense = true;   //A
const hasGoodVision = true;       //B

console.log(hasDriversLicense && hasGoodVision); //true