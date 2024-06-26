const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const display = document.querySelector("input");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const operateButton = document.querySelector("#operate");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const dotButton = document.querySelector("#dot");


numberButtons.forEach((button) => {
    button.addEventListener('click', () =>{
    appendNumber(button.innerText);
    updateDisplay();

})
})


 operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.innerText);
        updateDisplay();
    })
 })

  
let currentNumber = '';
let previousNumber = '';
let operation = null;

 operateButton.addEventListener('click', operate);
 clearButton.addEventListener('click', clear);
 deleteButton.addEventListener('click', deleteNumber);
 dotButton.addEventListener('click', addDecimal);


 function addDecimal(){
    if(currentNumber.includes('.')) return;
    if (currentNumber === '') currentNumber = '0';
    currentNumber += '.';
    updateDisplay();
}

function appendNumber(number){
    if (number === "." && currentNumber.includes('.')) return;
   currentNumber = currentNumber.toString() + number.toString();
   console.log(currentNumber);

}

function chooseOperation(selectedOperator){
   operation = selectedOperator;
   previousNumber = currentNumber;
   currentNumber = '';
   console.log(previousNumber);
}

function clear(){
    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateDisplay();
}

function deleteNumber(){
    currentNumber = currentNumber.toString().slice(0,-1);
    updateDisplay();

}


function operate(){
    let computation;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;

    switch(operation){
        case '+':
            computation = prev + current;
        break;
        case '-':
            computation = prev - current;
        break;
        case 'x':
            computation = prev * current;
        break;
        case '/':
           if (current !== 0) computation = prev / current;
           else 
           alert("Cannot divide by 0!");
           computation = 0;
        break;
        default:
            return;

    }

    currentNumber = Math.round(computation * 100)/100;
    previousNumber = '';
    operation = undefined;
    updateDisplay();
}

function updateDisplay(){
    display.value = previousNumber + ' ' + (operation || '') + ' ' + currentNumber;

}