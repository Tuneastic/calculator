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
    let numberButtons =['btn7', 'btn8', 'btn9', 'btn4', 'btn5', 'btn6', 'btn1', 'btn2', 'btn3', 'btn0'];
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

    btnBackspace.addEventListener('click', () =>{
        array.pop();
        input.value = array.join('');
    });
    
    btn7.addEventListener('click', () =>{
        array.push(7);
        input.value = array.join('');
    });

    btn8.addEventListener('click', () =>{
        array.push(8);
        input.value = array.join('');
    });

    btn9.addEventListener('click', () =>{
        array.push(9);
        input.value = array.join('');
    });

    btn4.addEventListener('click', () =>{
        array.push(4);
        input.value = array.join('');
    });

    btn5.addEventListener('click', () =>{
        array.push(5);
        input.value = array.join('');
    });

    btn6.addEventListener('click', () =>{
        array.push(6);
        input.value = array.join('');
    });

    btn1.addEventListener('click', () =>{
        array.push(1);
        input.value = array.join('');
    });

    btn2.addEventListener('click', () =>{
        array.push(2);
        input.value = array.join('');
    });

    btn3.addEventListener('click', () =>{
        array.push(3);
        input.value = array.join('');
    });
});








