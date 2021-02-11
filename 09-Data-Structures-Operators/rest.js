'use struct';
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
        },
        order: function (starterMenu,mainMenu) {
            return [this.starterMenu[starterMenu],this.mainMenu[mainMenu]];
        }, 
        orderDelivery: function ({starterIndex = 1,mainIndex = 0,address,time = "20:00"}) {
            console.log(`Order Received! : ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time} `);
            },
        orderPasta: function (ing1,ing2,ing3){
            console.log(`Here is your pasta with ${ing1},${ing2},${ing3}`);
        }
    };

    let testing = (test1,test2,test3,test4) => {
        console.log(test1,test2,test3,test4);
    }

//collect unuse element and destruing assignment

//destructuring
let arr = [1,2,3,4,5];
let [a, b, ...others] = arr;
console.log(a,b,others);

const [foods, ,drink,...theRest] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(foods,drink);
console.log(theRest);

testing(...theRest);
//the rest element must be only once and has to be the last.
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

//object

const {sat, ...weekDays} = {...restaurant.openingHours};
console.log(sat);
console.log(weekDays);


//function

const add = (...number) => {
    console.log(numbers);
}

add(3,2,3,4,5,5);
add(2,4,5);
