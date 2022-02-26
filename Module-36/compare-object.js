const first1 = {a: 1};
const second2 = { a: 1};
const third = first;

if(first === second) {
    console.log('objects are equal');
}
else{
    // console.log('Objects are different');
}

console.log(JSON.stringify(first));
console.log(JSON.stringify(second));

if(JSON.stringify(first) === JSON.stringify(second)) {
    console.log('objects are equal');
}

