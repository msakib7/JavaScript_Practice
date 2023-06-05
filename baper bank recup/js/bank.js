
// Bank Deposit Section

document.getElementById('btn-deposit').addEventListener('click',function(){

    const depositField = document.getElementById('input-deposit');
    const depositAmountString = depositField.value;
    const newDepositAmount = parseFloat(depositAmountString);
    depositField.value = '';

    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalAmountString = depositTotalElement.innerText;
    const depositTotalAmount = parseFloat(depositTotalAmountString);
    const newTotalAmount = newDepositAmount + depositTotalAmount;

    depositTotalElement.innerText = newTotalAmount;

    const totalBalanceElement = document.getElementById('balance-total');
    const totalBalanceAmountString = totalBalanceElement.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceAmountString);
    const newTotalBalanceAmount = totalBalanceAmount + newDepositAmount;

    totalBalanceElement.innerText = newTotalBalanceAmount;
})

// Bank Withdraw Section

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('input-withdraw');
    const withdrawAmountString = withdrawField.value;
    const newwithdrawAmount = parseFloat(withdrawAmountString);
    withdrawField.value = '';
    console.log(newwithdrawAmount);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalAmountString = withdrawTotalElement.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalAmountString);
    const newTotalAmount = newwithdrawAmount + withdrawTotalAmount;

    withdrawTotalElement.innerText = newTotalAmount;

    const totalBalanceElement = document.getElementById('balance-total');
    const totalBalanceAmountString = totalBalanceElement.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceAmountString);
    const newTotalBalanceAmount = totalBalanceAmount - newwithdrawAmount;

    totalBalanceElement.innerText = newTotalBalanceAmount;
    
})