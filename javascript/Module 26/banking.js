//Handle deposit button evet

document.getElementById('deposit-button').addEventListener('click', function(){
 // get the amount deposited
const depositInput = document.getElementById('deposit-input');

const newDepositAmountText = depositInput.value;

const newDepositAmount = parseFloat(newDepositAmountText);

//update deposit total

 const depositTotal = document.getElementById('deposit-total');

 //Current Amount
const previousDepositText = depositTotal.innerText;

const previousDepositAmount = parseFloat(previousDepositText);

const newDepositTotal = previousDepositAmount + newDepositAmount;

depositTotal.innerText = newDepositTotal;



//Update A/C Balance
const balanceTotal = document.getElementById('balance-total');

const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
const newBalanceTotal = previousBalanceTotal + newDepositAmount;
balanceTotal.innerText = newBalanceTotal;




//Clear the deposit input field
 depositInput.value = '';

})

//handler withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function(){

const withdrawInput = document.getElementById('withdraw-input');
const withdrawAmountText = withdrawInput.value;
const newWithdrawAmount = parseFloat(withdrawAmountText);

//set withdraw total
const withdrawTotal = document.getElementById('withdraw-total');
const previousWithdrawText = withdrawTotal.innerText;
const previousWithdrawTotal = parseFloat(withdrawAmountText);

const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotal.innerText = newWithdrawTotal;


//Update Balance 
const balanceTotal = document.getElementById('balance-total');
const previousBalanceText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(previousBalanceText);
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

balanceTotal.innerText = newBalanceTotal;

//clear withdraw
 withdrawInput.value = '';
})




