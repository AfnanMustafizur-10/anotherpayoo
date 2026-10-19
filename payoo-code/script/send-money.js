document.getElementById('sendMoney-btn').addEventListener('click',function(){
    const sendMoneyNumber = getValueFromInput('sendmoney-number')
     if(sendMoneyNumber.length !=11){
    alert("Invalid Number")
    return;
   }
   
  
    // get the amount
    const sendMoneyAmount = getValueFromInput('sendMoney-amount')
const currentBalance = getBalance();
 
const newBalance = currentBalance - Number(sendMoneyAmount);
console.log(newBalance);

if(newBalance < 0){
    alert("Invalid balance")
    return;
}

const pin = getValueFromInput("sendMoney-pin");
 if (pin == '1122') {
    alert('Send Money successfully')
    console.log(newBalance);
    setBalance(newBalance);


    const history = document.getElementById('history-container');
const newHistory = document.createElement('div')
newHistory.innerHTML = `
<div  class="" id="history-container">
            <div class="transsaction-card  p-5 bg-base-100">Money ${sendMoneyAmount} send success to  ${sendMoneyNumber}
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
