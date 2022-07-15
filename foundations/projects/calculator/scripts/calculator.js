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

console.log(add(3,4));
console.log(subtract(10,3));
console.log(multiply(5,3));
console.log(divide(30, 6));

console.log(operate('%', 5, 3));