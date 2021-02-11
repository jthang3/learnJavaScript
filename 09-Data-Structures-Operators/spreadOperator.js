// "use strict";


// //spread operator



// const restaurant = {
//         name: "Classico Italiano",
//         myLocation: "Via Angelo Tavanti 23, Firenze, Italy",
//         categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//         starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//         mainMenu: ["Pizza", "Pasta", "Riscotto"],
        
//         openingHours: {
//             thu: {
//                 open: 12, 
//                 close: 22
//             },
//             fri: {
//                 open: 11,
//                 close: 23
//             },
//             sat: {
//                 open: 0,
//                 close: 24
//             }
//         },
//         order: function (starterMenu,mainMenu) {
//             return [this.starterMenu[starterMenu],this.mainMenu[mainMenu]];
//         }, 
//         orderDelivery: function ({starterIndex = 1,mainIndex = 0,address,time = "20:00"}) {
//             console.log(`Order Received! : ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time} `);
//             },
//         orderPasta: function (ing1,ing2,ing3){
//             console.log(`Here is your pasta with ${ing1},${ing2},${ing3}`);
//         }
//     };

// const arr = [7,8,9];
// const badNewArray = [1,2,arr[0],arr[1],arr[2]];
// console.log(badNewArray);
// const newArr = [1,2,...arr];
// console.log(newArr);

// //not manipulating mainMenu array. Copying it
// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// let [,,,Genocci = "Genn"] = newMenu;
// console.log(Genocci);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //join two arrays or more

// const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
// console.log(menu);

// //spread operator work on all iterable

// //iterables: arrays, strings, maps, set. NOT objects

// //spread operator on string -> seperated each value by comma. 

// const str = "Jonas";
// const letters = [...str];


// //function with spread operator
// // const ingredients = [prompt("Let's make pasta! Ingredient 1?"),prompt("Let's make pasta! Ingredient 2?"),
// // prompt("Let's make pasta! Ingredient 3?")];

// // restaurant.orderPasta(...ingredients);
// // //73 and 75 are the same
// // restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);

// //objects
// const newRestaurant = {
//     founderYear: 1998,
//     ...restaurant,
//     founder: "Guiseppe"
// }
// console.log(newRestaurant);
// const restaurantCopy = {...restaurant};
// restaurant.name = "Ristorance Roma";
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

