// falsy
// '', 0, false, null, undefined

//Truthy
//'alams', 5, true, {}, []


const myVar = 5;
//Check any truthy
if (myVar){
    myVar = myVar * 100;
}
else {
    myVar = 0;
}


//falsy ! negative
let myMoney = 50;
//You check negative or falsy anything
// if(!myMoney) {

// }
const money = 80;
let food;
if(money > 100) {
    food = 'biryani';
}


else {
    food = 'cha biscutt';
}

// short cart Ternary
let food1 = money > 100 ? 'biryani' : 'cha biscutt';
// console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);

//how can i convert number to string
const num1 = 52;
const numStr = num1 + '';
console.log(numStr);


// string to number
const input = '550';
const inputNum = + input;
console.log(inputNum);


//const isActive = true; / false
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser();
//use && if the left side is true then right side will be executed
//isActive && showUser()?
//if the left side is false then right side will executed
//use ||

//Toggle boolean
