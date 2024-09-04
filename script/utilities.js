function getInputFieldValueById(inputFieldId) {
    const depositField = document.getElementById(inputFieldId);
    const depositFieldValueString = depositField.value;
    const depositFieldValue = parseFloat(depositFieldValueString);
    depositField.value = '';
    return depositFieldValue;
}
function getTextElementValueById(elementId) {
    const previousDeposit = document.getElementById(elementId);
    const previousDepositValueString = previousDeposit.innerText;
    const previousDepositValue = parseFloat(previousDepositValueString);
    return previousDepositValue;
}
function setTextElementValueById(elementId, newValue){
    const setTextElement = document.getElementById(elementId);
    setTextElement.innerText = newValue;
}