document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositFieldValues = getInputFieldValueById('deposit-field');
    const previousDepositValues = getTextElementValueById('previous-deposit')
    const totalDeposit = previousDepositValues + depositFieldValues;
    setTextElementValueById('previous-deposit', totalDeposit);
    const totalBalanceValues = getTextElementValueById('total-balance')
    const allBalance = totalBalanceValues + depositFieldValues;
    setTextElementValueById('total-balance', allBalance);
})