// "use strict";

// const restaurant = {
//     name: "Classico Italiano",
//     location: "Via Angelo Tavanti 23, Firenze, Italy",
//     categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//     starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//     mainMenu: ["Pizza", "Pasta", "Riscotto"],
//     order: function (starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     }
// };

// //array destruction..
// //putting array index in variables
// //unpacking values from array or object into different variable - distructuring
// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a,b,c);

// //with array distrucing
// //when javaScript seeing array [] or {} on the left side of the equal sign, it knows it is desturing. 
// const [x,y,z] = arr;
// console.log(x,y,z);


// const [first,second] = restaurant.categories;

// console.log(first,second);

// //take first and third

// let [main, ,secondary] = restaurant.categories;
// console.log(main,secondary);

// //if you want to switch two variable

// // const temp = main;
// // main = secondary;
// // secondary = main;
// // console.log(main,secondary);

// //it is less line of code with array destructuring

// [secondary,main] = [main,secondary];
// console.log(main,secondary);

// //function can return array -> immeadiatly with array dis we can put it in variables.

// let courses = restaurant.order(2,0);
// let [starter,myMain] = courses;

// console.log(starter,myMain);

// //destructure with nested array

// const nested = [2,4,[5,6]];
// const [simple, ,nestedArray] = nested;
// console.log(simple);
// console.log(nestedArray);

// //individual value

// const [i, ,[j,k]] = nested;
// console.log(i,j,k);

// //another feature of destructing
// //default value
// const [p,q,r] = [8,9];
// console.log(p,q,r);
// //r will become undefined.

// //putting default value so non value will have faulty value
// const [ko = 1, john = 1, lyin = 1] = [8,9];
// console.log(ko,john,lyin);