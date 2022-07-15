function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

function operate(operator, a, b) {
    switch(operator) {
        case('+'):
            return add(a, b);
            break;
        case('-'):
            return subtract(a, b);
            break;
        case('*'):
            return multiply(a, b);
            break;
        case('/'):
            return divide(a, b);
            break;
        case('%'):
            return modulo(a, b);
            break;
    }
}

function getButtonValue() {
    const calculatorButtons = document.querySelectorAll('button.calculator-button');
    const calculatorDisplay = document.getElementById('calculator-display');

    calculatorButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            calculatorDisplay.innerHTML = button.innerHTML;
        })
    })
}

function clearDisplay() {
    const clearButton = document.getElementById('calculator-clear');
    const calculatorDisplay = document.getElementById('calculator-display');

    clearButton.addEventListener('click', (e) => {
        calculatorDisplay.innerHTML = null;
    })
}

function isNumericOrDecimal(a) {
    return (a === '.' || Number.isInteger(parseInt(a)));
}

function isOperator(a) {
    return (a === '/' || a === 'X' || a === '-' || a === '+');
}

function isEqual(a) {
    return (a === '=');
}

function main() {
    getButtonValue();
    clearDisplay();
}

main();