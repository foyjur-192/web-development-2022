const fish = {name: 'king Hilsha', id: 654, price: 900, phone: '015841', address: 'Chanpur', dress: 'silver' };
console.log(fish.phone);

const {phone, price , dress , id} = fish;
 
// console.log(price);
// console.log(id);
// console.log(fish);

//Formula 
/*const user ={
    name: 'Alex'. age: 43
}
const {name, age}
    */

const company = {
 name: 'GP',
 ceo: {id: 1, name: 'ajmol', food: 'fuckhka'},
 web: {work: 'website development', employee: 22, framework: 'react'}
}

const {work, framework} = company.web;
const {food} = company.ceo;
console.log(work, framework, food);