document.addEventListener("DOMContentLoaded", function() {  

    //Find the buttons and assign them to a variable for readability
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
    let btnClear = document.getElementById('clear');
    let btnAdd = document.getElementById('add');
    let btnSubstract = document.getElementById('substract');
    let btnMultiply = document.getElementById('multiply');
    let btnDivide = document.getElementById('divide');
    let btnEqual = document.getElementById('equal');
    let input = document.getElementById('input');
      
    //Initialize the array that will contain the numbers and operators
    let array = [];

    //Make a function to update the screen with new information for readability
    function updateScreen (){
        input.value = array.join('');
    }

    //Make the clear button turn the display to zero
    btnClear.addEventListener('click', () =>{
        array = [];
        updateScreen();
    });

    //Write a function to operate a calculation
    function operate () {

    }

    //Add event listeners to button 0-9

    let buttons = [btn7, btn8, btn9, btn4, btn5, btn6, btn1, btn2, btn3, btn0];
    let values = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            array.push(values[index]);
            updateScreen();
        });
    });

    //Add eventlisteners for operator buttons
    btnAdd.addEventListener('click', () =>{
        array.push('+');
        updateScreen();
    });

    btnSubstract.addEventListener('click', () =>{
        array.push('-');
        updateScreen();
    });

    btnMultiply.addEventListener('click', () =>{
        array.push('*');
        updateScreen();
    });

    btnDivide.addEventListener('click', () =>{
        array.push('/');
        updateScreen();
    });

    //Add eventlistener for equal sign button
    btnEqual.addEventListener('click', () =>{
        
    });
       

});