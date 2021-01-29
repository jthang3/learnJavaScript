"use strict"


const printForecast = (arr) => {
    let counter = 0;
    let str = "";
    for (let i of arr){
        counter = counter + 1;
        str = str + ` ...${i}°C in ${counter} days`;
    }
    console.log(str);
}

let firstCast = [17,21,23];
let secondCast = [12,5,-5,0,4];

printForecast(firstCast);
printForecast(secondCast);