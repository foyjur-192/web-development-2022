const numbers = [89, 456, 57];
const student = {
    name: 'Foyjur Khan',
    age: 32,
    movies: ['king kong', 'Dka']
}

//1. Template string
const about = `my name is ${student.name} age of ${student.age} has numbers${[2]} also liked movies ${student.movies[0]}`;
console.log(about);

//2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num +65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

//Spread Operator
const newNumbers = [...numbers];
numbers.push(99);
numbers.push(99);
numbers.push(99);
console.log(newNumber);
console.log(newNumbers);

//Create a new array from an older array add an element
const currentNumbers = [...numbers, 55];
console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);

