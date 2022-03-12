const products = [
    {name: 'laptop', price: 24500, brand: 'lenovo', color: 'blue'},
    {name: 'phone', price: 23400, brand: 'lenovo', color: 'orange'},
    {name: 'iphone', price: 23300, brand: 'lenovo', color: 'white'},
    {name: 'vivo', price: 245300, brand: 'lenovo', color: 'black'},
    {name: 'walton', price: 23400, brand: 'lenovo', color: 'gray'},
];

price = products.map(product => product.price);
color = products.map(product => product.color);
brand = products.map(product => product.price);
// console.log(price);
products.forEach(product => console.log(product))
products.forEach(product => console.log(product.color))




//3. Filter 
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter(p => p.name.includes('l'));
// console.log(specificName);


//4. find mean get first name from object
const special = products.find(p => p.name.includes('n'));
console.log(special);

