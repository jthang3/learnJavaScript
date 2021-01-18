const calcTip = (bills) => {
    let tip;
    if(bills >= 50 && bills <= 300){
        tip = bills * 0.15;
        return tip;
    }
    else {
        tip = bills * 0.20;
        return tip;
    }
}

let bills = [125,555,44];
let tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
let total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log(`Tips ${tips}`);
console.log(`Total ${total}`);