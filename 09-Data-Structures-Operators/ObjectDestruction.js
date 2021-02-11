// "use strict";

// const restaurant = {
//     name: "Classico Italiano",
//     myLocation: "Via Angelo Tavanti 23, Firenze, Italy",
//     categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//     starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//     mainMenu: ["Pizza", "Pasta", "Riscotto"],
    
//     openingHours: {
//         thu: {
//             open: 12, 
//             close: 22
//         },
//         fri: {
//             open: 11,
//             close: 23
//         },
//         sat: {
//             open: 0,
//             close: 24
//         }
//     },
//     order: function (starterMenu,mainMenu) {
//         return [this.starterMenu[starterMenu],this.mainMenu[mainMenu]];
//     }, 
//     orderDelivery: function ({starterIndex = 1,mainIndex = 0,address,time = "20:00"}) {
//         console.log(`Order Received! : ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time} `);
//         }
// };

// restaurant.orderDelivery({
//     time: "22:30",
//     address: "Via del Sole, 21",
//     mainIndex: 2,
//     starterIndex: 2
// })

// //we use {} for object destructing.
// //unlike array (order matter), we need to write the exact property names to destruct the object
// //order of elements do not matter in object unlike array

// //fundamental of destructuring an object //very useful if we use api
// let {name, openingHours, categories} = restaurant;
// console.log(name,openingHours,categories);

// //if we want the variable name to be different than the properties name

// let {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName,hours,tags);

// //setting up defaul value just like array
// //we need default value for not hard coded object. 
// const {menu = [], starterMenu: starter = []} = restaurant;
// console.log(menu,starter);

// //mutating variables while destructing an object
// let a = 111;
// let b = 999;
// let obj = {a: 23, b: 7, c: 14}
// console.log(a,b);
// //get syntax error because when start with {} javaScript think it is code block.
// //can not assign anything to code block
// //{a,b} = obj;

// //to mutate object correctly

// ({a,b} = obj);
// console.log(a,b);

// //Nested object 
// //colon (:) to get different variable name and nested value in array = to assign default value


// // let {fri:{open,close}} = hours;
// // console.log(open,close);

// let {sat: {open = 11,close = 12}} = hours;
// console.log(open,close);
