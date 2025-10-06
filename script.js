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
        //Reinitialize outputStringArray
        //Display outputStringArray
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
        //When clicked, check to see if its the decimal indicator in a number expression before the operator, or after
            //Check outputStringArray for an operator
                //If outPutStringArray does not contain an operator
                    //Check numberArray1 if there is a decimal indicator present
                        //If yes, continue
                        //If no, additional checks to numberArray1
                            //Check to see if there is a number as the last character of numberArray1
                                //If no, add 0 and decimal indicator
                                //If yes, just add the decimal indicator
                //If outputStringArray does contain an operator
                    //Check numberArray2 in there is a decimal indicator present
                        //If yes, continue
                        //If no, additional checks to numberArray2
                            //Check to see if there is a number as the last character of numberArray1
                                //If no, add 0 and decimal indicator
                                //If yes, just add the decimal indicator
        //Add contents of numberArray1, operatorArray and numberArray2 to outputStringArray
            //If arrays are empty, add nothing
        //Display outputStringArray    
        //reinitialize the operator and number arrays
        
    });

    btnAdd.addEventListener('click', () =>{
        //Check to see if operatorArray contains an operator
            //If yes it contains an operator check to see if numberArray2 contains a number
                //If yes, resolve the calculation
                    //Then add the answer of the calculation to numberArray1
                    //Then add the operator to the operatorArray
                    //Then add the numberArray1 and operatorArray to outputStringArray
                    //Then display outputStringArray
                //If no, replace the operator in the operator Array
                    //Then add numberArray1 and operatorArray to outputStringArray
                    //Then display outputStringArray
            //If no it contains no operator 
                //Check to see if numberArray1 contains a number
                    //If no, add 0 to numberArray1
                        //Then add operator to operatorArray
                        //Then add numberArray1 and operatorArray to outputStringArray
                        //Then display outputStringArray
                    //If yes add operator to operatorArray
                    //Then add numberArray1 and operatorArray to outputStringArray
                    //Then display outpuStringArray
    });

    btnSubstract.addEventListener('click', () =>{
        
    });

    btnMultiply.addEventListener('click', () =>{
        
    });

    btnDivide.addEventListener('click', () =>{
        
    });

    

});








