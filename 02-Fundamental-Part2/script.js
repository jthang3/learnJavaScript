"use strict"; //give us error message. Good for debugging.

//Functions


function logger () {
    console.log("My name is John");
}

logger();

function fruitProcessor (apples, oranges) {
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} Oranges`;
    return juice;
}

let myJuice = fruitProcessor(4,4);
console.log(myJuice);
///////////////////////////////////////FUNCTION DECLARATION VS FUNCTION EXPRESSION /////////////////////////////////////////////


//function declaration
//you can call the function before you create it
//return statement to output a value from the function and terminate execution
function calcAge1 (birthYear){
    let calYear = 2021 - birthYear;
    return calYear;
}

let myAge = calcAge1 (1997);
console.log(myAge);


//function expression (produce value) or anonymous function
//you can not call the expression function before you create it

const calcAge2 = function (birthYear){
    return 2021 - birthYear;
}

const age2 = calcAge2(1997);

console.log(myAge, age2);


//arrow function
const calcAge3 = (birthYear) => 2020 - birthYear;
console.log(calcAge3(1997))


//examples

//codes after return will not read in functions

const yearsUntilRetirement = (birthYear,firstName) => {
    let currentAge = 2021 - birthYear;
    let retireMentAgae = 65;
    let retirement = retireMentAgae - currentAge;
    if(retirement > 0){
        return retirement;
    }
    else {
        return -1;
    }
}

console.log("Testing",yearsUntilRetirement(1910,"John"));


//functions calling other functions

//cut fruits into 4 pieces
const cutFruitPieces = (fruit) => fruit * 4;

const myFruits = (apples, oranges) => {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const myJuice = `Juce with ${applePieces} apples and ${orangePieces} oranges`;
    return myJuice;
}

console.log(myFruits(2,3));



///ARRAY

//one way
let friends = ["Michael","Steven","Peter"];
console.log(friends);

//another way

let years = new Array(1991,1984,2008,2020);

console.log(friends[0]);

console.log(friends.length);

friends[2] = "Jay";
console.log(friends);

let firstname = "Jonas";
let jonas = [firstname,"Schmedtmann",2037 - 1991, "teacher",friends];
console.log(jonas);

//Methods manipulating arrays
//push return the length of the new array.
let myArray = jonas.push("John");
console.log(`This is myArray = ${myArray}.`);
console.log(`This is jonas ${jonas}`);

//jonas.unshift("Joseph");
//unshift also returns length of the array
let myArray1 = jonas.unshift("Joseph");
console.log(`myArray1 ${myArray1}`);
console.log(`Jonas after unshift ${jonas}`);


//pop and shift

let testingArray = ["John","Joseph","Tesla","Apple"];

let myNewArray = testingArray.pop();
console.log(`testingArray after pop function applied = ${testingArray}`);
console.log(`Pop return = ${myNewArray}`);

//shift -> the first element of the array and return it
let shiftedArray = testingArray.shift();
console.log(`First element of the array - ${shiftedArray}`);
console.log(`myNewArray after shift function applied - ${testingArray}`);

//includes -> return true if the element is in the array. Strict checking


//Object

const john = {
    firstName: "John",
    lastName: "lyin",
    age: 2020 - 1997,
    job: "Application Support",
    friends: ["Michael","Peter","Steven"]
}

let question = prompt("What do you want to know about John? Choose first Name, last name, age, job, friends");

if(question === "first name"){
    console.log(john.firstName);
}
else if(question === "last name"){
    console.log(john.lastName);
}
else if(question === "age"){
    console.log(john.age);
}
else if(question === "job"){
    console.log(john.job);
}
else if(question === "friends"){
    console.log(john.friends);
}
else{
    console.log("Please pick one from the options");
}

//john has three friends, and his best friend is called Michael

console.log(`${john.firstName} has ${john.friends.length} friends, and his best friend is called ${john.friends[0]}`);