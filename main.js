class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
   
    clear(){ //clears all
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = undefined;
    }

    delete(){ // clears a single number

    }

    populateDisplay(number){ // appends numbers
        this.currentOperand = number;
    }

    updateDisplay(){
        this.currentOperandTextElement = this.currentOperand;
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.populateDisplay(button.innerText);
        calculator.updateDisplay();
    })
})


/*
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(operator, num1, num2){
    if(operator == '+'){
        return add(num1, num2);
    }else if(operator == '-'){
        return subtract(num1, num2);
    }else if(operator == '*'){
        return multiply(num1, num2);
    }else if(operator == '/'){
        return divide(num1, num2);
    }
}
*/