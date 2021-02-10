"use strict";
//var is function scope
//let and const are block scope
const calcAge = (birthYear) => {
    const age = 2037 - birthYear;
    const printAge = () => {
        const output = `You are ${age}, born in ${birthYear}`;
        console.log(output);
        if(birthYear >= 1981 && birthYear <= 1996){
            const str = `Oh, you're a millenial, ${firstName}`;
            console.log(str);
        }
    }
    printAge();
    return age;
}

const firstName = "Jonas";
calcAge(1991);

//primitive vs reference

//number, string, symbol, undefined, more are primitive,
// objects, function, are refereince

//primitive data types are store in stack
//reference data types are store in heap


let age = 30;
let oldAge = age;
age = 31;
console.log(`Age: ${age}`);
console.log(`Old age: ${oldAge}`);

let me = {
    name: "John",
    age: 23
}

let friend = me;
friend.age = 24;

console.log("Me",me);
console.log("Friend",friend);

//practice
//primitive
let lastName = "Williams";
let oldLastName = lastName;
lastName = "David";
console.log(lastName,oldLastName);

//reference

const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27
};

const marriedJessica = jessica
marriedJessica.lastName = "David";

console.log("Before marriage: ", jessica);
console.log("After marriage", marriedJessica);

//copying object

const jeccica2 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    status: {
        gender: "Female",
        Occupation: "Student"
    }
}
//spread operator or object.assign only copy first level.
const jessicaCopy = Object.assign({},jeccica2);
jessicaCopy.lastName = "Lyin";
jessicaCopy.status = {...jeccica2.status};
jessicaCopy.status.Occupation = "Job Seeker";
console.log(jeccica2,jessicaCopy);