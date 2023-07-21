let numClass = 'number1'
let operator = null;
let hasOperator = false;
let result = null;
const display = document.querySelector('#display');

function getPressedKey(key) {   
    //let pressedKey = e.target.innerText;
    console.log(key);
    // let char = document.createElement('div');
    // char.classList = 'number1'
    // char.textContent = pressed;    
    // display.appendChild(char);
}

function checkIfNum(character) {
    check = isNaN(character);
    if (isNaN(character)) {
        return false;
    } else {
        return true;
    }
}

function buttonClick(e) {
    // get the value of the key pressed
    let pressedNum = e.target.innerText;
    let num = document.createElement('div');
    num.classList = numClass;
    num.textContent = pressedNum;    
    display.appendChild(num);
    
    // check if pressedkey is number or symbol
    // if number, append into display. 
    // if (checkIfNum(pressedKey)) {
    //     let num = document.createElement('div');
    //     num.classList = numClass;
    //     num.textContent = pressedKey;    
    //     display.appendChild(num);

    // // if symbol, append it to display and assign it to 'operator'
    // } else {
    //     operator = pressedKey;
    //     console.log(operator);
    //     let symbol = document.createElement('div');
    //     symbol.classList = 'symbol'
    //     symbol.textContent = pressedKey;
    //     display.appendChild(symbol);

    // // also change numberClass, when symbol is input
    //     if (numClass == 'number1') {
    //         numClass = 'number2';
    //     } else if (numClass == 'number2') {
    //         numClass = 'number1';
    //     }
    // }
}

symbol = document.createElement('div');
symbol.classList = 'symbol'

function operatorClick(e) {
    if (hasOperator == true) {
        alert('One operator only!')
    } else {
        // get pressed operator
        let pressedOper = e.target.innerText;
        // assign pressed operator to variable
        operator = pressedOper;
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

function getNumberAsElements(resultNum) {
    let numString = resultNum.toString();
    let len = numString.length;
    for (let k = 0; k < len; k++) {
        // console.log(numString.charAt(k));
        let numEle = document.createElement('div');
        numEle.classList = 'number1';
        numEle.textContent = numString.charAt(k);    
        display.appendChild(numEle);
    }
    // console.log(len);

}


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

// resultEle = document.createElement('div');
// resultEle.classList = '#result';

function equals() {
    let numbers1 = document.querySelectorAll('.number1');
    let numbers2 = document.querySelectorAll('.number2');
    //console.log(numbers.length);
    let number1String = null;
    let number2String = null;
    for (let i = 0; i < numbers1.length; i++) {
        //console.log(numbers[i].innerHTML);
        if (number1String == null) {
            number1String = numbers1[i].innerHTML;
        } else {
            number1String = number1String + numbers1[i].innerHTML;
        }        
    }
    for (let j = 0; j < numbers2.length; j++) {
        //console.log(numbers[i].innerHTML);
        if (number2String == null) {
            number2String = numbers2[j].innerHTML;
        } else {
            number2String = number2String + numbers2[j].innerHTML;
        }        
    }
    let operation = checkOperator(operator);
    let number1Conv = parseInt(number1String, 10);
    let number2Conv = parseInt(number2String, 10);

    result = calculate(operation, number1Conv, number2Conv);

    numbers1.forEach (element1 => {
        element1.remove();
    });
    numbers2.forEach (element2 => {
        element2.remove();
    });
    symbol.remove();
    hasOperator = false;
    getNumberAsElements(result);
    numClass = 'number1';


    // console.log(result);
    // console.log(operation)
    // console.log(number1Conv);
    // console.log(number2Conv);
    // console.log(typeof(number1Conv));
    // console.log(typeof(number2Conv));

}


const numButtons = document.querySelectorAll('.calc-numButton');
numButtons.forEach((numButton) => {
    numButton.addEventListener('click', buttonClick);
});

const operButtons = document.querySelectorAll('.calc-operButton');
operButtons.forEach((operButton) => {
    operButton.addEventListener('click', operatorClick);
});

const equalToButton = document.querySelector('#equal-to');
equalToButton.addEventListener('click', equals)

