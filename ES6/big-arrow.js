const add = (num1, num2) => num1 * num2; 
const sum = add(20, 30);

// variable + parameter + => sum mean + / * - 

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(8 ,12, 3);

// console.log(result);

const sulty  = (num1, num2 , num8) => num1 * num2 + num8;
const sejalt = sulty(70, 12 , 2);

const fiveTimes = num => num *5;
const kasalt = fiveTimes( 80);
console.log(kasalt);

//Multiline if we operate multiline we can operate second bracket


    const doMath = (x, y) => {
        const sum = x + y;
        const diff = x - y;
        const result = sum * diff;
        const output = result * 5;
        return output;
    }

const total = doMath(12, 5);
console.log(total);
