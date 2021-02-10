"use strict";

const restaurant = {
    name: "Classico Italiano",
    myLocation: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Riscotto"],
    
    openingHours: {
        thu: {
            open: 12, 
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0,
            close: 24
        }
    }
};

let {name,starterMenu,myLocation} = restaurant;
console.log(myLocation);
console.log(name);
console.log(starterMenu);

// {object key: name you want for that object} = the actual object
//{object key1,object key 2} = object
let {name: restaurantName,starterMenu: Menu, myLocation: restaurantLocation} = restaurant;
console.log(restaurantName,Menu,restaurantLocation);
