const numbers = [43, 65];
// const x = numbers [0];
// const y = numbers[1]
const [x, y] = [43, 65];
function boxify (num1, num2) {
    const nums = [num1, num2];
    return nums;
}


// const [first, second] = [90, 34]
const [first, second] = boxify (90, 34);
console.log(boxify(x, y));


const numbers = [89, 456, 57];
const student = {
    name: 'Foyjur Khan',
    age: 32,
    movies: ['king kong', 'Dhakar Gunda']
}

const [firstMovie, secondMovie] = student.movies;

//Object Destructuring 
const { name, age} = { name: 'alu' , age: 14};
const {name, age} = {id= 12, name: 'alu', salary: 340000, age: 14};

const employee = {
    id: 'vs code',
    designation: 'developer',
    machine: 'mac',
    landugage: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water'
    }
}