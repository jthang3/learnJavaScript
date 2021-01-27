"use strict";
//the random to guss

let randomNumber = Math.floor(Math.random() * Math.floor(20));
console.log(randomNumber);

//myMessage.textContent = " 🎉Correct Number!";

let inputField = document.querySelector(".guess");
// console.log(inputField);
let evenTesting = document.querySelector(".check");
evenTesting.onclick = () => {
    let myGuess = inputField.value;
    myGuess = Number(myGuess);
    
}