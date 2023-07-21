// assign number class, to differentiate first set and second set of numbers
let numClass = 'number1'
// initialize variables
let operator = null;
let hasOperator = false;
let result = null;

// create reference elements
const display = document.querySelector('#display');
const symbol = document.createElement('div');
symbol.classList = 'symbol'

// check if pressed key is number or operator
function checkIfNum(character) {
    check = isNaN(character);
    if (isNaN(character)) {
        return false;
    } else {
        return true;
    }
}

// for number buttons
function buttonClick(e) {
    // get the value of the key pressed
    let pressedNum = e.target.innerText;
    // create element, set class (number1 or number2), assign text value and append it into display
    let num = document.createElement('div');
    num.classList = numClass;
    num.textContent = pressedNum;    
    display.appendChild(num);
}

// for operation buttons
function operatorClick(e) {
    // if operator exists, raise alert
    if (hasOperator == true) {
        alert('One operator only!')
    } else {
        // get pressed operator and assign to variable
        let pressedOper = e.target.innerText;        
        operator = pressedOper;
        // set hasOperator true, so no multiple operators
        hasOperator = true;
        // create the operator as an element and append into display         
        symbol.textContent = pressedOper;
        display.appendChild(symbol);
        // also change numberClass, when symbol is input
        if (numClass == 'number1') {
                numClass = 'number2';
            } else if (numClass == 'number2') {
                numClass = 'number1';
            }
    }

}

// check operator and return it as string
function checkOperator(oper) {
    if (oper == '+') {
        return 'add';
    } else if (oper == '-') {
        return 'sub';
    } else if (oper == '*') {
        return 'mult';
    } else if (oper == '÷') {
        return 'division';
    }
}

// get each number from result and append them to display as 'number1' class
function getNumberAsElements(resultNum) {
    let numString = resultNum.toString();
    let len = numString.length;
    for (let k = 0; k < len; k++) {        
        let numEle = document.createElement('div');
        numEle.classList = 'number1';
        numEle.textContent = numString.charAt(k);    
        display.appendChild(numEle);
    }
}

// calculate based on 'operation' string
function calculate(chosenOperatorion, num1, num2) {
    if (chosenOperatorion == 'add') {
        return num1 + num2;
    } else if (chosenOperatorion == 'sub') {
        return num1 - num2;
    } else if (chosenOperatorion == 'mult') {
        return num1 * num2;
    } else if (chosenOperatorion == 'division') {
        return num1 / num2;
    }
}

// clear display
function clear() {
    // create reference to all numbers and operator present
    const toClear = document.querySelectorAll('.number1, .number2, .symbol')
    // remove each element
    toClear.forEach(clear => {
        clear.remove();
    });
    hasOperator = false;
}

// trigger calculation
function equals() {
    // create reference for both number sets and initialize strings for them
    let numbers1 = document.querySelectorAll('.number1');
    let numbers2 = document.querySelectorAll('.number2');
    let number1String = null;
    let number2String = null;
    // get each number from both sets and assign to string
    for (let i = 0; i < numbers1.length; i++) {        
        if (number1String == null) {
            number1String = numbers1[i].innerHTML;
        } else {
            number1String = number1String + numbers1[i].innerHTML;
        }        
    }
    for (let j = 0; j < numbers2.length; j++) {        
        if (number2String == null) {
            number2String = numbers2[j].innerHTML;
        } else {
            number2String = number2String + numbers2[j].innerHTML;
        }        
    }
    // check chosen operator and convert strings to number-type
    let operation = checkOperator(operator);
    let number1Conv = parseInt(number1String, 10);
    let number2Conv = parseInt(number2String, 10);

    // calculate result and clear number sets and operator from display
    result = calculate(operation, number1Conv, number2Conv);
    numbers1.forEach (element1 => {
        element1.remove();
    });
    numbers2.forEach (element2 => {
        element2.remove();
    });
    symbol.remove();

    // allow new operator and display each number of result as one element in display with class 'number1'
    hasOperator = false;
    getNumberAsElements(result);
    numClass = 'number1';
}

// assign evenlisteners to buttons
const numButtons = document.querySelectorAll('.calc-numButton');
numButtons.forEach((numButton) => {
    numButton.addEventListener('click', buttonClick);
});

const operButtons = document.querySelectorAll('.calc-operButton');
operButtons.forEach((operButton) => {
    operButton.addEventListener('click', operatorClick);
});

const equalToButton = document.querySelector('#equal-to');
equalToButton.addEventListener('click', equals);

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clear);

