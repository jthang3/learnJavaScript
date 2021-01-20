"use strict";

let billss = [22,295,176,440,37,105,10,1100,86,52];
let tipss = [];
let totalss = [];

let calcTipss = (bill) => {
    let tip;
    if(bill >= 50 && bill <= 300){
        tip = bill * 0.15;
        return tip;
    }
    else {
        tip = bill * 0.20;
        return tip;
    }
}
for (let i in billss){
    tipss.push(calcTipss(billss[i]));
    totalss.push(tipss[i] + billss[i]);
}

console.log(`Tips ${tipss}`);
console.log(`total Bills: ${totalss}`);

let calcAverages = (arr) => {
    let sum = 0;
    for (let i of arr){
        sum = i + sum;
    }
    sum = (sum / arr.length);
    return sum;
}

console.log(`The average of this array is ${calcAverages(totalss)}`);
