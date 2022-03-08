//What is closer (You want keep it secret)
const bank = owner => {
    balance = 0;
    return amount => {
        //balance += amount
        balance = balance + amount;
        return balance;
    }
}

const mofijBank = bank('mofij');
console.log(mofijBank(100));
console.log(mofijBank(300));
console.log(mofijBank(400));