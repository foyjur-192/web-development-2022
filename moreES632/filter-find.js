/* const numbers = [5, 2, 4, 8, 6, 87]
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 8);
console.log(smallNumbers);
*/

const products = [

{ name: 'water bottle', price: 50, color: 'yellow'},
{name: 'mobile phone', price: 15000, color: 'black'},
{ name: 'smart watch' , price: 30, color: 'pink'},
{ name: 'sticky note', price: 30, color: 'pink'},
{name: 'water glass' , price: 3, color: 'white'}

];

const expansive = products.filter(product => product.price > 100 );
const blacks = products.filter(product => product.color == 'black');
// console.log(blacks);
const whiteItem = products.find(product => product.color == 'pink');
console.log(whiteItem);