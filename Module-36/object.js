//1. Object literal useful
const student = { name: 'Foyjur Al Hasan', job: 'cricketer'};

// 2. constractor
const person = new Object();
console.log(person);

// 3.
// const human = Object.create(null);
const human = Object.create(student);
console.log(human.job);

class people {
    constructor(name){
        this.name = name;
    }
}

const peop = new people('Manus', 12);
console.log(peop);



//function
function Manus(name){
this.name = name;
}

const man = new Manus('kader')
console.log(man);