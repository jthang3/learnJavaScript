"use strict";
//the random to guss

let randomNumber = Math.floor(Math.random() * Math.floor(20))+1;


//myMessage.textContent = " 🎉Correct Number!";
let myMessage = document.querySelector(".message");
console.log(myMessage);

let inputField = document.querySelector(".guess");
let score = document.querySelector(".score");
let evenTesting = document.querySelector(".check");
let myScore = 20;
let highScore = document.querySelector(".label-highscore span");
let currentHighScore = Number(highScore.textContent);
evenTesting.onclick = () => {
    let myGuess = inputField.value;
        if(myScore > 0){
            if(!myGuess){
                myMessage.textContent = "⛔No Number!";
            }
            else{
                let myFunction = () => {
                    myMessage.textContent = "👎Too Big";
                    myScore --;
                    score.textContent = myScore;
                }
                myGuess = Number(myGuess);
                myGuess > randomNumber ? myMessage.textContent = "👎Too Big":myMessage.textContent = "👎Too Small";
                if(myGuess > randomNumber){
                    // myMessage.textContent = "👎Too Big";
                    myScore --;
                    score.textContent = myScore;
                }
                else if(myGuess < randomNumber){
                    // myMessage.textContent = "👎Too Small";
                    myScore --;
                    score.textContent = myScore;
                }
                if(myGuess === randomNumber) {
                    myMessage.textContent = "👌Correct!!"
                    document.querySelector(".number").textContent = randomNumber;
                    console.log(myScore,currentHighScore);
                    myScore > currentHighScore ? highScore.textContent = myScore: null;
                    myScore > currentHighScore ? currentHighScore = myScore: null;
                    myScore = 0;
                    document.querySelector("body").style.backgroundColor = "green";
                    document.querySelector(".number").style.width = "30rem";
                }
            }
        }
        else {
            myMessage.textContent = "🎲Game Over";
            document.querySelector(".number").textContent = randomNumber;
        }
    
    
}
let again = document.querySelector(".again");

again.onclick = () => {
    inputField.value = null;
    randomNumber = Math.floor(Math.random() * Math.floor(20))+1;
    myScore = 20;
    myMessage.textContent = "Start guessing ..";
    score.textContent = myScore;
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
}