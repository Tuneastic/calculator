document.addEventListener("DOMContentLoaded", function() {
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

    btnClear.addEventListener('click', () =>{
        array = [];
        input.value = array;
    });

    btnDelete.addEventListener('click', () =>{
        array.pop();
        input.value = array.join('');
    });

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
        array.push(values[index]);
        input.value = array.join('');
        });
    });

    btnAdd.addEventListener('click', () =>{

    });

    btnSubstract.addEventListener('click', () =>{

    });

    btnMultiply.addEventListener('click', () =>{

    });

    btnDivide.addEventListener('click', () =>{

    });

    btnEqual.addEventListener('click', () =>{

    });

    btnDecimal.addEventListener('click', () =>{

    });

});








