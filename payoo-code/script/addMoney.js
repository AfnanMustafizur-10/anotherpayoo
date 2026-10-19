document.getElementById('add-money-btn').addEventListener('click',function(){
  const bankAccount = getValueFromInput('add-money-bank')

  if(bankAccount =="Select back"){
    alert("Please select a bank")
    return;
  }
//   get back account number
const accno = getValueFromInput('add-money-number')
if(accno.length !='11'){
    alert("please provide valid account number")
    return;
}

const addMoneyInput = getValueFromInput('add-money-amount')


const addMoneybalance = getBalance() + Number(addMoneyInput);


const addMoneypin = getValueFromInput('add-money-pin');
if(addMoneypin !=1122){
    alert('Wrong pin')
    return;
}
setBalance(addMoneybalance); 


const history = document.getElementById('history-container');
const newHistory = document.createElement('div')
newHistory.innerHTML = `
<div  class="" id="history-container">
            <div class="transsaction-card  p-5 bg-base-100">Money ${addMoneyInput} added success from  ${accno}
             at ${new Date()},
             Account No  ${accno}
             </div>
        </div>
`
history.appendChild(newHistory)
alert(`Money added success from  ${accno} at ${new Date()}`)

    
});
