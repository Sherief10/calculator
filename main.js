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
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
    
    operate(){
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if(this.operation == '+'){
            computation = prev + current;
        }else if(this.operation == '-'){
            computation = prev - current;
        }else if(this.operation == '*'){
            computation = prev * current;
        }else if(this.operation == '/'){
            computation = prev / current;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    chooseOperation(operation){
        if(this.currentOperand == '') return
        if(this.previousOperand !== ''){
            this.operate();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    populateDisplay(number){ // appends numbers
        if(number == '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand;
        if(this.operation != null){ //fix later
            this.previousOperandTextElement.innerText = this.previousOperand + " " + this.operation;
            //this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
        }
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

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button => {
    calculator.operate();
    calculator.updateDisplay();
})

clearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})