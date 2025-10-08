document.addEventListener("DOMContentLoaded", function() {
    //Declaration of all variables, some being initialized
    let btn7 = document.getElementById('7');
    let btn8 = document.getElementById('8');
    let btn9 = document.getElementById('9');
    let btn4 = document.getElementById('4');
    let btn5 = document.getElementById('5');
    let btn6 = document.getElementById('6');
    let btn1 = document.getElementById('1');
    let btn2 = document.getElementById('2');
    let btn3 = document.getElementById('3');
    let btn0 = document.getElementById('0');
    let buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let btnClear = document.getElementById('clear');
    let btnDelete = document.getElementById('delete');
    let btnAdd = document.getElementById('add');
    let btnSubstract = document.getElementById('substract');
    let btnMultiply = document.getElementById('multiply');
    let btnDivide = document.getElementById('divide');
    let btnEqual = document.getElementById('equal');
    let input = document.getElementById('input');
    let btnDecimal = document.getElementById('decimal');
    let array = [];
    let num1 = '';
    let num2 = '';
    let operator = '';
    let result;
    
    //This function evaluates the array, and extracts 2 numbers and an operator from it
    function extractCalc(array) {
        num1 = '';
        num2 = '';
        operator = '';
        
        for (let i = 0; i < array.length; i++) {
            if (array[i] === '+' || array[i] === '-' || array[i] === '*' || array[i] === '/') {
                operator = array[i];
                num1 = num1.length ? num1 : array.slice(0, i).join('');
                num2 = array.slice(i + 1).join('');
                break;
            }
        }

        return [num1, operator, num2];
    };

    //This function checks which operator is used in array, and performs the corresponding calculation
    function operate(operator){
        if (operator === '+'){
            result = parseFloat(num1) + parseFloat(num2);
        }

        else if (operator === '-'){
            result = parseFloat(num1) - parseFloat(num2);
        }
        else if (operator === '*'){
            result = parseFloat(num1) * parseFloat(num2);
        }
        else if (operator === '/'){
            result = parseFloat(num1) / parseFloat(num2);
        }
        else {
            result = 'Invalid operator';
        }
    };

    //This button reinitializes the array, and resets the display
    btnClear.addEventListener('click', () =>{
        array = [];
        input.value = array.join('');
    });

    //This function deletes the last addition to the array
    btnDelete.addEventListener('click', () =>{
        array.pop();
        input.value = array.join('');
    });

    //This code adds eventlisteners to all the number buttons and pushes the corresponding number into the array
    //Then displays the array in the input field
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
        array.push(values[index]);
        input.value = array.join('');
        });
    });

    //This code adds an eventlistener to the add button, and pushes + to the array
    //Then displays the array in the input field
    btnAdd.addEventListener('click', () =>{
        array.push('+');
        input.value = array.join('');
    });

    //This code adds an eventlisstener to the substract button, and pushes - to the array
    //Then displays the array in the input field
    btnSubstract.addEventListener('click', () =>{
        array.push('-');
        input.value = array.join('');
    });

    //This code adds an eventlistener to the multiply button, and pushes * to the array
    //Then displays the array in the input field
    btnMultiply.addEventListener('click', () =>{
        array.push('*');
        input.value = array.join('');
    });

    //This code adds an eventlistener to the divide button, and pushes / to the array
    //Then displays the array in the input field
    btnDivide.addEventListener('click', () =>{
        array.push('/');
        input.value = array.join('');
    });


    //This code adds an eventlistener to the equal button, extracts and performs the calculation in array
    //and displays the result in the input field
    btnEqual.addEventListener('click', () =>{
        extractCalc(array);
        operate(operator);
        input.value = result;
    });

    //This code adds a decimal seperator to a number, then displays the array in the input field
    btnDecimal.addEventListener('click', () =>{
        array.push('.');
        input.value = array.join('');
    });

});








