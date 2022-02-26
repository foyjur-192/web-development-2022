const numbers = [4, 6, 8, 10];
const output = [];
//old system
// const doubleOld(number) {
//     return number * 5;
// }

const doubleIt = number => number *2;

for (const number of numbers){
    const result = number * 2;
    output.push(result);
}

console.log(output);