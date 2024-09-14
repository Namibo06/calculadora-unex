document.addEventListener('DOMContentLoaded',() =>{
    const display = document.getElementById('display');
    const clearOne = document.getElementById('clearOne');
    const clearAll = document.getElementById('clearAll');
    const one = document.getElementById('one');
    const two = document.getElementById('two');
    const three = document.getElementById('three');
    const four = document.getElementById('four');
    const five = document.getElementById('five');
    const six = document.getElementById('six');
    const seven = document.getElementById('seven');
    const eight = document.getElementById('eight');
    const nine = document.getElementById('nine');
    const zero = document.getElementById('zero');
    const point = document.getElementById('point');
    const calculate = document.getElementById('equals');
    const divide = document.getElementById('divide');
    const multiply = document.getElementById('multiply');
    const subtract = document.getElementById('subtract');
    const add = document.getElementById('add');
    const porcent = document.getElementById('porcent');

    let currentValue = ""; 
    let firstNumber = null; 
    let operation = ""; 
    let result = null; 

    function changeDisplay(values) {
        display.innerHTML = values;
    }

    function addNumber(number) {
        if (result !== null) {
            currentValue = "";
            result = null;   
        }
        
        currentValue += number;
        let firstValueDisplay = firstNumber !== null ? firstNumber : "";
        changeDisplay(firstValueDisplay + " " + operation + " " + currentValue); 
    }

    function defineOperation(chosenOperation) {
        if (currentValue !== '') {
            
            if (result !== null && currentValue === result.toString()) {
                firstNumber = result;
                result = null; 
            } else {
                firstNumber = parseFloat(currentValue);
            }
    
            operation = chosenOperation;
            currentValue = "";
            changeDisplay(firstNumber + " " + chosenOperation);
        }
    }

    function calculateValues() {
        if (firstNumber !== null && currentValue !== "") {
            let secondNumber = parseFloat(currentValue);

            changeDisplay(firstNumber + " " + operation + " " + secondNumber); 

            switch (operation) {
                case '+':
                    result = firstNumber + secondNumber;
                    break;
                case '-':
                    result = firstNumber - secondNumber;
                    break;
                case '*':
                    result = firstNumber * secondNumber;
                    break;
                case '%':
                    result = firstNumber % secondNumber;
                    break;
                case '/':
                    if (secondNumber === 0) {
                        result = 'Erro: Divisão por zero';
                    } else {
                        result = firstNumber / secondNumber;
                    }
                    break;
                default:
                    result = secondNumber;
            }

            changeDisplay(result); 
            currentValue = result.toString(); 
            firstNumber = null;
            operation = ""; 
        }
    }

    one.addEventListener('click', () => addNumber('1'));
    two.addEventListener('click', () => addNumber('2'));
    three.addEventListener('click', () => addNumber('3'));
    four.addEventListener('click', () => addNumber('4'));
    five.addEventListener('click', () => addNumber('5'));
    six.addEventListener('click', () => addNumber('6'));
    seven.addEventListener('click', () => addNumber('7'));
    eight.addEventListener('click', () => addNumber('8'));
    nine.addEventListener('click', () => addNumber('9'));
    zero.addEventListener('click', () => addNumber('0'));
    point.addEventListener('click', () => addNumber('.'));

    add.addEventListener('click', () => defineOperation('+'));
    subtract.addEventListener('click', () => defineOperation('-'));
    multiply.addEventListener('click', () => defineOperation('*'));
    divide.addEventListener('click', () => defineOperation('/'));
    porcent.addEventListener('click',() => defineOperation('%'));

    calculate.addEventListener('click', calculateValues);

    clearOne.addEventListener('click', () => {
        currentValue = currentValue.slice(0, -1);
   
        if (currentValue === "") {
            result = null; 
        }
        
        let primeiroValorDisplay = firstNumber !== null ? firstNumber : "";
        changeDisplay(currentValue === '' ? '0' : primeiroValorDisplay + " " + operation + " " + currentValue);
    });

    clearAll.addEventListener('click', () => {
        currentValue = "";
        firstNumber = null;
        operation = "";
        result = null;
        changeDisplay('0');
    });
});