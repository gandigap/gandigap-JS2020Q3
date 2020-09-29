class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.readyToReset = false;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
        this.readyToReset = false;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    checkOperation() {
        (this.operation === '√') ? this.computeEngineer() : this.computeSimple();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.computeSimple();
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';

    }

    computeSimple() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '/':
                computation = prev / current;

                break;
            case '*':
                computation = prev * current;
                break;
            case '^':
                computation = prev ** current;
                break;
            default:
                return;
        }
        this.readyToReset = true;
        this.currentOperand = parseFloat(computation.toFixed(10));
        this.operation = undefined;
        this.previousOperand = '';
    }

    computeEngineer() {
        let computation;
        const prev = parseFloat(this.previousOperand);

        switch (this.operation) {
            case '√':
                computation = Math.sqrt(prev);
                break;
            default:
                return;
        }

        this.readyToReset = true;
        this.currentOperand = parseFloat(computation.toFixed(10));
        this.operation = undefined;
        this.previousOperand = prev;
    }

    changeMark() {
        this.currentOperand = (this.currentOperand * -1).toString();
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        let integerDigits, decimalDigits;

        if (number < 0) {

            if (parseFloat(stringNumber.split('.')[0]) != '0') {
                integerDigits = parseFloat(stringNumber.split('.')[0]);
            } else {
                integerDigits = `-0`;
            }

            decimalDigits = stringNumber.split('.')[1];
        } else {
            integerDigits = parseFloat(stringNumber.split('.')[0]);
            decimalDigits = stringNumber.split('.')[1];
        }

        let integerDisplay;

        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('ru', {
                maximumFractionDigits: 10
            });
        }

        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay.toLocaleString('ru', {
                maximumFractionDigits: 10
            });
        }
    }

    updateDisplay() {
        if (this.currentOperand !== this.currentOperand) {
            this.currentOperandTextElement.innerText = 'Недопустимый аргумент';
        }

        else {

            this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);

            if (this.operation != null) {

                this.previousOperandTextElement.innerText =
                    `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;

            } else {
                this.previousOperandTextElement.innerText = '';
            }
        }
    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-clear]');
const plusMinusButton = document.querySelector('[data-plus-minus]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (calculator.previousOperand === '' &&
            calculator.currentOperand !== '' &&
            calculator.readyToReset) {
            calculator.currentOperand = '';
            calculator.readyToReset = false;
        }
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        if (button.innerText === '√') {
            calculator.checkOperation();
            calculator.updateDisplay();
        } else {
            calculator.updateDisplay();
        }
    })
})

equalsButton.addEventListener('click', button => {
    calculator.checkOperation();;
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})

plusMinusButton.addEventListener('click', button => {
    calculator.changeMark();
    calculator.updateDisplay();
})