const numbers = document.querySelectorAll('[data-number]');
const operation = document.querySelectorAll('[data-operation]');
const allClear = document.querySelector('[data-all-clear]');
const deleteLastNumberButton = document.querySelector('[data-delete]');
const result = document.querySelector('[data-equals]');
const currentNumber = document.querySelector('[data-current-operand]');
const previousNumber = document.querySelector('[data-previous-operand]');
const sqrt = document.querySelector('[data-operation-sqrt]');
const mathPow = document.querySelector('[data-operation-pow]');
let isAnswer = false;
let isSqrt = false;

numbers.forEach((number) => number.addEventListener('click', writeNumber));
operation.forEach((value) => value.addEventListener('click', calculate));
deleteLastNumberButton.addEventListener('click', deleteLastNumber);
allClear.addEventListener('click', deleteAllNumber);
result.addEventListener('click', returnResult);
sqrt.addEventListener('click', sqrtNumber);
mathPow.addEventListener('click', mathPowCalc);

function writeNumber(number) {
    if (isAnswer) {
        if (!currentNumber.innerHTML) {
            currentNumber.innerHTML = '';
        }
        isAnswer = false;
    }
    (number.target.innerHTML === '.' && !currentNumber.innerHTML.includes('.')) ||
        number.target.innerHTML !== '.'
        ? (currentNumber.innerHTML += number.target.innerHTML)
        : null;
}

function deleteLastNumber(press) {
    press
        ? (currentNumber.innerHTML = currentNumber.innerHTML.slice(0, -1))
        : null;
}

function deleteAllNumber() {
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
}

function calculate(operat) {
    const operationValue = operat.target.innerHTML;
    if (isSqrt) {
        previousNumber.innerHTML = '';
        isSqrt = false;
    }
    if (previousNumber.innerHTML && currentNumber.innerHTML) {
        calculate3(
            `${previousNumber.innerHTML} ${currentNumber.innerHTML}`,
            operationValue
        );
        currentNumber.innerHTML = '';
    } else if (currentNumber.innerHTML) {
        previousNumber.innerHTML = currentNumber.innerHTML + ` ${operationValue}`;
        currentNumber.innerHTML = '';
    } else if (!currentNumber.innerHTML && operationValue == '-') {
        currentNumber.innerHTML = '-';
    }
}

function returnResult() {
    if (previousNumber.innerHTML) {
        currentNumber.innerHTML = `${previousNumber.innerHTML} ${currentNumber.innerHTML}`;
        previousNumber.innerHTML = '';
        calculate2(currentNumber.innerHTML);
    }
}

function sqrtNumber(number) {
    if (currentNumber.innerHTML) {
        previousNumber.innerHTML =
            number.target.innerHTML + currentNumber.innerHTML;
        currentNumber.innerHTML = Math.sqrt(currentNumber.innerHTML);
        isSqrt = true;
    }
}

function mathPowCalc() {
    if (!previousNumber.innerHTML) {
        previousNumber.innerHTML = `${currentNumber.innerHTML} ^`;
        currentNumber.innerHTML = '';
    } else {
        calculate3(`${previousNumber.innerHTML} ${currentNumber.innerHTML}`, '^');
    }
}

function calculate2(res) {
    const resArr = res.split(' ');
    console.log(res);
    console.log(resArr, 2);
    if (resArr[0] === '.') {
        resArr[0] = '0';
    }
    if (resArr[1] === '+') {
        answer = Number(resArr[0]) + Number(resArr[2]);
    } else if (resArr[1] === "-") {
        answer = Number(resArr[0]) - Number(resArr[2]);
    } else if (resArr[1] === "*") {
        answer = Number(resArr[0]) * Number(resArr[2]);
    } else if (resArr[1] === "÷") {
        answer = Number(resArr[0]) / Number(resArr[2]);
    } else if (resArr[1] === "^") {
        answer = Math.pow(Number(resArr[0]), Number(resArr[2]));
    }
    currentNumber.innerHTML = fixNumber(answer);
    isAnswer = true;
}

function calculate3(res, nextOperator) {
    const resArr = res.split(" ");
    let answer;
    console.log(resArr, 3);
    if (resArr[1] === "+") {
        answer = Number(resArr[0]) + Number(resArr[2]);
    } else if (resArr[1] === "-") {
        answer = Number(resArr[0]) - Number(resArr[2]);
    } else if (resArr[1] === "*") {
        answer = Number(resArr[0]) * Number(resArr[2]);
    } else if (resArr[1] === "÷") {
        answer = Number(resArr[0]) / Number(resArr[2]);
    } else if (resArr[1] === "^") {
        answer = Math.pow(Number(resArr[0]), Number(resArr[2]));
    }
    previousNumber.innerHTML = fixNumber(answer) + ` ${nextOperator}`;
    isAnswer = true;
}

function fixNumber(number) {
    return parseFloat(number.toPrecision(12));
}
