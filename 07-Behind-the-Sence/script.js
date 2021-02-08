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