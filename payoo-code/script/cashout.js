document.getElementById('cashout-btn').addEventListener('click',function(){
    const cashoutNumber = getValueFromInput('cashout-number')
     if(cashoutNumber.length !=11){
    alert("Invalid Number")
    return;
   }
   
  
    // get the amount
    const cashoutAmount = getValueFromInput('cashout-amount')
const currentBalance = getBalance();
 
const newBalance = currentBalance - Number(cashoutAmount);
console.log(newBalance);

if(newBalance < 0){
    alert("Invalid balance")
    return;
}

const pin = getValueFromInput("cashout-pin");
 if (pin == '1122') {
    alert('cashOut successfully')
    console.log(newBalance);
    setBalance(newBalance);
    const history = document.getElementById('history-container');
const newHistory = document.createElement('div')
newHistory.innerHTML = `
<div  class="" id="history-container">
            <div class="transsaction-card  p-5 bg-base-100">Cashout ${cashoutAmount} taka,
             to  ${cashoutNumber}
             at ${new Date()}
            
             </div>
        </div>
`
history.appendChild(newHistory)
    
}
else{
    alert('Invalid Pin')
    return;
}
  
});



// // get agent number

// document.getElementById('cashout-btn').addEventListener('click', function(){
//      const cashoutNumberInput = document.getElementById('cashout-number')
//    const cashoutNumber = cashoutNumberInput.value;
//    console.log(cashoutNumber);
//    if(cashoutNumber.length !=11){
//     alert("Invalid Number")
//     return;
//    }
   


// // get the amount

// const cashoutAmountInput = document.getElementById('cashout-amount')
// const cashoutAmount = cashoutAmountInput.value;
// console.log(cashoutAmount);


// const balanceElement = document.getElementById('balance')
// const balance = balanceElement.innerText;
// console.log(balance);



// const newBalance = Number(balance)- Number(cashoutAmount);
// if (newBalance < 0) {
//     alert('invalid Amount')
//     return;
// }
// // console.log(newBalance);


// const cashoutPinInput = document.getElementById('cashout-pin')
// const cashoutPin = cashoutPinInput.value;
// if (cashoutPin == '1122') {
//     alert('cashOut successfully')
//     console.log(newBalance);
//     balanceElement.innerText = newBalance;
    
// }
// else{
//     alert('Invalid Pin')
//     return;
// }

// })