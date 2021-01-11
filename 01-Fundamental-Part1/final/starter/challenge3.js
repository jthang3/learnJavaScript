// Coding Challenge #3

/**
 There are two gymnastics team, Dolphins and Koalas. They compete against each other 3 times
 */

 //average scroes

 let dolphins = (97+112+101)/3;
 dolphins = dolphins.toFixed(2);
 let koalas = (109+95+123)/3;
 koalas = koalas.toFixed(2);

 if (dolphins > koalas){
     console.log(`Dolphin (${dolphins}) won the match!`);
 }
 else if(dolphins < koalas){
    console.log(`Koalas (${koalas}) won the match!`);
 }
 else{
     console.log(`The game was ended in draw!!
     Dolphins -> ${dolphins} Koalas -> ${koalas}`);
 }

 //Bonus 1

 if ((dolphins >= 100) || (koalas >= 100)){
    if (dolphins > koalas){
        console.log(`Dolphin (${dolphins}) won the match!`);
    }
    else if(dolphins < koalas){
       console.log(`Koalas (${koalas}) won the match!`);
    }
    else{
        console.log(`The game was ended in draw!!
        Dolphins -> ${dolphins} Koalas -> ${koalas}`);
    }
 }
 else{
     console.log("In order to win, you must score at least 100");
 }

 //Bonus 2

