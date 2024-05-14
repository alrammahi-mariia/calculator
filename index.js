function add(a, b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function multiply (a, b){
    return a * b
}

function divide (a, b){
    return a / b
}

let x = 0;
let y = 0;
let operator = " ";

function operate(x, y, operator){
    if (operator === "+"){
        return add(x,y);
    }
    else if (operator === "-"){
        return subtract(x,y);
    } 
    else if (operator === "/"){
        return divide(x,y);
    } 
    else (operator === "*")
        return multiply(x,y);

}