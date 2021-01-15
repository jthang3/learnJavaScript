const calcAverage = (score1,score2,score3) => {
    let averageScore = (score1 + score2 + score3) / 3;
    averageScore = averageScore.toFixed(2);
    return averageScore;
}

let dolphins = calcAverage(85,54,41);
let koalas = calcAverage(23,34,27);

function checkWinner (avgDolhins,avgKoalas){
    if (avgDolhins >= avgKoalas * 2){
        console.log(`Dolphin win (${avgDolhins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas >= avgDolhins * 2){
        console.log(`Kolas win (${avgKoalas} vs. ${avgDolhins})`);
    }
    else {
        console.log(`No one win the match. Kolas - ${avgKoalas} vs Dolphin - ${avgDolhins}`);
    }
}

checkWinner(dolphins,koalas);