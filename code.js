let numClass = 'number1'
let operator = null;
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
    pressedKey = e.target.innerText;
    
    // check if pressedkey is number or symbol
    // if number, append into display. 
    if (checkIfNum(pressedKey)) {
        let num = document.createElement('div');
        num.classList = numClass;
        num.textContent = pressedKey;    
        display.appendChild(num);

    // if symbol, append it to display and assign it to 'operator'
    } else {
        operator = pressedKey;
        console.log(operator);
        let symbol = document.createElement('div');
        symbol.classList = 'symbol'
        symbol.textContent = pressedKey;
        display.appendChild(symbol);

    // also change numberClass, when symbol is input
        if (numClass == 'number1') {
            numClass = 'number2';

        } else if (numClass == 'number2') {
            numClass = 'number1';
        }
    }
}

const buttons = document.querySelectorAll('.calc-button');
buttons.forEach((button) => {
    button.addEventListener('click', buttonClick);
});

