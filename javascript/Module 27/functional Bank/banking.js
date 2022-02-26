
/*
function doubleIt(num){
const result = num * 2;
return result;
}

const first = doubleIt(5);
const second = doubleIt(7);

*/

//I will double five value
function doubleIt(num){
    const result = num * 2;
   return result;
}

var fiveDouble = doubleIt(5);
const severDouble = doubleIt(7);

function getInputValue(inputId){
const depositInput = document.getElementById(inputId);
const depositAmountText = depositInput.value;
const depositAmount = parseFloat(depositAmountText);
//clear input field
depositInput.value = '';
return depositAmount;
}

function updateTotalField(){
    const depositTotal = document.getElementById('deposit-total');
const depositTotalText = depositTotal.innerText;

//sum + privious amount
const previousDepositTotal = parseFloat(depositTotalText);

depositTotal.innerText = previousDepositTotal + depositAmount;
}




document.getElementById('deposit-button').addEventListener('click', function(){

const depositAmount = getInputValue('deposit-input');



//Get current Deposit

const depositTotal = document.getElementById('deposit-total');
const depositTotalText = depositTotal.innerText;

//sum + privious amount
const previousDepositTotal = parseFloat(depositTotalText);

depositTotal.innerText = previousDepositTotal + depositAmount;


//Update the Balance amount
const balanceTotal = document.getElementById('balance-total')
 //transform text to amount
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);

balanceTotal.innerText = previousBalanceTotal + depositAmount;
//Clear input field
depositInput.value = '';

})


//Handle withdraw 
document.getElementById('withdraw-button').addEventListener('click', function(){
   /*9 const withdrawInput = document.getElementById('withdraw-input');
  
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
*/

const withdrawAmount = getInputValue('withdraw-input');










 // update withdraw total 
const withdrawTotal = document.getElementById('withdraw-total');
const previouswithdrawTotalText = withdrawTotal.innerText;
const previousWithdrawTotal = parseFloat(previouswithdrawTotalText);
withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

//update Balance after withdraw
const balanceTotal = document.getElementById('balance-total');

const balanceTotalText = balanceTotal.innerText;

const previousBalanceTotal = parseFloat(balanceTotalText);
balanceTotal.innerText = previousBalanceTotal - withdrawAmount;




// //Clear input field
// withdrawInput.value = '';


})