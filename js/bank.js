const mainBalance = document.getElementById('balance')
// deposit 
document.getElementById('deposit-btn').addEventListener('click', function(){

    const depositInput = document.getElementById('deposit-input');
    const depositStatus = document.getElementById('deposit');
    if(depositInput.value === '' || depositInput.value === 'string'){
        alert('Please Input Amount!!');
        withdrawInput.value = '';
    }
    else{
        depositStatus.innerText = parseFloat(depositInput.value) + parseFloat(depositStatus.innerText);
    mainBalance.innerText = parseFloat(mainBalance.innerText) + parseFloat(depositInput.value);
    depositInput.value = '';
    }
})

// withdraw
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input'); 
    const withdrawStatus = document.getElementById('withdraw');

    if(parseFloat(mainBalance.innerText) >= parseFloat(withdrawInput.value)){
     withdrawStatus.innerText = parseFloat(withdrawInput.value) + parseFloat(withdrawStatus.innerText);
    mainBalance.innerText = parseFloat(mainBalance.innerText) - parseFloat(withdrawInput.value);
    withdrawInput.value = '';
    
    }
    else if(withdrawInput.value === '' || withdrawInput.value === 'string'){
        alert('Please Input Amount!!');
        withdrawInput.value = '';
    }
    else{
        alert('Taka nai eto deposit koro!!');
        withdrawInput.value = '';
    }

   
});