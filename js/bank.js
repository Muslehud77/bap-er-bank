const depositButton = document.getElementById('deposit-btn')
const withdrawButton = document.getElementById('withdraw-btn')
const balance = document.getElementById('balance')


// deposit 
depositButton.addEventListener('click', function(){

    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    const deposit = document.getElementById('deposit');
    
    deposit.innerText = parseFloat(depositAmount) + parseFloat(deposit.innerText);
    balance.innerText = parseFloat(depositAmount) + parseFloat(balance.innerText);
    depositInput.value = '';

})

// withdraw 
withdrawButton.addEventListener('click',function(){
const withraw = document.getElementById('withdraw');
const withdrawInput = document.getElementById('withdraw-input');

withdraw.innerText = parseFloat(withdraw.innerText) + parseFloat(withdrawInput.value);
balance.innerText = parseFloat(balance.innerText) - parseFloat(withdraw.innerText)
withdrawInput.value = '';

})