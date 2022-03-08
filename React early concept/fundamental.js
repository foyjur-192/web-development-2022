//How to declare a variable useing let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter'

//6 basic Condition It bigger then or less then or equal >, < , === , !==, <=, >=
//Multiple conditons : && two same ,  || any one 

if( fatherName === 'arnold' || season === 'rainy'){

}

else if( fatherName === 'Arnold') {

}

else {

}

// 3. Array 
// index 
// length 
// push
const numbers = [
    89, 456, 57
];
numbers[0] = 56;


// 4. for loop 
for( let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    confirm.log(number);
}


// 5. funciton
function multlply(num1 , num1){
    const result = num1 * num2;
    return result;
}

const output = multlply(54, 78);


//6. object
//3 days to access property by name

const student = {
    name: 'Foyjur Khan',
    age: 32,
    movies: ['king kong', 'Dka']
}
const myVariable = 'age';
console.log(student.age); // Direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); //Access via property name in a variable