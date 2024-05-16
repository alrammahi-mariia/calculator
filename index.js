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

const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const display = document.querySelector("input");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const operateButton = document.querySelector("#operate");
const resetButton = document.querySelector("#reset");
const deleteButton = document.querySelector("#delete");


    numberButtons.forEach((button) => {
        button.addEventListener('click', () =>{
        display.value = button.innerText;
        currentNum = display.value;
        console.log(`currentNum: ${currentNum}`);

    })
    })


 operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.value = button.innerText;
        operator = display.value;
        console.log(operator);
    })
 })

function operate(previousOperand, currentOperand, operator){
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (operator === "+"){
        return add(prev,current);
    }
    else if (operator === "-"){
        return subtract(prev,current);
    } 
    else if (operator === "/"){
        return divide(prev,current);
    } 
    else (operator === "*")
        return multiply(prev,current);

}

 operateButton.addEventListener('click', () => 
    console.log(operate()));