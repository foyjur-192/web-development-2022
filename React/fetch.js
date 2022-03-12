//1. JSON

const student = {
    name: 'Foyjur Khan',
    age: 32,
    movies: ['king kong', 'Dka']
}
//Try to study JSON
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// We have to learn two things here stringify and parse


// 2. Fetch
fetch('url')
.then(res => res.json())
.then(data => console.log(data));



//How can you take object Keys, values
const keys = Object.keys(student);
const values = Object.values(student);

//for 
const numbers = [23, 45, 54, 54];
numbers.forEach(num => consolelog(num));
numbers.map(num => num * 2);

// for of on array like object
//loop on an object using for in 


//add or remove from an array [array of object]
const products = [
    {name: 'laptop', price: 24500, brand: 'lenovo', color: 'blue'},
    {name: 'phone', price: 23400, brand: 'lenovo', color: 'orange'},
    {name: 'iphone', price: 23300, brand: 'lenovo', color: 'white'},
    {name: 'vivo', price: 245300, brand: 'lenovo', color: 'black'},
    {name: 'walton', price: 23400, brand: 'lenovo', color: 'gray'},
];

const newProduct ={ name: 'webcam', price: 700, brnad: 'lal'};

//copy products array and then add newProduct
const newProduct = [...products, newProduct];


//Create a new array without one specific item
//remove phone means create an new array without the 
// take everything without phone !==
const remaining = products.filter(p => p.name !== 'phone')

