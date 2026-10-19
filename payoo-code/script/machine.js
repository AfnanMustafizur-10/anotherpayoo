// machine id -> input

function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
//    console.log(value);
   
    return value;
    
}

// machine Balance -->
function getBalance(){
    const balanceElement = document.getElementById('balance')
    const balance = balanceElement.innerText;
    // console.log(balance);
    
    return Number(balance);
}

// machine--> balance
function setBalance(value) {
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
     
}


// machine--> hide all

function showOnly(id){
    
    const addmoney = document.getElementById('add-money')
    const cashout = document.getElementById('cashout')
    const sendMoney = document.getElementById('send-money')
    const history = document.getElementById('history')
    
     addmoney.classList.add('hidden')
     cashout.classList.add('hidden')
     sendMoney.classList.add('hidden')
     history.classList.add('hidden')
     
     const selected = document.getElementById(id);
     selected.classList.remove('hidden')
}