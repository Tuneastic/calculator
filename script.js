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
    let btnClear = document.getElementById('clear');
    let btnAdd = document.getElementById('add');
    let btnSubstract = document.getElementById('substract');
    let btnMultiply = document.getElementById('multiply');
    let btnDivide = document.getElementById('divide');
    let btnEqual = document.getElementById('equal');
    let input = document.getElementById('input');
    let btnDecimal = document.getElementById('decimal');
    let outputStringArray = [];
    let operatorArray = [];
    let numberArray1 = [];
    let numberArray2 = [];

    btnClear.addEventListener('click', () =>{
        
    });

    btn7.addEventListener('click', () =>{
        //When clicked, check to see if its the number expression before the operator, or after
            //Check outputStringArray for an operator
        //Depending on the answer, place number in numberArray1 or numberArray2
            //If outputStringArray does not contain an operator, add number to numberArray1
            //If outputStringArray does contain an operator, add number to numberArray2
        //Add contents of numberArray1 and numberArray2 and operatorArray to outputStringArray
            //If arrays are empty, add nothing
        //Display outputStringArray
        //Reinitialize the operator and number arrays
    });

    btn8.addEventListener('click', () =>{
        
    });

    btn9.addEventListener('click', () =>{
        
    });

    btn4.addEventListener('click', () =>{
        
    });

    btn5.addEventListener('click', () =>{
        
    });

    btn6.addEventListener('click', () =>{
        
    });

    btn1.addEventListener('click', () =>{
        
    });

    btn2.addEventListener('click', () =>{
        
    });

    btn3.addEventListener('click', () =>{
        
    });

    btn0.addEventListener('click', () =>{
        
    });

    btnDecimal.addEventListener('click', () =>{
        //When clicked, check to see if its the decimal in a number expression before the operator, or after
        //Check outputStringArray for an operator
            //If outPutStringArray does not contain an operator
                //Check numberArray1 if there is a decimal point present
                    //If yes, continue
                    //If no, additional checks to numberArray1
                        //Check to see if there is a number as the last character of numberArray1
                            //If no, add 0 and decimal point
                            //If yes, just add the decimal point
            //If outputStringArray does contain an operator
                //Check numberArray2 in there is a decimal point present
                    //If yes, continue
                    //If no, additional checks to numberArray2
                        //Check to see if there is a number as the last character of numberArray1
                            //If no, add 0 and decimal point
                            //If yes, just add the decimal point
        //Add contents of numberArray1 and numberArray2 and operatorArray to outputStringArray
            //If arrays are empty, add nothing
        //Display outputStringArray    
        //reinitialize the operator and number arrays
        
    });

    btnAdd.addEventListener('click', () =>{
        
    });

    btnSubstract.addEventListener('click', () =>{
        
    });

    btnMultiply.addEventListener('click', () =>{
        
    });

    btnDivide.addEventListener('click', () =>{
        
    });

    

});












/*
document.addEventListener("DOMContentLoaded", function() {  

    //Find the buttons and elements and assign them to variables
    //Declare the array that will contain the calculation and initialize it
    //Declare the array with the operators to check if the calculation array makes sense
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
    let btnDecimal = document.getElementById('decimal');
    let operatorArray = ['-','+','*','/'];
    let array = [];

    //Make a function to update the screen with new information
    function updateScreen (){
        input.value = array.join('');
    }

    //Make the clear button turn the display to zero and reinitialize the array
    btnClear.addEventListener('click', () =>{
        array = [];
        updateScreen();
    });

    //Add event listeners to button 0-9 and .

    let buttons = [btn7, btn8, btn9, btn4, btn5, btn6, btn1, btn2, btn3, btn0];
    let values = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            array.push(values[index]);
            updateScreen();
        });
    });

    btnDecimal.addEventListener('click', () =>{
       if (array.includes('.')){
        return;
       }
       else if (array.length <= 0){
        array.push('0');
        array.push('.');
        updateScreen();
        return;
       }
       else if ( operatorArray.includes(array[array.length-1])){
        return;
       }
       else {
        array.push('.');
        updateScreen();
       }
    });

    //Add eventlisteners for operator buttons
    //Add aan array consisting of operators to check if the calculation already has one

    btnAdd.addEventListener('click', () =>{
       if (operatorArray.some(operator => array.includes(operator))){
        return;
       }
       else {
        array.push('+');
        updateScreen();
       }
    });

    btnSubstract.addEventListener('click', () =>{
        if (operatorArray.some(operator => array.includes(operator))){
        return;
       }
       else {
        array.push('-');
        updateScreen();
       }
    });

    btnMultiply.addEventListener('click', () =>{
        if (operatorArray.some(operator => array.includes(operator))){
        return;
       }
       else {
        array.push('*');
        updateScreen();
       }
    });

    btnDivide.addEventListener('click', () =>{
        if (operatorArray.some(operator => array.includes(operator))){
        return;
       }
       else {
        array.push('/');
        updateScreen();
       }
    });

    //Add eventlistener for equal sign button
    btnEqual.addEventListener('click', () =>{
        
    });
       

});
*/