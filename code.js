let numClass = 'number1'
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
    pressedKey = e.target.innerText;
    if (checkIfNum(pressedKey)) {
        let num = document.createElement('div');
        num.classList = numClass;
        num.textContent = pressedKey;    
        display.appendChild(num);
    } else {
        console.log('not number');
        if (numClass == 'number1') {
            numClass = 'number2';
            console.log(numClass)
        } else if (numClass == 'number2') {
            numClass = 'number1';
        }
    }
}

const buttons = document.querySelectorAll('.calc-button');
buttons.forEach((button) => {
    button.addEventListener('click', buttonClick);
});

