const student = {
    id: 101,
    money: 5000,
    major: 'mathmatics',
    name: 'RJ Kibria',
    isRich: false,
    subject: ['english', 'economics', 'math 101', 'calcualus' ],
    bestFriend: {
        name: 'kantu', 
        major: 'mathmatics'
    },

    takeExam: function(){
        console.log(this.name, 'taking exam')
    },
   treatDay: function(expense){
       this.money = this.money - expense;
       return this.money;
   }
}

student.takeExam();
const remmaining1 = student.treatDay(900);
const remmaining2 = student.treatDay(500);
console.log(remmaining2);