/*
Program: Lab 7: JavaScript Arithmetic Operator
Student ID: 300383287
Date: 11/13/2024
Class: CSIS 1280
*/

function addValue(){
    
    // get the operands value
    var a = document.getElementById('input_a').value.trim();
    var b = document.getElementById('input_b').value.trim();

    // parse to integer. You can use: parseInt(input, 10);
    var a_num = parseInt(a, 10);
    var b_num = parseInt(b, 10);

    // check if inputs are valid
    if (isNaN(a_num) || isNaN(b_num)) {
        document.mycalculator.output.value = 'Please enter valid numbers';
        return null;
    }

    // perform operation
    var result = a_num + b_num;

    // creating the text output
    var text = `${a_num } + ${b_num}  = ${result}`; 

    // change the text area
    document.mycalculator.output.value = text;

}


function mulValue(){

    // get the operands value
    var a = document.getElementById('input_a').value.trim();
    var b = document.getElementById('input_b').value.trim();

    // parse to integer. You can use: parseInt(input, 10);
    var a_num = parseInt(a, 10);
    var b_num = parseInt(b, 10);

    // check if inputs are valid
    if (isNaN(a_num) || isNaN(b_num)) {
        document.mycalculator.output.value = 'Please enter valid numbers';
        return null;
    }

    // perform operation
    var result = a_num * b_num;

    // creating the text output
    var text = `${a_num } * ${b_num}  = ${result}`; 

    // change the text area
    document.mycalculator.output.value = text;

}

function divValue(){

    // get the operands value
    var a = document.getElementById('input_a').value.trim();
    var b = document.getElementById('input_b').value.trim();

    // parse to integer. You can use: parseInt(input, 10);
    var a_num = parseInt(a, 10);
    var b_num = parseInt(b, 10);

    // check if inputs are valid
    if (isNaN(a_num) || isNaN(b_num)) {
        document.mycalculator.output.value = 'Please enter valid numbers';
        return null;
    }

    // perform operation
    var result = a_num / b_num;

    // creating the text output
    var text = `${a_num } / ${b_num}  = ${result}`; 

    // change the text area
    document.mycalculator.output.value = text;

}
