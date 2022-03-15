// Variabel decleration
// let firstName = 'Foyjur ';
// let lastName = 'Rahman';
// let fullName = firstName + lastName;
// // console.log(fullName);

// let firstNumber = 50;
// let lastNumber = 20;
// let fullNumber = firstNumber + lastNumber;
// let fullNumber = firstNumber * lastNumber;
// let fullNumber = firstNumber / lastNumber;
// let fullNumber = firstNumber - lastNumber;
// console.log(fullNumber);
// let season = 'rainy';
// season = 'winter';
// season = 'summer'
// season = 'spring'
// console.log(season);

//>, < , === , !==, <=, => Conditional

// let birani = 150;
// let dalBat = 40;
// let budget = 160;
// if ( birani <= budget){
//   console.log('I will eat birani');
// };

// const age = 17;
// const ownsCar = true;

// if (age >= 16 && ownsCar) {
//   console.log("Jerry is old enough to drive and has his own car.");
// } else {
//   console.log("Jerry does not drive.");
// }

// let age = 18;

// if(age < 18){
//     console.log('you are young');

// }else if (age == 18) {
//     console.log('you are welcome');
// }

// else if (age > 18 && age < 30) {
//     console.log('you are matured');
// }

// else {
//     console.log('You are matured');
// }

// var myColor = "Red";

// if (myColor == "Blue") {
// console.log("Just like the sky!");
// }
// else if (myColor = "Red") {
// console.log("Just like the sun!");
// }
// else if (myColor = "Green")
// {
// console.log("Just like the tree");
// }


// let x = 60;
// let y = 10;

// if ( x <= y){
//     console.log('I will go to sylhet')
// } 

// else if ( x !== y){
//     console.log('I can go somewhere');

// }


// if ("cat" === "cat") {
//    console.log("if block");
// } else {
//     console.log("else block");
// }

// const fatherName = 'Arnold';
// let season = 'rainy';


// if( fatherName === 'arnold' || season === 'rainy'){
// console.log('he is my dad')
// }

// else if( fatherName === 'Arnold') {
// console.log('he is my mddmy')
// }

// else {
// console.log('he is my dad')
// }

// const boyfriendIsPaying = false;
// const isSale = true;

// if (boyfriendIsPaying || isSale) {
//   console.log("Jesse will go shopping.");
// } else {
//   console.log("Jesse will not go shopping.");
// }

// //Make array

// const products = [
// {name: 'HP' ,Storage: 'SSD-250GB', ram: '8GB', screen: '15inch'},
// {name: 'phone' ,Storage: 'SSD-32GB', rams: '4GB', screen: '6inch'},
// {name: 'oppo' ,Storage: 'SSD-64GB', rames: '4GB', screen:'6inch' },
// {name: 'apple' ,Storage: 'SSD-250GB', ramse: '8GB', screen:'6inch'},
// {name: 'vivo' ,Storage: 'SSD-50GB', rame: '6GB', screen: '64inch'},
// {name: 'Realme' ,Storage: 'SSD-40GB', ram: '3GB', screen: '6.4'}
// ]

// const names = ['Bangladesh','india', 'Malayshia', 'Pakistan', 'iran', 'iraq', 'iran', 'india']

// // console.log(names.indexOf('Bangladesh')); find the number or stage of the array
// // console.log(names.includes('london'));  Is the name exiting or not
// //  console.log(names.lastIndexOf('iran'));  


// //Live Conceptual seassion 
// //Template String (Important)
// let string1 = 'hello';
// let string2 = 'hi';
// console.log(`hello ${string1} broo ${string2}`);

// //Spread Operator how can you push a array inside another array
// const numbers = [122,121,31,1];
// const number2 = [63, 54];
// const result = numbers.push([63, 54]);
// // console.log(result);
// console.log(...numbers, ...number2); // three dots mean inside number

// //Object   destrucring mean we can find specific name by destrucing
// //When you are trying to got something from object then its call destrucring
// let animal = {
//     name : 'dog',
//     Color: 'brownn',
//     age: 7,
// };

// without name add all things then use rest
// const {name, ...rest} = animal;
//if animal true then use it other wize give empthy string  save your code from eror/ error hanlding
// const {name, ...rest} = animal || {}; //error handling
// // const {name,Color,age} = animal;
// console.log(name, Color, age);

// //Function with spead 
// const sum = (animal) => {
//     console.log(animal);
// }
// //call the func
// sum();

//Shortcut
/*
const sum = ({name, age}) => {
    console.log(name);
    console.log(age);
}
sum(animal);


const sum = (info) => {
    console.log(info?.name);
   
}
sum(animal);
*/

//practice it

/*
const dreamGirl = [
    {
      dream1: {
        name: "bbu",
        height: "5.4",
        family: [{ father: "rock", mother: "shila", sister: "chinki" }],
        age: undefined,
        contactInfo: [
          {
            facebook: {
              link: "https://www.facebook.com/",
              followers: "12545",
              status: "single",
              friendsList: [
                { name: "rofik" },
                { name: "jobbar" },
                { name: "salam" },
                { name: "borkot" },
                undefined,
              ],
            },
          },
          { instagram: "https://www.instagram.com/" },
          { twitter: "https://twitter.com/" },
          { github: "https://github.com/" },
          { phone: ["01254823212", "02152457"] },
        ],
      },
    },
  ];
const friends = dreamGirl.facebook.friendsList[0].name;
console.log(friends);
*/
//we can show any amount from array with for loop
// const numbers = ["hero", "broo", "china", "angel"];
// for (let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     console.log(element);

//loop mean run top  to bottom 
// for(const element of numbers){
//     console.log(element);
// }


//for in
// const object = { a: 1, b: 2, c: 3 };
// console.log(object["a"]);

// for (const property in object) {
// //   console.log(property);
// //   console.log(object);

//   //we have to find property with name
//    console.log(`${property}: ${object[property]}`);
// }

//map will use in React 
//use index in map
//use of map  Practice it later 
// const number = [1, 2, 3, 4, 5];
// //const sum = (num) => num * num; same as x
// const result = number.map((x) => x * x);
// console.log(result);

//map and filter only run on array not object
//frends.fileter is not a function mean you are running on object
//filter
const products = [
    { id: 1, name: "apple", price: 500, color: "golden" },
    { id: 2, name: "xiaomi", price: 124, color: "black" },
    { id: 3, name: "samsung", price: 200, color: "black" },
    { id: 4, name: "samsung2", price: 200, color: "black" },
    { id: 5, name: "lenovo", price: 300, color: "pink" },
    { id: 6, name: "xiaomi", price: 100, color: "pink" },
    { id: 7, name: "lenovo", price: 300, color: "pink" },
  ];
  //we can use condition in filter
const result = products.map((pd, index) => {
  console.log(result);
})


// find work on object

// const result = products.find((pd) => pd.color == 'black');
// console.log(result);


// const numbers = [1, 2, 4, 6, 5, 10];

// function sum(x) {
//   return x * x;
// }

// const result = numbers.map(
//   (x = function (x) {
//     return x * x;
//   })
// );
// const result = numbers.map((x) => x*x);
// console.log(result);