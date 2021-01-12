let js = "amazing";
// js==="amazing"?alert("JavaScipt is FUN!"):alert("JavaScript is not FUN!");

//values and Variables

//assignment part 1

let country = "United States";
let continet = "North America";
let population = 579000000;
console.log(country,continet,population);

let isIsland = false;
let language;
console.log(isIsland,population,country,language);

//datatype

//primitive data type

/*
number
string
boolean
undefined -> variables not yet defined.
null - also mean empty value
Symbol (ES2015) - Value that is unique and cannot be changed - const name = "John"
BigInt (ES2020) - larger integers than the Number type can hold.
JavaScript has dynamic typing: We do not have to manually define the data type of 
the value stored in a variable. Data types are determined automatically. */


//SRTING
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2020;

const jonas = "I'm "+firstName+ ', a '+ (year - birthYear) + " years old teacher!";
const john = `I'm ${firstName}, a ${year - birthYear} years old teacher!`; 
console.log(jonas);
console.log(john);

console.log("String with \n\ multiple\n\ lines");

console.log(`Strings
with
Multiple Lines`);

const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough){
    console.log("Sarah can start driving 👌🤦‍♂️");
}
else{
    console.log(`Sarah is too young. Wait another ${18 - age} Years 😢`);
}

//Type conversion
const inputYear = "1991 ";
console.log(Number(inputYear),inputYear);
const myInputYear = Number(inputYear);
console.log(myInputYear + 18);


//Type coercion
/* + sign convert number to string
all other sings converts string to number
*/

console.log("I'm "+23+" years old");
console.log("23" - "10" - 3);

//5 falsy value: 0, '',undefined,null, NaN
//if convert those 5 falsy value to boolean we will get false. 

let money = 0;
if(money){
    console.log("Don't spend it all");
}
else{
    console.log("You need to to get a job!");
}


let height;

height ? console.log("YAY height is defined!!"):console.log("Height is undefined");


//switch Statement
//Compare one value to multiple different options

const day = "Sunday";

switch(day){
    case "Monday":
        console.log("Plan course Structure");
        console.log("Go to coding meetup");
        break;
    case "Wednesday":
    case "Thursday":
        console.log("Write Code example");
        break;
    case "Friday":
        console.log("Record Videoes");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Enjoy the weekend 😊");
        break;
    default:
        console.log("Not a valid day");
    
}

//above in if else logic

if (day === "Monday"){
    console.log("Plan course Structure");
    console.log("Go to coding meetup");
}
else if (day === "Tuesday"){
    console.log("Study code");
}
else if (day === "Wednesday" || day === "Thursday"){
    console.log("Write Code example");
}
else if(day === "Friday"){
    console.log("Record Videoes");
}
else if (day === "Saturday" || day === "Sunday"){
    console.log("Enjoy the weekend 😊");
}
else {
    console.log("Not a valid day");
}


//statement vs expression

//An expression is a piece of codes that producce a value. For example 3+4 is an example.

//statement does not produce a value on itself. if/else for example is a statement. Full sentences that translate for actions

//full example

// statement = expression

// console.log(`hello ${need to put expression not statement}`);

const age2 = 23;
const drink = age2 >= 18 ? "Wine 🍷": "water 🥤";
console.log(drink);

console.log(`I like to drink ${age2 >= 18 ? "Wine" : "Water"}`);