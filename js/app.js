function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const randomPin = Math.round(Math.random() * 10000);
    return randomPin;
}

document.getElementById('generate-btn').addEventListener('click', function () {
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})


document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const displayTypedNumber = document.getElementById('display-typed-number');
    const previousTypedNumber = displayTypedNumber.value;
    if (isNaN(number)) {
        if (number === 'C') {
            displayTypedNumber.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const newDigits = digits.join('');
            displayTypedNumber.value = newDigits;
        }
    }
    else {
        const newTypedNumber = previousTypedNumber + number;
        displayTypedNumber.value = newTypedNumber;
    }
})


document.getElementById('submit-btn').addEventListener('click', function () {
    const randomPinField = document.getElementById('display-pin');
    const randomPinValue = randomPinField.value;

    const typedNumberField = document.getElementById('display-typed-number');
    const typedNumber = typedNumberField.value;

    const pinFialField = document.getElementById('pin-fail');
    const pinSuccessField = document.getElementById('pin-success');

    if (randomPinValue == typedNumber) {
        pinSuccessField.style.display = 'block';
        pinFialField.style.display = 'none';
    }
    else {
        pinFialField.style.display = 'block';
        pinSuccessField.style.display = 'none';
    }
    
})