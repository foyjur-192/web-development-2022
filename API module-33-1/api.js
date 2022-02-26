 /*
 //JavaScript Object Notation (JSON)
 const user = { id: 11, name: 'Gorib Amir', job: 'actor'};
 
 const stringified = JSON.stringify(user);
 //convert to string
 
//  console.log(user);
//  console.log(stringified);

const shop = {
    name: 'alia Store',
    address: 'Ranbir Road',
    products: ['laptop', 'mobile', 'pepsi'],
    isExpensive: false

}

const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted); 
*/


const shop = {
    name: 'Khan shop',
    address: 'parkul',
    product: ['Red chili', 'medicine', 'drinks'],
    isExpansive: false
}


const shopStringified = JSON.stringify(shop);
console.log(shopStringified);

const converted = JSON.parse(shopStringified);
console.log(converted);















/*
//Method one
const user = { id: 67, name: 'sabit', job: 'freelancing'};

const stringified = JSON.stringify(user);

console.log(user);
console.log(stringified);
*/









/*
function loadData(){
 fetch('https://jsonplaceholder.typicode.com/todos/1')
 .then(response => response.json())
 .then (json => console.log(json))
}
*/



/*

function loadUsers(){
  //Bring the content
    fetch('https://jsonplaceholder.typicode.com/users')
   .then (response => response.json())
   .then(data => displayUsers(data))
}


function displayUsers(data){
    const ul = document.getElementById('users')
    console.log(data);
    for(const user of data){
        console.log(user.name);
    //  console.log(user.name);
     const li = document.createElement('li');
     li.innerText = `name: ${user.name} email: ${user.email}  `;
     ul.appendChild(li);
    }
}
*/
/*
function holder(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then (response => response.json())
    .then (data => workingUser(data))
}

function workingUser(data){
    const ul = document.getElementById('users')
    console.log(data);

    for(const user of data){

        const li = document.createElement('li');
        li.innerText = `name: ${user.name} email: ${user.email} id: ${user.id} id: ${user.postId}`;
        ul.appendChild(li);
    }
}

*/
