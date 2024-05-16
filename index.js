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



function appendNumber(number){
   currentNumber = currentNumber.toString() + number.toString();
   console.log(currentNumber);

}

function chooseOperation(selectedOperator){
   operation = selectedOperator;
   previousNumber = currentNumber;
   currentNumber = '';
   console.log(previousNumber);
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
            computation = prev / current;
        break;
        default:
            return;

    }

    currentNumber = computation;
    previousNumber = '';
    operation = undefined;
    updateDisplay();
    console.log(currentNumber);
}

function updateDisplay(){
    display.value = previousNumber + ' ' + (operation || '') + ' ' + currentNumber;

}


// function updateDisplay() {
//     document.getElementById('current-operand').innerText = currentOperand;
//     document.getElementById('previous-operand').innerText = previousOperand + ' ' + (operation || '');
//   }