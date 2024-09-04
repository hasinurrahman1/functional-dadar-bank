document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawFieldValues = getInputFieldValueById('withdraw-field')
    const previousWithdrawValues = getTextElementValueById('previous-withdraw')
    const totalWithdraw = previousWithdrawValues + withdrawFieldValues;
    setTextElementValueById('previous-withdraw', totalWithdraw);
    const totalBalanceValues = getTextElementValueById('total-balance');
    const allBalance = totalBalanceValues - withdrawFieldValues;
    setTextElementValueById('total-balance', allBalance);
})