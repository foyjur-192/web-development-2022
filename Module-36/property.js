const bottle = { 
    Color: 'yellow',
    hold: 'water',
    price: 50,
    isItStreel: 'true'
};
//Getting all properties name
const keys = Object.keys(bottle);
// console.log(keys);

//Get all values
const values = Object.values(bottle);
// console.log(values);

const pairs = Object.entries(bottle);
// console.log(pairs);

Object.seal(bottle);
//How can I delete the property
delete bottle.isCleaned;
console.log(bottle);

for (const prop in bottle){
    console.log(bottle[prop]);
}